import React from "react"
import { NavLink } from "react-router-dom"
function NavBar() {

    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
    }

    return (
       <div>
            <NavLink
                to="/"
                exact="true"
                style={linkStyles}
                activestyle={{ background: "darkblue", }}
            >
                Home
            </NavLink>
            <NavLink
                to="/research"
                exact="true"
                style={linkStyles}
                activestyle={{
                    background: "darkblue",
                }}
            >
                Research
            </NavLink>
            <NavLink
                to="/portfolio"
                exact="true"
                style={linkStyles}
                activestyle={{
                    background: "darkblue",
                }}
            >
                Portfolio
            </NavLink>
        </div>
    )
}
export default NavBar
