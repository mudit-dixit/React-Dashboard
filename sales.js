import fs from 'fs';

// Product definitions with seasonal factors
const products = [
  {
    name: "Gaming Laptop",
    category: "Electronics",
    price: 1299.99,
    seasonality: {
      0: 1.2, 1: 1.0, 2: 0.9, 3: 0.8,
      4: 0.7, 5: 0.8, 6: 0.9, 7: 1.1,
      8: 1.2, 9: 1.3, 10: 1.4, 11: 1.5
    }
  },
  {
    name: "Smart Watch",
    category: "Electronics",
    price: 349.99,
    seasonality: {
      0: 1.3, 1: 1.1, 2: 1.0, 3: 1.1,
      4: 1.2, 5: 1.3, 6: 1.2, 7: 1.1,
      8: 1.0, 9: 1.2, 10: 1.3, 11: 1.4
    }
  },
  {
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 199.99,
    seasonality: {
      0: 1.3, 1: 1.1, 2: 1.0, 3: 0.9,
      4: 1.0, 5: 1.1, 6: 1.2, 7: 1.1,
      8: 1.0, 9: 1.2, 10: 1.3, 11: 1.4
    }
  },
  {
    name: "4K Smart TV",
    category: "Electronics",
    price: 899.99,
    seasonality: {
      0: 1.0, 1: 0.9, 2: 0.8, 3: 0.7,
      4: 0.8, 5: 0.9, 6: 1.0, 7: 1.1,
      8: 1.2, 9: 1.3, 10: 1.4, 11: 1.5
    }
  },
  {
    name: "Robot Vacuum",
    category: "Home Appliances",
    price: 599.99,
    seasonality: {
      0: 1.2, 1: 1.1, 2: 1.3, 3: 1.4,
      4: 1.2, 5: 1.0, 6: 0.9, 7: 0.8,
      8: 0.9, 9: 1.1, 10: 1.2, 11: 1.3
    }
  },
  {
    name: "Smart Refrigerator",
    category: "Home Appliances",
    price: 2499.99,
    seasonality: {
      0: 0.8, 1: 0.9, 2: 1.0, 3: 1.1,
      4: 1.3, 5: 1.4, 6: 1.3, 7: 1.2,
      8: 1.1, 9: 1.0, 10: 0.9, 11: 0.8
    }
  }
];

const regions = ["North", "South", "East", "West"];

function generateSalesData(startDate, endDate) {
  const data = {
    products: [],
    sales: []
  };
  
  let saleId = 1;
  
  // Create products
  products.forEach((productTemplate, index) => {
    const product = {
      uid: `_:product${index + 1}`,
      "dgraph.type": "Product",
      id: `P${index + 1}`,
      name: productTemplate.name,
      category: productTemplate.category,
      price: productTemplate.price,
      totalRevenue: 0,
      totalQuantity: 0,
      createdOn: startDate.toISOString(),
      updatedOn: startDate.toISOString()
    };
    data.products.push(product);
    
    // Generate daily sales for each product
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      const month = currentDate.getMonth();
      const dayOfWeek = currentDate.getDay();
      
      // Calculate number of sales for this day
      const seasonalFactor = productTemplate.seasonality[month];
      const weekendMultiplier = (dayOfWeek === 0 || dayOfWeek === 6) ? 1.5 : 1.0;
      const baseQuantity = Math.floor(Math.random() * 5) + 1;
      const quantity = Math.max(1, Math.floor(baseQuantity * seasonalFactor * weekendMultiplier));
      
      // Create sale record
      const revenue = quantity * productTemplate.price;
      const sale = {
        uid: `_:sale${saleId}`,
        "dgraph.type": "Sale",
        id: `S${saleId}`,
        product: { uid: product.uid },
        quantity: quantity,
        revenue: parseFloat(revenue.toFixed(2)),
        date: currentDate.toISOString(),
        region: regions[Math.floor(Math.random() * regions.length)],
        createdOn: currentDate.toISOString(),
        updatedOn: currentDate.toISOString()
      };
      data.sales.push(sale);
      
      // Update product totals
      product.totalRevenue += revenue;
      product.totalQuantity += quantity;
      product.updatedOn = currentDate.toISOString();
      
      saleId++;
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    // Round total revenue to 2 decimal places
    product.totalRevenue = parseFloat(product.totalRevenue.toFixed(2));
  });
  
  return data;
}

function saveDataToFile(data, filename) {
  try {
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFileSync(filename, jsonString);
    console.log(`Data successfully saved to ${filename}`);
  } catch (error) {
    console.error('Error writing to file:', error);
  }
}

function generateDataForTimeRange(startDate, endDate, filename) {
  console.log('Generating sales data...');
  const salesData = generateSalesData(startDate, endDate);
  
  const dgraphData = {
    set: [
      ...salesData.products,
      ...salesData.sales
    ]
  };

  console.log('Saving data to file...');
  saveDataToFile(dgraphData, filename);
  
  // Print some statistics
  console.log('\nGeneration Complete!');
  console.log('Statistics:');
  console.log(`Total products: ${salesData.products.length}`);
  console.log(`Total sales records: ${salesData.sales.length}`);
  console.log(`Date range: ${startDate.toISOString().split('T')[0]} to ${endDate.toISOString().split('T')[0]}`);
}

// Generate custom date range
function generateDataForDateRange(startDateStr, endDateStr, filename) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  generateDataForTimeRange(startDate, endDate, filename);
}

// Generate one year of data
generateDataForDateRange('2024-01-01', '2024-12-31', 'sales_data.txt');