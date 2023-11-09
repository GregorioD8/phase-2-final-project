import React from "react"
import { NavLink } from "react-router-dom"


function NavBar() {

    return (
       <div>
            <NavLink
                to="/"
                exact="true"
                className="text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-xl font-medium"
                activestyle={{ background: "darkblue"}}
            >
                Home
            </NavLink>
            <NavLink
                to="/research"
                exact="true"
                className="text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-xl font-medium"
                activestyle={{ background: "darkblue"}}
            >
                Research
            </NavLink>
            <NavLink
                to="/portfolio"
                exact="true"
                className="text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-xl font-medium"
                activestyle={{ background: "darkblue"}}
            >
                Portfolio
            </NavLink>
        </div>
    )
}

export default NavBar
