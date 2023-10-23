import React, { useEffect } from 'react';
import Plot from 'react-plotly.js';

function Chart({ ownedStocks }) {
   


    return (
      <div>
      <Plot
        data={[
          {
            x: ownedStocks.map((s) => s.ticker + " " + s.shares) ,
            y: ownedStocks.map((s) => s.shares),
            type: 'bar',
            mode: 'markers',
            name: "Portfolio",
            marker: {color: 'blue'},
            text: ownedStocks.map((s) => s.ticker)
          },
        ]}
        layout={ {width: 700, height: 500, title: 'Asset Allocation'} }
      />
    
      

      </div>
    );
  
}

export default Chart