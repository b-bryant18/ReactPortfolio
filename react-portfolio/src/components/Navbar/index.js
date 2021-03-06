import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

//Depending on the current path, this component 
//sets the "active" class on the appropriate 
//navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Brad's Portfolio
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                        >
                            About
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contact"
                            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                        >
                            Contact
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/repos"
                                className={window.location.pathname === "/repos" ? "nav-link active" : "nav-link"}
                            >
                                Repos
                            </Link>
                        </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;