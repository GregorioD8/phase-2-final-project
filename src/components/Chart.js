import React, { useEffect } from 'react';
import Plot from 'react-plotly.js';
import TradingViewWidget from "./TradingViewWidget"
const APIkey = "A6E7H70ZOK2LHHSO"

function Chart({ stock }) {
    useEffect(() => {
        fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stock}&apikey=${APIkey}`)
        .then((res) => res.json())
        .then((data) => {
        //   setStock(data)
            console.log(data)
    })
      }, [])


    return (
      <div>
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      />
    
      

      </div>
    );
  
}

export default Chart