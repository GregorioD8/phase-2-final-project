import React from "react"

import NavBar from "./NavBar"

export default function Header() {
  return (
    <header as="nav" className="bg-gray-800">
      
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div  className="flex flex-shrink-0 items-center">
                  <a href="http://localhost:3000/" >
                  <img 
                    className="h-10 w-auto"
                    src="./DM5.png"
                    alt="Your Company"
                  />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <NavBar />
                  </div>
                </div>
              </div>
            </div>
          </div>
      
   
    </header>
  )
}