import React from "react";
import './header.css'; // Import the external CSS file

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav-left">
                <img src={require("./logo1.png")} alt="logo1" height='150px' />
          <div className="labels-dropdowns">
                <label htmlFor="dropdown">Products</label>
                    <select>
                        <option value="p1"></option>
                    </select>
                <label htmlFor="dropdown">For Teams</label>
                    <select>
                        <option value="t1"></option>
                    </select>
                <label htmlFor="dropdown">Support</label>
                    <select>
                        <option value="s1"></option>
                    </select>
          </div>
        </div>
        <div>
            <button>Try Free</button>
            <button>Buy Now</button>
            <button>Login</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
