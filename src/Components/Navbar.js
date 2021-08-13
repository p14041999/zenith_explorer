import React, { Component } from "react";
import "../Styles/Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../Assests/logoblue.svg";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CommentIcon from "@material-ui/icons/Comment";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HomeIcon from "@material-ui/icons/Home";
class Navbar extends Component {
  state = {
    navbar: false,
    link: window.location.pathname,
  };
  handleNavClixk = () => {
    this.setState({ navbar: !this.state.navbar });
  };
  handleDashClick = () => {
    this.setState({ link: "/" });
  };
  handleTokensClick = () => {
    this.setState({ link: "/tokens" });
  };
  handleTransClick = () => {
    this.setState({ link: "/transactions" });
  };
  handleBlocksClick = () => {
    this.setState({ link: "/blocks" });
  };

  render() {
    return (
      <>
        <div className="container darkBack" id="navbar">
          <div className="row-center text-light" id="nav-child1">
            {/* {window.location.pathname == "/" ? (
              <span></span>
            ) : ( */}
            <Link to="/" className="text-light">
              {" "}
              <ArrowBackIcon style={{ paddingRight: 60 }} className="backbtn" />
            </Link>
            {/* )} */}
            <Link
              to="/"
              className="row-center text-light"
              style={{ textDecoration: "none" }}
            >
              <img alt="" src={logo} />
              <h2>ZENITH</h2>
              <span>Explorer (BETA)</span>
            </Link>
          </div>
          <div id="nav-child2" className="row-center">
            <button className="mx-1 row-center">
              <span className="text-light">Mainnet Beta</span>
              {/* <ArrowDropDownIcon className="text-light " /> */}
            </button>
            <div id="commBtn">
              <CommentIcon />
            </div>
            {/* <button className="mx-1 text-light">Testnet Beta</button> */}
          </div>
          <MenuIcon
            onClick={this.handleNavClixk}
            className="hamburger"
            style={{ display: "none" }}
          />
        </div>
        {this.state.navbar ? (
          <div className="navitem darkBack">
            <ul>
              <li>Mainnet Beta</li>
              <li>Testnet Beta</li>
            </ul>
          </div>
        ) : null}
        {/* <div className="sub-nav">
          <ul className="row container ">
            <li>
              <Link
                onClick={this.handleDashClick}
                className={this.state.link == "/" ? "active" : "link"}
                to="/"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                onClick={this.handleTransClick}
                className={
                  this.state.link == "/transactions" ? "active" : "link"
                }
                to="/transactions"
              >
                Transactions
              </Link>
            </li>
            <li>
              <Link
                onClick={this.handleBlocksClick}
                className={this.state.link == "/blocks" ? "active" : "link"}
                to="/blocks"
              >
                Blocks
              </Link>
            </li>
            <li>
              <Link
                onClick={this.handleTokensClick}
                className={this.state.link == "/tokens" ? "active" : "link"}
                to="/tokens"
              >
                Tokens
              </Link>
            </li>
          </ul>
        </div> */}
      </>
    );
  }
}

export default Navbar;
