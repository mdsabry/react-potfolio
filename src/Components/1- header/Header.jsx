import "./Header.css";

import React, { Fragment, useState } from "react";

function Header() {
  const [menuPopUp, setMenuPopUp] = useState(false);

  return (
    <Fragment>
      <header >
        <img src="./logo.png" alt="logo" style={{width:"3.1rem"}} />
        <nav>
          <ul className="main-ul">
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

        <button className="mode icon-lamp">
        </button>

        {menuPopUp && (
          <div className="menu-popup">
            <ul className="box-popup">
              <li>
                <button
                  onClick={() => {
                    setMenuPopUp(false);
                  }}
                  className="icon-x1"
                >
                </button>
              </li>
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
          </div>
        )}
      </header>
      <button
        onClick={() => {
          setMenuPopUp(true);
        }}
        className="icon-th-menu "
      ></button>
    </Fragment>
  );
}

export default Header;
