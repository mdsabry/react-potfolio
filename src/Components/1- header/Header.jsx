import "./Header.css";

import React from "react";

function Header() {
  return (
    <header className="flex">
      <img src="./logo.png" alt="logo" width={40}/>
      <nav>
        <ul className="flex">
          <li> 
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Speaking</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <button>Light</button>
    </header>
  );
}

export default Header;
