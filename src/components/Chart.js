import React from 'react';
import Plot from 'react-plotly.js';

function Chart({ ownedStocks, total }) {

    return (
      <div className="block max-w-xlg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <Plot

        data={[
          {
            x: ownedStocks.map((s) => s.ticker) ,
            y: ownedStocks.map((s) => s.shares),
            type: 'bar',
            mode: 'markers',
            name: "Portfolio",
            marker: {color: 'dark-blue'},
            text: ownedStocks.map((s) => s.shares)
          },
        ]}
        layout={ { width: 1000, height: 700, title: 'Asset Allocation',xaxis: {title: `Portfolio Total: $${total.toLocaleString(undefined, {maximumFractionDigits:2})}`}, font: {
          size: 18,
          color: '#1F2937'
        } } }
      />
    

      </div>
    );
  
}

export default Chart