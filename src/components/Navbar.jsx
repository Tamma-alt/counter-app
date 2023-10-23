import React from "react";

import {Link} from "react-router-dom"

export const Navbar = () => {
    return (
        <div className="container">
        <nav className="nav">
              
            <Link to="/" className="brand">Tamma-alt</Link>
            <ul className="nav-list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
                <li>
                    <Link to="/test-error">Test Error</Link>
                </li>
            </ul>
           
        </nav>
        </div> 
       
    )
}