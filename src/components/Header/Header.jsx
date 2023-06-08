import React, { Component } from "react";
import logo from "./avataaars.svg";
import './Header.css'
import './mediaQueryHeader.css'
export default class Header extends Component {
  state = {
    headerTitle: "START BOOTSTRAP",
    headerinfo: "Graphic Artist - Web Designer - Illustrator",
  };
  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <img src={logo} alt="logo" className="logo"/>
              </div>
              <div className="col-12">
                <h1 className="headerTitle">{this.state.headerTitle}</h1>
              </div>
              <div className="col-12">
                <div className="starDiv">
                    <div className="line"></div>
                    <i class="fa-solid fa-star"></i>
                    <div className="line"></div>
                </div>
              </div>
              <div className="col-12">
                <p className="headerInfo">{this.state.headerinfo}</p>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
