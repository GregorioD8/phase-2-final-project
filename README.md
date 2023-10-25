# Phase 2 React project
### `What I learned`
- How to use the react framework to create an app 
- How to use external API's
- How to create local API  
- How many tools and libraries are out there to build efficiently

### `setup`

- Run `json-server --watch db.json --port 8080`
- Run `npm start`

### `Server`

The db.json is an object with an array of orders and an array of tickers

`tickers` 
from the sec.gov API
it has every ticker in the stock market available. I trimmed it down for the project. 

`orders`
from orders posted in the app

### `Endpoints`

the app is a single page application that uses client side routing 

the endpoints are 
/home
/research
/portfolio

/home is the landing page
/research is where you search a ticker and it renders a stock chart, and a stock card where you can open an order to buy shares
/portfolio shows your portfolio total and how your money is allocated. It also shows all of your orders.

### `App`

useEffect and useState
`GET` from local API to get allOrders
--update state with this data using `setAllOrders`
`GET` from Polygon.io to get the queried stock information 
--update state with this data using `setStock`
`GET` from local API to get allTickers 
--update state with this data using `setAllTickers`

### `Header`
A header to display the navigation buttons

-Components used
-`NavBar` for clientside routing to navigate to /home /research /portfolio

### `Home`

This page is a landing page with no functionality  

### `Research`

-Components Used

-`Search`
This component uses the user input to show the suggested tickers that include the letters typed

-`TradingViewWidget`
This component is supplied by Tradingview.com
The searched ticker is used to update the TradinviewWidget symbol

-`Stock`
A `PATCH` is used to update the stock on the local API as `isOwned` and updates the `total` number of shares owned
A  `GET`  is used to get the latest stock price from alphavantage.co and create a new order object
A `POST` is used to post the `newOrder` object to `/orders`

### `Portfolio`

A Table of all the orders
A chart of portfolio holdings

-Components used

-`Chart`
credit to plotly.com for the chart

