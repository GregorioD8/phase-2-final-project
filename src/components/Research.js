import React from "react"
import Search from "./Search"
// import Stock from "./Stock"
// import TradingViewWidget from "./TradingViewWidget"

function Research({ stock, onSearch, searchInput, allTickers, onSelectedTicker, onBuyStock, onOrder }) {


    return (
        <div className= " my-4 mx-4">
            <div className= "flex flex-wrap justify-center my-4">
            <Search onSearch={onSearch} searchInput={searchInput} 
            stock={stock}
            onBuyStock={onBuyStock} 
            allTickers={allTickers} 
            onOrder={onOrder}
            onSelectedTicker={onSelectedTicker}
            /> 

            </div>
        </div>
    )
}
export default Research