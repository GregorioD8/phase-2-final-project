import React from "react"
import Search from "./Search"
import Stock from "./Stock"
import TradingViewWidget from "./TradingViewWidget"

function Research({ stock, onSearch, searchInput, allTickers, onSelectedTicker, onBuyStock, onOrder }) {
// const [search, setSearch] = useState("")


  
function handleClick(s) {
    console.log(s.target.innerText)
    console.log(stock)
    // setSearch(filteredTickers.find((t) => t.ticker === s.target.innerText))
 onSelectedTicker(allTickers.find((t) => t.ticker === s.target.innerText).ticker)
    // console.log(filteredTickers.find((t) => t.ticker === s.target.innerText))
    
}   

function handleHover(e){
e.preventDefault()
console.log(e.type)
if(e.type === 'mouseover') {
    e.target.style.color = "red"
} else {
    e.target.style.color = "black"
}   

}


const viewableStocks = allTickers.map((s) => (
        <li key={s.id}
        onClick={handleClick}
        onMouseOver={handleHover}
        onMouseOut={handleHover}
        >
            <p value={s.ticker}>{s.ticker}</p>
        
        </li>
    ))


        
       
    return (
        <div>
            <div>
            <Search onSearch={onSearch} searchInput={searchInput}/> 
                <ul>
                {(searchInput? viewableStocks: null)}
                 </ul>
            </div>
            <div>
                <TradingViewWidget stock={stock} />
            </div>
            <div>
                <Stock stock={stock} onBuyStock={onBuyStock} allTickers={allTickers} onOrder={onOrder} />
            </div>
            
        </div>
    )
}
export default Research