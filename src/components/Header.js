import React from "react"
import Challenge1 from "./Challenge1"
import Challenge2 from "./Challenge2"
import Challenge3 from "./Challenge3"
import Challenge4 from "./Challenge4"

import NavBar from "./NavBar"

export default function Header({ onNameSubmit, names, animals, items }) {
  return (
    <header as="nav" className="bg-gray-800">
      {/* <Challenge1 /> */}
     
      {/* <Challenge2 
      onNameSubmit={onNameSubmit}
      names={names}
      />  */}

      {/* <Challenge3 animals={animals}/> */}

      <Challenge4 items={items}/>

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