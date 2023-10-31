import React from "react"
import Chart from "./Chart"


function Portfolio({ allOrders, allTickers }) {
 
    // {
    //     "ticker": "AMZN",
    //     "numberOrdered": 3,
    //     "pricePaid": 125.17,
    //     "date": "Sun Oct 22 2023 19:01:15 GMT-0700 (Mountain Standard Time)",
    //     "id": 1
    //   },
    const orderList = allOrders.map((o) => (
        <tr className="mx-25 " 
            key={o.id}>
            <td>{o.ticker}</td>
            <td>{o.numberOrdered}</td>
            <td>{"$ " + o.pricePaid}</td>
            <td>{"$ " + o.total.toFixed(2)}</td>
            <td>{o.date}</td>
        </tr>
    ))



    
  
    const totalPortfolio = allOrders.map((o) => o.total)
    const myTotal = totalPortfolio.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2)

   
    return (    

        <div >
        <div className="flex flex-wrap justify-center my-4 flexmy-10">
        <Chart allTickers={allTickers} total={myTotal}/>        
        </div>
         <div className="flex flex-wrap justify-center my-4 flexmy-10">
         <div className=" max-w-5/6 flex flex-wrap justify-center my-4 flexmy-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
         <label className="flex flex-wrap justify-center max-w-5/6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Orders</label>
         <table className="w-5/6 justify-center mx-6 my-6 font-bold text-gray-900 dark:text-white"> 
  
             <thead>
                 <tr>
                     <th scope="col" className="px-6 py-3">Stock</th>
                     <th scope="col" className="px-6 py-3">Quantity</th>
                     <th scope="col" className="px-6 py-3">Cost</th>
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
     </div>

    )
}
export default Portfolio



