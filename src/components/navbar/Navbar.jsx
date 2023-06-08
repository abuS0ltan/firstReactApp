import React, { Component } from "react";
import style from './Navbar.module.css';
import './Navbar.css';
import './mediaQueryNavbar.css';
export default class Navbar extends Component {
  state = {
    title: "START BOOTSTRAP",
    navLink: ["portfolio", "about", "contact"],
  };
  render() {
    return (
      <div>
        <nav className={`navbar navbar-expand-lg`}>
          <div className="container">
            <a className={`navbar-brand ${style.navbarBrand}`} href="#">
              {this.state.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="menu">MENU</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {this.state.navLink.map((link) => {
                  return (
                    <li className={`nav-item`}>
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}