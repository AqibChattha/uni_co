import React from "react";
import "./Navbar.css"
const Navbar = () => {
    return(
        <>
          <nav className="main-div">
              <div className="logo">
                  <h2>
                    <span>U</span>ni
                    <span>C</span>o
                  </h2>
              </div>
              <div className="menu-link">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
              </div>
          </nav>
        </>
    )
}

export default Navbar