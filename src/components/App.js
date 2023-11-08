import React, { useState, useEffect, useRef } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Research from "./Research"
import Portfolio from "./Portfolio"
import Header from "./Header"
import Footer from "./Footer"

const APIkey = "itsasecret"
let tvScriptLoadingPromise;


function App() {

  const onLoadScriptRef = useRef();
  const [allTickers, setAllTickers] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [stock, setStock] = useState("TSLA")
  const [query, setQuery] = useState(null)
  const [allOrders, setAllOrders] = useState([])
  const [news, setNews] = useState(null)


  useEffect(() => {
    fetch(" http://localhost:8080/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data[0].results)
      })

  }, [])

  useEffect(() => {
    fetch(" http://localhost:8080/orders")
      .then((res) => res.json())
      .then((data) =>
        setAllOrders(data))
  }, [])

  //thank you polygon.io
  useEffect(() => {
    if (query)
      fetch(`https://api.polygon.io/v3/reference/tickers/${query}?apiKey=${APIkey}`)
        .then((res) => res.json())
        .then((data) => {
          setStock(data.results)
          console.log("polygon")
        })
  }, [query])

  //thanks sec.gov
  useEffect(() => {
    fetch(" http://localhost:8080/tickers")
      .then((res) => res.json())
      .then((data) => {
        setAllTickers(data)
      })
  }, [])
  //sets the search input per character to see what tickers include the input
  function onSearch(input) {

    setSearchInput(input)
  }
  //sets the ticker to search for 
  function handleSelectedTicker(ticker) {
    setQuery(ticker)
    setSearchInput("")
  }

  //purchase x amount of shares of a stonk
  //sets state for ownedStocks to update the chart in portfolio
  function handleBuyStock(number, stonk) {
    const allStocks = (allTickers.map((t) => t.ticker === stonk.ticker ? { ...t, shares: number } : t))
    setAllTickers(allStocks)
  }

  //update orders
  function handleOrder(newOrder) {
    setAllOrders([...allOrders, newOrder])
    console.log("handleOrder")

  }

  //search by ticker 
  const filteredTickers = allTickers.filter((t) => {
    return t.ticker.toLowerCase().includes(searchInput.toLowerCase())
  })

  //Thank you Tradingview.com
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
  
  /** 
  
  ///////////////////////////////////
  // //for Challenge2              //
  ///////////////////////////////////

   const [names, setNames] = useState(["Greg"])
   function handleNameSubmit(newName) {
     setNames([...names, newName])
     console.log(names)
  }
  console.log(names)
  /////////////////////////////////// end of Challenge2
  */ 


   ///////////////////////////////////
   //for Challenge3                //
  //////////////////////////////////
  
  // const [animals, setAnimals] = useState([{id: 1, name: "Ron", species: "Lion", hungry: true}, {id: 2, name: "Leslie", species: "Rabbit", hungry: false}, {id: 3, name: "Ann", species: "Koala", hungry: false}, {id: 4, name: "April", species: "Hyena", hungry: true}])

  /////////////////////////////////// end of Challenge3

    ///////////////////////////////////
   //for Challenge4                 //
  ///////////////////////////////////
  
  const [items, setItems] = useState([{id: 1, name: "Milk", category: "Dairy", price: 2}, {id: 2, name: "Banana", category: "Produce", price: 10}, {id: 3, name: "Vanilla Ice Cream", category: "Dairy", price: 4}, {id: 4, name: "Saffron Truffle Gold-Flecked Ice Cream", category: "Dairy", price: 14}, {id: 5, name: "Spinach", category: "Produce", price: 4}, {id: 6, name: "Pomegranates", category: "Produce", price: 11}])

  /////////////////////////////////// end of Challenge4

  return (
    <div>
      <Router>
        {/* for Challenge1 */}
        {/* <Header/> */}

        {/* for Challenge2 */}
        {/* <Header names={names} onNameSubmit={handleNameSubmit}/>  */}
        
        {/* for Challenge3 */}
        {/* <Header animals={animals}/> */}
          
          {/* for Challenge4 */}
          <Header items={items}/>

        <Routes>
          <Route path="/" element={<Home news={news} />} />
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
            allOrders={allOrders}
            allTickers={allTickers}

          />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
