import React from "react"


function Footer() {

 return (
    <footer className="bg-white rounded-lg shadow dark: m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="http://localhost:3000/" className="flex items-center mb-4 sm:mb-0">
                <img src="./DM6.png" className="h-8 mr-3" alt=" " />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-400">Del Market</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="https://www.sec.gov/" className="mr-4 hover:underline md:mr-6 ">Sec.gov</a>
                </li>
                <li>
                    <a href="https://www.tradingview.com/" className="mr-4 hover:underline md:mr-6 ">Tradingview.com</a>
                </li>
                <li>
                    <a href="https://polygon.io/" className="mr-4 hover:underline md:mr-6">Polygon.io</a>
                </li>
                <li>
                    <a href="https://www.alphavantage.co/" className="mr-4 hover:underline md:mr-6 ">Alphavantage.co</a>
                </li>
                <li>
                    <a href="https://plotly.com/" className="mr-4 hover:underline md:mr-6 ">Plotly.com</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center text-gray-400">© 2023 <a href="# " className="hover:underline">Del Market™</a>. All Rights Reserved.</span>
    </div>
</footer>
 )   
}

export default Footer