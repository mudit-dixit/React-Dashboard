import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { useQuery } from '../models';
import { format, subDays, subMonths } from 'date-fns';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function Dashboard() {
  const queryInfo = useQuery();
  const { store, setQuery } = queryInfo;
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // State variables for filters
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dateRange, setDateRange] = useState('7days');
  const [sortBy, setSortBy] = useState('revenue');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedProducts, setSelectedProducts] = useState(new Set()); // For tracking selected products in charts

  // Get unique categories
  const categories = ['All', ...new Set(products.map(p => p.category))];

  // Color scheme for different products
  const PRODUCT_COLORS = {
    'Gaming Laptop': '#0088FE',
    'Smart Watch': '#00C49F',
    'Wireless Earbuds': '#FFBB28',
    '4K Smart TV': '#FF8042',
    'Robot Vacuum': '#8884d8',
    'Smart Refrigerator': '#82ca9d'
  };

  const dateRangeOptions = {
    '7days': 'Last 7 Days',
    '30days': 'Last 30 Days',
    '90days': 'Last 90 Days',
    '6months': 'Last 6 Months',
    '1year': 'Last Year'
  };

  useEffect(() => {
    fetchDashboardData();
  }, [selectedCategory, dateRange]);

  const getStartDate = (range) => {
    const today = new Date();
    switch(range) {
      case '7days': return subDays(today, 7);
      case '30days': return subDays(today, 30);
      case '90days': return subDays(today, 90);
      case '6months': return subMonths(today, 6);
      case '1year': return subMonths(today, 12);
      default: return subDays(today, 7);
    }
  };

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const endDate = new Date().toISOString();
      const startDate = getStartDate(dateRange);

      const salesQuery = store.fetchSalesByDate(startDate.toISOString(), endDate);
      setQuery(salesQuery);
      const salesData = await salesQuery;
      setSales(salesData.querySale);

      // Extract unique products from sales data
      const productsFromSales = [...new Set(salesData.querySale.map(sale => sale.product))];
      setProducts(productsFromSales);
      
      // Initialize selected products if empty
      if (selectedProducts.size === 0) {
        setSelectedProducts(new Set(productsFromSales.slice(0, 3).map(p => p.name)));
      }

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const processProductWiseChartData = () => {
    if (!sales?.length) return { chartData: [], products: [] };

    // Group sales by date and product
    const salesByDateAndProduct = sales.reduce((acc, sale) => {
      const date = format(new Date(sale.date), 'yyyy-MM-dd');
      const productName = sale.product.name;
      
      if (!acc[date]) {
        acc[date] = {
          date,
          byProduct: {}
        };
      }
      
      if (!acc[date].byProduct[productName]) {
        acc[date].byProduct[productName] = {
          revenue: 0,
          quantity: 0
        };
      }
      
      acc[date].byProduct[productName].revenue += sale.revenue;
      acc[date].byProduct[productName].quantity += sale.quantity;
      return acc;
    }, {});

    // Convert to chart format
    const chartData = Object.entries(salesByDateAndProduct).map(([date, data]) => ({
      date,
      ...Object.entries(data.byProduct).reduce((acc, [product, values]) => ({
        ...acc,
        [`${product}_revenue`]: values.revenue,
        [`${product}_quantity`]: values.quantity
      }), {})
    })).sort((a, b) => new Date(a.date) - new Date(b.date));

    const uniqueProducts = [...new Set(sales.map(sale => sale.product.name))];
    
    return { chartData, products: uniqueProducts };
  };

  const ProductSelector = ({ products, selectedProducts, onChange }) => (
    <div className="flex flex-wrap gap-2 mt-2 p-2 bg-[#497D74] rounded">
      {products.map(product => (
        <button
          key={product}
          className={`px-2 py-1 text-sm rounded transition-colors ${
            selectedProducts.has(product) 
              ? 'bg-[#27445D] text-white' 
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => {
            const newSelected = new Set(selectedProducts);
            if (newSelected.has(product)) {
              newSelected.delete(product);
            } else {
              newSelected.add(product);
            }
            onChange(newSelected);
          }}
        >
          {product}
        </button>
      ))}
    </div>
  );

  const RevenueChart = ({ data, products, selectedProducts }) => (
    <div className="bg-[#43867b] p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Revenue Trend by Product</h2>
      <LineChart width={800} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          tick={{ fill: 'white' }}
          dataKey="date"
          tickFormatter={(date) => format(new Date(date), 'MMM dd')}
        />
        <YAxis tick={{ fill: 'white' }} />
        <Tooltip
          labelFormatter={(date) => format(new Date(date), 'MMM dd, yyyy')}
          contentStyle={{
            backgroundColor: '#EFE9D5',
            border: 'none',
            borderRadius: '8px',
            padding: '10px'
          }}
          labelStyle={{
            color: '#2C3E50',
            fontWeight: 'bold'
          }}
          itemStyle={{
            color: '#34495E'
          }}
        />
        <Legend />
        {products.filter(product => selectedProducts.has(product)).map((product, index) => (
          <Line
            key={product}
            type="monotone"
            dataKey={`${product}_revenue`}
            name={product}
            stroke={PRODUCT_COLORS[product] || `#${Math.floor(Math.random()*16777215).toString(16)}`}
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        ))}
      </LineChart>
      <ProductSelector 
        products={products}
        selectedProducts={selectedProducts}
        onChange={setSelectedProducts}
      />
    </div>
  );

  const QuantityChart = ({ data, products, selectedProducts }) => (
    <div className="bg-[#43867b] p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Sales Quantity by Product</h2>
      <BarChart width={800} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          tick={{ fill: 'white' }}
          dataKey="date"
          tickFormatter={(date) => format(new Date(date), 'MMM dd')}
        />
        <YAxis tick={{ fill: 'white' }} />
        <Tooltip
          labelFormatter={(date) => format(new Date(date), 'MMM dd, yyyy')}
          contentStyle={{
            backgroundColor: '#EFE9D5',
            border: 'none',
            borderRadius: '8px',
            padding: '10px'
          }}
          labelStyle={{
            color: '#2C3E50',
            fontWeight: 'bold'
          }}
          itemStyle={{
            color: '#34495E'
          }}
        />
        <Legend />
        {products.filter(product => selectedProducts.has(product)).map((product, index) => (
          <Bar
            key={product}
            dataKey={`${product}_quantity`}
            name={product}
            fill={PRODUCT_COLORS[product] || `#${Math.floor(Math.random()*16777215).toString(16)}`}
          />
        ))}
      </BarChart>
      <ProductSelector 
        products={products}
        selectedProducts={selectedProducts}
        onChange={setSelectedProducts}
      />
    </div>
  );

  const { chartData, products: uniqueProducts } = processProductWiseChartData();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg">Loading dashboard data...</div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Product Sales Dashboard</h1>
        {/* Your existing filter menu */}
      </div>

      <div className="grid grid-cols-1 gap-4">
        <RevenueChart 
          data={chartData}
          products={uniqueProducts}
          selectedProducts={selectedProducts}
        />
        
        <QuantityChart 
          data={chartData}
          products={uniqueProducts}
          selectedProducts={selectedProducts}
        />
        
        {/* Your existing tables and other components */}
      </div>
    </div>
  );
}

export default observer(Dashboard);