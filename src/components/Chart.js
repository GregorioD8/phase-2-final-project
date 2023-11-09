import React from 'react';
import Plot from 'react-plotly.js';

function Chart({ total, allTickers }) {

  const myStocks = allTickers.filter((s) => s.isOwned)

  return (
    <div className="block max-w-xlg p-6 bg-white border border-gray-500 rounded-lg shadow dark:white">
      <Plot
        data={[
          {
            x: myStocks.map((s) => s.ticker),
            y: myStocks.map((s) => s.shares),
            type: 'bar',
            mode: 'markers',
            name: "Portfolio",
            marker: { color: 'dark-blue' },
            text: myStocks.map((s) => s.shares)
          },
        ]}
        layout={{
          width: 1000, height: 700, title: 'Asset Allocation', xaxis: { title: `Portfolio Total: $${total.toLocaleString(undefined, { maximumFractionDigits: 2 })}` }, font: {
            size: 18,
            color: '#1F2937'
          }
        }}
      />
    </div>
  );
}

export default Chart