import React from 'react'
import { Link } from "gatsby"
export default function Navbar() {
  return (
    <nav id="navigation">
        {/* container */}
        <div className="container">
            {/* responsive-nav */}
            <div id="responsive-nav">
            {/* NAV */}
        
            <ul className="main-nav nav navbar-nav">
              <Link to="/" activeClassName="active" > Home</Link>
              <Link to="/Store" activeClassName="active" > Store</Link>
            </ul>
            {/* /NAV */}
            </div>
            {/* /responsive-nav */}
        </div>
        {/* /container */}
    </nav>

  )
}
