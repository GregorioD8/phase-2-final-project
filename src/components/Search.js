import React, { useState } from "react"
import Stock from "./Stock"
import TradingViewWidget from "./TradingViewWidget"


function Search({ searchInput, onSearch, stock, onBuyStock, allTickers, onOrder, onSelectedTicker }) {
  const [isStockCard, setIsStockCard] = useState(false)


  function handleClick(s) {
    onSelectedTicker(allTickers.find((t) => t.ticker === s.target.value).ticker)
    setIsStockCard(true)
  }


  function handleSearch(e) {
    e.preventDefault()
    onSearch(e.target.value)
  }


  const viewableStocks = allTickers.map((s) => (
    <option id="dropdown" key={s.id}
      value={s.ticker}
    >
      {s.ticker}
    </option>
  ))


  return (
    <div className="ui search">
      <div className= "flex flex-wrap justify-center my-4">
        <input  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   
          placeholder="Type to filter..."
          value={searchInput}
          onChange={handleSearch}
        />
        <i className="search icon" />
        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleClick}
        >
          <option>select one</option>
          {viewableStocks}
        </select>
      </div>
      {isStockCard ?
        <div>
          <div>
            <TradingViewWidget stock={stock} />
          </div>
          <div>
            <Stock stock={stock} onBuyStock={onBuyStock} allTickers={allTickers} onOrder={onOrder} />
          </div>
        </div> : null}

    </div>

  )
}

export default Search



