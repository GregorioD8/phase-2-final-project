import React from "react"


function Stock({ stock }) {

 
    // function handleBuySell(event) {
    //     event.preventDefault()
    //     if (stock.owned === true) {
    //         return onSellStock(stock) 
    //     } else {
    //         return onBuyStock(stock)
    //     }
    // }


    console.log(stock) 
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
          </div>
        </div>
      </div>
      </div>
    )
}
export default Stock