import React, { useEffect, useState } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLegend } from 'victory';
import ProductAPI from '../../Services/api';

const AnalyticsSummary = () => {
  // Sample data for product summary

const [product,setProduct] = useState([]);

useEffect(() => {
    ProductAPI.getProducts
    .then(res=>res.json())
    .then(data=>setProduct(data))
    .catch(err=>console.log(err))
}
,[])

  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 className='font-bold'>Product Summary</h2>
      <div style={{ maxWidth: '100%', width: '600px' }}>
        <VictoryChart domainPadding={20} height={300}>
          <VictoryAxis
            // Independent axis
            tickValues={product.map((d) => d.productName)}
          />
          <VictoryAxis
            dependentAxis
            // Dependent axis
            tickFormat={(x) => `${x}`}
          />
          <VictoryBar
            data={productData}
            x="product"
            y="quantity"
            // Custom styling
            style={{ data: { fill: 'green' } }}
          />
        </VictoryChart>
      </div>

      <h2 className='font-bold'>Order Summary</h2>
      <div style={{ maxWidth: '100%', width: '600px' }}>
        <VictoryChart domainPadding={20} height={300}>
          <VictoryAxis
            // Independent axis
            tickValues={orderData.map((d) => d.status)}
          />
          <VictoryAxis
            dependentAxis
            // Dependent axis
            tickFormat={(x) => `${x}`}
          />
          <VictoryBar
            data={orderData}
            x="status"
            y="count"
            // Custom styling
            style={{ data: { fill: 'blue' } }}
          />
        </VictoryChart>
      </div>

      {/* Optional: Legend */}
      <VictoryLegend
        x={50}
        y={20}
        orientation="horizontal"
        gutter={20}
        style={{ title: { fontSize: 20 } }}
        data={[
          { name: 'Product', symbol: { fill: 'green' } },
          { name: 'Order', symbol: { fill: 'blue' } },
        ]}
      />
    </div>
  );
};

export default AnalyticsSummary;
