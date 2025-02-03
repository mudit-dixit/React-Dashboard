import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { useQuery } from '../models';
import { format } from 'date-fns';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
function Dashboard() {
  const queryInfo = useQuery();
  const { store, setQuery } = queryInfo;
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [poductCategory,setProductCategory] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        
        // Fetch products
        const productsQuery = store.fetchAllProducts();
        setQuery(productsQuery);
        const productsData = await productsQuery;
        setProducts(productsData.queryProduct
        );

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

  const buildMenu=()=>{
    return (<Menu as="div" className="relative inline-block text-left">
     
      <MenuButton className="inline-flex w-full bg-[#27445D] justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-white ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-[#6489a9]">
        Options
        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
      </MenuButton>
   

    <MenuItems
      transition
      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
    >
      <div className="py-1">
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
          >
            Account settings
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
          >
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
          >
            License
          </a>
        </MenuItem>
        <form action="#" method="POST">
          <MenuItem>
            <button
              type="submit"
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Sign out
            </button>
          </MenuItem>
        </form>
      </div>
    </MenuItems>
    </Menu>)
  }

  return (
    <div className="p-4">
      
      <h1 className="text-xl font-bold mb-4">Product Sales Dashboard</h1>
      {/* Revenue Trend */}
      <div className="bg-[#43867b] p-4 rounded-lg shadow mb-4 flex gap-2">
        <div className="bg-[#497D74] p-4 rounded-lg shadow mb-4 flex-col">
          <h2 className="text-lg font-semibold mb-2">Revenue Trend</h2>
          <LineChart width={800} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3"  />
            <XAxis  tick={{ fill: 'white' }}
              dataKey="date" 
              tickFormatter={(date) => format(new Date(date), 'MMM dd')}
            />
            <YAxis tick={{ fill: 'white' }} />
            <Tooltip 
              labelFormatter={(date) => format(new Date(date), 'MMM dd, yyyy')}
              formatter={(value) => [`$${value.toFixed(2)}`, 'Revenue']}
              contentStyle={{ 
                backgroundColor: '#EFE9D5',
                border: 'none',
                borderRadius: '8px',
                padding: '10px'

              }}
              labelStyle={{ 
                color: '#2C3E50',    // Dark blue-gray for the date label
                fontWeight: 'bold'
              }}
              itemStyle={{ 
                color: '#34495E'     // Slightly lighter blue-gray for the value
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="totalRevenue" 
              name="Revenue" 
              stroke="black"
            />
          </LineChart>
        </div>
        <div>
         {buildMenu()}
        </div>
      </div>
      

      {/* Sales Quantity */}
      <div className="bg-[#43867b] p-4 rounded-lg shadow mb-4 flex">
        <div className="bg-[#497D74] p-4 rounded-lg shadow mb-4">
          <h2 className="text-lg font-semibold mb-2">Sales Quantity</h2>
          <BarChart width={800} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis  tick={{ fill: 'white' }}
              dataKey="date" 
              tickFormatter={(date) => format(new Date(date), 'MMM dd')}
            />
            <YAxis tick={{ fill: 'white' }}/>
            <Tooltip 
              labelFormatter={(date) => format(new Date(date), 'MMM dd, yyyy')}
              contentStyle={{ 
                backgroundColor: '#EFE9D5',
                border: 'none',
                borderRadius: '8px',
                padding: '10px'

              }}
              labelStyle={{ 
                color: '#2C3E50',    // Dark blue-gray for the date label
                fontWeight: 'bold'
              }}
              itemStyle={{ 
                color: '#34495E'     // Slightly lighter blue-gray for the value
              }}
            />
            <Legend />
            <Bar 
              dataKey="totalQuantity" 
              fill="#82ca9d" 
              name="Quantity" 
            />
          </BarChart>
        </div>
      </div>      
      {/* Top Products Table */}
      <div className="bg-[#43867b] p-4 rounded-lg shadow mb-4 flex">
        <div className="bg-[#497D74] p-4 rounded-lg shadow">
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
    </div>
  );
}

export default observer(Dashboard);