import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import Research from "./Research"
import Portfolio from "./Portfolio"


function App() {
  const [allTickers, setAllTickers] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [exchange, setExchange] = useState("")
  const [stock, setStock] = useState(null)
  const [query, setQuery] = useState(null)

  //thank you polygon.io
  useEffect(() => {
    fetch(`https://api.polygon.io/v3/reference/tickers/${query}?apiKey=OXxvtXjwdGI1eZtG84j2pRe8FvF8ydAl`)
    .then((res) => res.json())
    .then((data) => {
      setStock(data.results)
    
      })
  }, [query])

  //thanks sec.gov
  useEffect(() => {
     fetch(" http://localhost:8080/tickers")
     .then((res) => res.json()) 
     .then((data) => {
      setAllTickers(Object.values(data[0]).map((t) => t))
      
    })
     

 }, [])

 function onSearch(input) {
  setSearchInput(input)

  
}

function handleSelectedTicker(ticker){
  setQuery(ticker)
  console.log(ticker)
  setSearchInput("")
}
console.log(allTickers)

function handleExchange() {
  return "stock.primary_exchange"
}
//search by ticker or by company name
const filteredTickers = allTickers.filter((t) => {
  return t.ticker.toLowerCase().includes(searchInput.toLowerCase())

})

  return (
    <div>
            
            <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/research" element={<Research 
                onSearch={onSearch} 
                searchInput={searchInput} 
                allTickers={filteredTickers}
                onSelectedTicker={handleSelectedTicker}
                stock={stock}
                exchange={handleExchange}
                />} />      
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
            </Router>
         
        </div>
  );
}

export default App;
