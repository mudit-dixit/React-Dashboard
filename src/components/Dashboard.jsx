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
  
  // New state variables for filters
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dateRange, setDateRange] = useState('7days');
  const [sortBy, setSortBy] = useState('revenue'); // 'revenue' or 'quantity'
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedProducts, setSelectedProducts] = useState(new Set()); // For tracking selected products in charts

  // Get unique categories from products
  const categories = ['All', ...new Set(products.map(p => p.category))];
  const PRODUCT_COLORS = {
    'Gaming Laptop': '#0088FE',
    'Smart Watch': '#00C49F',
    'Wireless Earbuds': '#FFBB28',
    '4K Smart TV': '#FF8042',
    'Robot Vacuum': '#8884d8',
    'Smart Refrigerator': '#82ca9d'
  };
  // Date range options
  const dateRangeOptions = {
    '7days': 'Last 7 Days',
    '30days': 'Last 30 Days',
    '90days': 'Last 90 Days',
    '6months': 'Last 6 Months',
    '1year': 'Last Year'
  };

  useEffect(() => {
    fetchDashboardData();
  }, [selectedCategory, dateRange]); // Refetch when filters change

  const fetchDashboardData = async () => {
    try {
     
      setLoading(true);
      
      // Calculate date range
      const endDate = new Date().toISOString();
      const startDate = getStartDate(dateRange);

      // Fetch products with category filter
      const productsQuery = store.fetchAllProducts(
        selectedCategory !== 'All' ? {category:{allofterms: selectedCategory} } : {}
      );
      setQuery(productsQuery);
      const productsData = await productsQuery;
      setProducts(productsData.queryProduct);

      // Fetch sales with date range and category filter
      const salesQuery = store.fetchSalesByDate(
        startDate.toISOString(), 
        endDate,
        //selectedCategory !== 'All' ? { category: selectedCategory } : {}
      );
      setQuery(salesQuery);
      const salesData = await salesQuery;
       // Add this at the end of your try block in fetchDashboardData
       if (selectedProducts.size === 0) {
        const productsFromSales = [...new Set(salesData.querySale.map(sale => sale.product.name))];
        setSelectedProducts(new Set(productsFromSales.slice(0, 3)));
      }
      setSales(salesData.querySale);

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

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

  // Enhanced chart data processing
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

  // Process category-wise data for pie chart
 

  const buildFilterMenu = () => (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex w-full bg-[#27445D] justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-[#6489a9]">
        Filters
        <ChevronDownIcon className="-mr-1 size-5 text-gray-400" />
      </MenuButton>

      <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#27445D] shadow-lg">
        <div className="p-2">
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-200 mb-2">Category</h3>
            {categories.map(category => (
              <MenuItem key={category}>
                <button
                  className={`w-full text-left px-2 py-1 text-sm ${
                    selectedCategory === category ? 'bg-[#497D74]' : ''
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </MenuItem>
            ))}
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-200 mb-2">Time Range</h3>
            {Object.entries(dateRangeOptions).map(([value, label]) => (
              <MenuItem key={value}>
                <button
                  className={`w-full text-left px-2 py-1 text-sm ${
                    dateRange === value ? 'bg-[#497D74]' : ''
                  }`}
                  onClick={() => setDateRange(value)}
                >
                  {label}
                </button>
              </MenuItem>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-200 mb-2">Sort By</h3>
            <MenuItem>
              <button
                className={`w-full text-left px-2 py-1 text-sm ${
                  sortBy === 'revenue' ? 'bg-[#497D74]' : ''
                }`}
                onClick={() => setSortBy('revenue')}
              >
                Revenue
              </button>
            </MenuItem>
            <MenuItem>
              <button
                className={`w-full text-left px-2 py-1 text-sm ${
                  sortBy === 'quantity' ? 'bg-[#497D74]' : ''
                }`}
                onClick={() => setSortBy('quantity')}
              >
                Quantity
              </button>
            </MenuItem>
          </div>
        </div>
      </MenuItems>
    </Menu>
  );

  // Add a pie chart component for category distribution
  const CategoryPieChart = ({ data }) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
      <PieChart width={400} height={300}>
      <Pie
        data={Object.values(data)}
        dataKey={sortBy} // This will use either 'revenue' or 'quantity' based on your sortBy state
        nameKey="category"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label={(entry) => entry.category}
      >
        {Object.values(data).map((entry, index) => (
          <Cell 
            key={`cell-${index}`} 
            fill={COLORS[index % COLORS.length]} 
          />
        ))}
      </Pie>
      <Tooltip 
        formatter={(value) => sortBy === 'revenue' ? 
          `$${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : 
          value.toLocaleString()
        }
      />
      <Legend />
    </PieChart>
    );
  };
  
  
  // Sort products based on current sort settings
  const sortedProducts = [...products].sort((a, b) => {
    const valueA = sortBy === 'revenue' ? a.totalRevenue : a.totalQuantity;
    const valueB = sortBy === 'revenue' ? b.totalRevenue : b.totalQuantity;
    return sortOrder === 'desc' ? valueB - valueA : valueA - valueB;
  }).slice(0, 5);

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




  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg">Loading dashboard data...</div>
      </div>
    );
  }
  const { chartData, products: uniqueProducts } = processProductWiseChartData();
  const processCategoryData = () => {
    // Group sales by product category
    return sales.reduce((acc, sale) => {
      const category = sale.product.category;
      
      if (!acc[category]) {
        acc[category] = {
          category: category,
          revenue: 0,
          quantity: 0
        };
      }
      
      acc[category].revenue += sale.revenue;
      acc[category].quantity += sale.quantity;
      return acc;
    }, {});
  };
  const categoryData = processCategoryData();
  return (
    <div className="p-4 gap-2">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Product Sales Dashboard</h1>
        {buildFilterMenu()}
      </div>
    <div className='flex gap-2'>
    <div className="flex flex-col gap-2">
        

        {/* Category Distribution */}
        

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
        
      </div>
      <div className="bg-[#43867b] p-4 rounded-lg shadow flex items-center justify-center">
          <h2 className="text-lg font-semibold mb-2">Category Distribution</h2>
          <CategoryPieChart data={categoryData} />
      </div>
    </div>
      {/* Charts Grid */}
      
      {/* Top Products Table */}
      <div className="bg-[#43867b] p-4 rounded-lg shadow mt-2">
        <h2 className="text-lg font-semibold mb-2">Top Products</h2>
        <table className="min-w-full">
          {/* ... (existing table configuration) ... */}
          <tbody>
            {sortedProducts.map(product => (
              <tr key={product.id} className="hover:bg-[#71BBB2]">
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2 text-right">
                  ${product.totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className="px-4 py-2 text-right">{product.totalQuantity.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default observer(Dashboard);