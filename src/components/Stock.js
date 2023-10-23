import React, { useState } from "react"
const APIkey = `A6E7H70ZOK2LHHS0`

function Stock({ stock, onBuyStock, allTickers, onOrder }) {
  const { id } = stock
  
  const stink = allTickers.find((t) => t.ticker === stock.ticker)


  function handleSubmit(e) {
    e.preventDefault()
    
    const updatedShares = parseInt(stink.shares) + parseInt(e.target[0].value)

    fetch(` http://localhost:8080/tickers/${stink.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isOwned: true, shares: (updatedShares)})
    })
    .then((res) => res.json())
    .then((t) => onBuyStock(updatedShares, t))

    console.log(updatedShares)

      //get the price during purchase
  fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stink.ticker}&apikey=${APIkey}`)
  .then((res) => res.json())
  .then((d) => {

   newOrder({
    ticker: stink.ticker, 
    numberOrdered: parseInt(e.target[0].value), 
    pricePaid: parseFloat(d[`Global Quote`][`05. price`]),
    total: parseInt(e.target[0].value) * parseFloat(d[`Global Quote`][`05. price`]).toFixed(2),
    date: new Date().toLocaleString()})
   console.log(d)
   
  })

  }


function newOrder(order) {

  fetch(`http://localhost:8080/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order), 
  })
  .then((res) => res.json())
  .then((data) => {
    onOrder(data)
    
    console.log(data)
    
    })
  }
  

  
    if(!stock) return <div>{console.log("stock null")}</div>
    return(
        <div>
        <div className="card" >
        <div className="card" >
        <h1 className="card-title">{stock.name}</h1>
            <h4>{stock.Name}</h4>
            {/* <address>{stock.address.city + ", " + stock.address.state}</address> */}
          <div className="card-body" >
            {/* {stock.address.city + " " + stock. address.state}  */}
            <br/>
            <a href={stock.homepage_url}>{stock.homepage_url}</a>
            <p className="card-text">{stock.price}</p>
            <p>{stock.description}</p>
            
            <div className="relative mb-3" data-te-input-wrapper-init>
            <label
                    className="bg-green text-black"
                   
                    
                    >Open Market order
                    <br></br>
                  <form onSubmit={handleSubmit}>
                  <input
                    type="number"
                    className="bg-green-100 text-black"
                    id="exampleFormControlInputNumber"
                    placeholder="Example label" />
                
                    <button
                      className="bg-green-300 text-black"
                    >buy shares</button>
                     </form>
                  </label>

                 
              </div>
           
          </div>
        </div>
      </div>
      </div>
    )
}
export default Stock