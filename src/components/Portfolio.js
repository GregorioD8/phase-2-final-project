import React from "react"
import Chart from "./Chart"


function Portfolio({ allTickers, allOrders, ownedStocks }) {
    console.log(allTickers)
    console.log(allOrders)
    
   
    // {
    //     "ticker": "AMZN",
    //     "numberOrdered": 3,
    //     "pricePaid": 125.17,
    //     "date": "Sun Oct 22 2023 19:01:15 GMT-0700 (Mountain Standard Time)",
    //     "id": 1
    //   },
    const orderList = allOrders.map((o) => (
        <tr key={o.id}>
            <td>{o.ticker}</td>
            <td>{o.numberOrdered}</td>
            <td>{o.pricePaid}</td>
            <td>{o.total}</td>
            <td>{o.date}</td>
        </tr>
    ))
    const initialValue = 0
    const totalPortfolio = allOrders.map((o) => o.total)
    const myTotal = totalPortfolio.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
    return (    

        <div>
        
         <h1 className="text-3xl font-bold">
      Portfolio total: {parseFloat(myTotal).toFixed(2)}
        </h1>
         <Chart ownedStocks={ownedStocks}/>
        
         <div className="relative overflow-x-auto shadow-md sm: rounded-lg">
         <table className="w-full text-sm text-left text-gray-900 dark:text-gray-800"> 
             <thead>
                 <tr>
                     <th scope="col" className="px-6 py-3">Stock</th>
                     <th scope="col" className="px-6 py-3">Quantity</th>
                     <th scope="col" className="px-6 py-3">Price</th>
                     <th scope="col" className="px-6 py-3">Total</th>
                     <th scope="col" className="px-6 py-3">Date</th>
                 </tr>
             </thead>
             <tbody>
                {orderList}
             </tbody>
         </table>
     </div>
     </div>

    )
}
export default Portfolio