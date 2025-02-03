import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { useQuery } from '../models';
import { format } from 'date-fns'; // Assuming you're using date-fns for date formatting

function Dashboard() {
  const queryInfo = useQuery();
  const { store, setQuery } = queryInfo;
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        
        // Fetch products
        const productsQuery = store.fetchAllProducts();
        setQuery(productsQuery);
        const productsData = await productsQuery;
        setProducts(productsData);

        // Fetch sales for the last 30 days
        const endDate = new Date().toISOString();
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 6 );
        const salesQuery = store.fetchSalesByDate(startDate.toISOString(), endDate);
        setQuery(salesQuery);
        const salesData = await salesQuery;
        setSales(salesData.querySale
        );

      

      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Process data for charts
  const processChartData = () => {
    // Group sales by date
    const salesByDate = sales?.reduce((acc, sale) => {
      const date = format(new Date(sale.date), 'yyyy-MM-dd');
      if (!acc[date]) {
        acc[date] = {
          date,
          totalRevenue: 0,
          totalQuantity: 0
        };
      }
      acc[date].totalRevenue += sale.revenue;
      acc[date].totalQuantity += sale.quantity;
      return acc;
    }, {});

    return Object.values(salesByDate).sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  };

  const chartData = processChartData();

  // Process top products
  const topProducts = Array.from(products)
    .sort((a, b) => b.totalRevenue - a.totalRevenue)
    .slice(0, 5);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg">Loading dashboard data...</div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Product Sales Dashboard</h1>
      
      {/* Revenue Trend */}
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="text-lg font-semibold mb-2">Revenue Trend</h2>
        <LineChart width={800} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date" 
            tickFormatter={(date) => format(new Date(date), 'MMM dd')}
          />
          <YAxis />
          <Tooltip 
            labelFormatter={(date) => format(new Date(date), 'MMM dd, yyyy')}
            formatter={(value) => [`$${value.toFixed(2)}`, 'Revenue']}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="totalRevenue" 
            stroke="#8884d8" 
            name="Revenue" 
          />
        </LineChart>
      </div>

      {/* Sales Quantity */}
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="text-lg font-semibold mb-2">Sales Quantity</h2>
        <BarChart width={800} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date" 
            tickFormatter={(date) => format(new Date(date), 'MMM dd')}
          />
          <YAxis />
          <Tooltip 
            labelFormatter={(date) => format(new Date(date), 'MMM dd, yyyy')}
          />
          <Legend />
          <Bar 
            dataKey="totalQuantity" 
            fill="#82ca9d" 
            name="Quantity" 
          />
        </BarChart>
      </div>

      {/* Top Products Table */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Top Products</h2>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Product</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-right">Total Revenue</th>
              <th className="px-4 py-2 text-right">Total Quantity</th>
            </tr>
          </thead>
          <tbody>
            {topProducts.map(product => (
              <tr key={product.id} className="hover:bg-gray-50">
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