import React, { useState, useEffect, useRef } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Research from "./Research"
import Portfolio from "./Portfolio"
import Header from "./Header"
import Footer from "./Footer"

let tvScriptLoadingPromise;

function App() {

  const onLoadScriptRef = useRef();

  const [allTickers, setAllTickers] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [stock, setStock] = useState("TSLA")
  const [query, setQuery] = useState(null)
  const [allOrders, setAllOrders] = useState([])

  useEffect(() => {
    fetch(" http://localhost:8080/orders")
    .then((res) => res.json()) 
    .then((data) => setAllOrders(data))
}, [])

  //thank you polygon.io
  useEffect(() => {
    if(query) 
    fetch(`https://api.polygon.io/v3/reference/tickers/${query}?apiKey=OXxvtXjwdGI1eZtG84j2pRe8FvF8ydAl`)
    .then((res) => res.json())
    .then((data) => setStock(data.results))
  }, [query])

  //thanks sec.gov
  useEffect(() => {
     fetch(" http://localhost:8080/tickers")
     .then((res) => res.json()) 
     .then((data) => {
      setAllTickers(data)
    })
 }, [])

 function onSearch(input) {
  setSearchInput(input)
}

function handleSelectedTicker(ticker){
  setQuery(ticker)
  setSearchInput("")
}

//purchase x amount of shares of a stonk
function handleBuyStock(number, stonk) {
  const allStocks = (allTickers.map((t) => t.ticker === stonk.ticker ? {...t, shares: number} : t ))
  setAllTickers(allStocks)
}

function handleOrder(newOrder) {
  setAllOrders([...allOrders, newOrder])
}

//search by ticker 
const filteredTickers = allTickers.filter((t) => {
  return t.ticker.toLowerCase().includes(searchInput.toLowerCase())
})

//Tradingview.com
/////////////////////////////////////////////////////////////////////////////////////
useEffect(
  () => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement('script');
        script.id = 'tradingview-widget-loading-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.type = 'text/javascript';
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

    return () => onLoadScriptRef.current = null;

    function createWidget() {
      if (document.getElementById('tradingview_839fc') && 'TradingView' in window) {
        new window.TradingView.widget({
          width: 1200,
          height: 610,
          symbol: query,
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          enable_publishing: false,
          gridColor: "rgba(182, 182, 182, 0.06)",
          hide_top_toolbar: true,
          hide_legend: true,
          allow_symbol_change: true,
          save_image: false,
          details: true,
          container_id: "tradingview_839fc"
        });
      }
    }
  },
  [query]
);

/////////////////////////////////////////////////////////////////////////////////////

const ownedStocks = allTickers.filter((t) => t.isOwned)

  return (
   <div>
            <Router>
              <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/research" element={<Research 
                onSearch={onSearch} 
                searchInput={searchInput} 
                allTickers={filteredTickers}
                onSelectedTicker={handleSelectedTicker}
                stock={stock}
                onBuyStock={handleBuyStock}
                onOrder={handleOrder}
                />} />      
                <Route path="/portfolio" element={<Portfolio 
                allTickers={allTickers}
                allOrders={allOrders}
                ownedStocks={ownedStocks}
                />} />
            </Routes>
            <Footer />
            </Router>
                  
        </div>  
  );
}

export default App;
