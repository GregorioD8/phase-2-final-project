import React, { useState } from "react"
const APIkey = `A6E7H70ZOK2LHHS0`

function Stock({ stock, onBuyStock, allTickers, onOrder }) {
  const [input, setInput] = useState("")
  const stink = allTickers.find((t) => t.ticker === stock.ticker)
  
  function handleSubmit(e) {
    e.preventDefault()
    const updatedShares = parseInt(stink.shares) + input

    //adds stock to portfolio and updates total shares owned
    fetch(` http://localhost:8080/tickers/${stink.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isOwned: true, shares: (updatedShares) })
    })
      .then((res) => res.json())
      .then((t) => onBuyStock(updatedShares, t))

    //gets the price during purchase
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stink.ticker}&apikey=${APIkey}`)
      .then((res) => res.json())
      .then((d) => {
        console.log(d)
        if (d.information === 'Thank you for using Alpha Vantage! Our standard AP…emium/ to instantly remove all daily rate limits.') {
          console.log("over your daily API limit")
        } else {
          const cost =  parseFloat(d[`Global Quote`][`05. price`]).toFixed(2)
          newOrder({
            ticker: stink.ticker,
            numberOrdered: input,
            pricePaid: cost,
            total: input * cost,
            date: new Date().toLocaleString()
          })
          
        }
      })
      .catch((error) => console.log(error))
  
    setInput("")
  }

  function newOrder(order) {
    //adds the order to API
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

  function handleInput(e) {
    e.preventDefault()
    setInput(parseInt(e.target.value))
  }

  if (!stock) return <div>{console.log("stock null")}</div>
  return (
    <div className="flex flex-wrap justify-center my-4" >

      <a className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{stock.ticker}</h5>
        <br></br>
        <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">{stock.name}</h5>
        <p className=" mb-2 text-2xl tracking-tight text-gray-900 dark:text-white" href={stock.homepage_url}>{stock.homepage_url}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">{stock.description}</p>

        <div className="relative mb-3" >

          <br></br>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              min="1"
              className=" bg-green-100 text-black "
              placeholder="Quantity"
              value={input}
              onChange={handleInput}
            />

            <button

              className="bg-green-300 text-black"
            >Market Order</button>
          </form>
          <label className="bg-green dark:text-gray-400">Open Market order
          </label>


        </div>
      </a>
    </div>
  )
}
export default Stock