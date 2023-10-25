import React from "react"
const APIkey = `A6E7H70ZOK2LHHS0`

function Stock({ stock, onBuyStock, allTickers, onOrder }) {

  
  const stink = allTickers.find((t) => t.ticker === stock.ticker)


  function handleSubmit(e) {
    e.preventDefault()
    
    const updatedShares = parseInt(stink.shares) + parseInt(e.target[0].value)
    //adds stock to portfolio and updates total shares owned
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

  //gets the price during purchase
  fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stink.ticker}&apikey=${APIkey}`)
  .then((res) => res.json())
  .then((d) => {

    if(d.information === 'Thank you for using Alpha Vantage! Our standard AP…emium/ to instantly remove all daily rate limits.') {
      console.log("over your daily API limit")
    } else {
      newOrder({
        ticker: stink.ticker, 
        numberOrdered: parseInt(e.target[0].value), 
        pricePaid: parseFloat(d[`Global Quote`][`05. price`]).toFixed(2),
        total: (parseInt(e.target[0].value) * d[`Global Quote`][`05. price`]),
        date: new Date().toLocaleString()})

      }
    })
  .catch((error) => console.log(error))
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
  

  
    if(!stock) return <div>{console.log("stock null")}</div>
    return(
        <div className= "flex flex-wrap justify-center my-4" >

<a href="# " className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{stock.ticker}</h5>
    <br></br>
    <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">{stock.name}</h5>
    <p  className=" mb-2 text-2xl tracking-tight text-gray-900 dark:text-white"  href={stock.homepage_url}>{stock.homepage_url}</p>
    <p className="font-normal text-gray-700 dark:text-gray-400">{stock.description}</p>

                 <div className="relative mb-3" data-te-input-wrapper-init>
            
                    <br></br>
                  <form onSubmit={handleSubmit}>
                  <input
                    type="number"
                    className=" bg-green-100 text-black "
                    id="exampleFormControlInputNumber"
                    placeholder="Quantity" />
                
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