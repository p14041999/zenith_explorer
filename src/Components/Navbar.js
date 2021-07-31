import React, { Component } from "react";
import "../Styles/Navbar.scss";
import logo from "../Assests/logoblue.svg";
import MenuIcon from "@material-ui/icons/Menu";
class Navbar extends Component {
  state = {
    navbar: false,
  };
  handleNavClixk = () => {
    this.setState({ navbar: !this.state.navbar });
  };
  render() {
    return (
      <>
        <div className="container   darkBack" id="navbar">
          <div className="row-center text-light" id="nav-child1">
            <img alt="" src={logo} />
            <h2>ZENITH</h2>
            <span>Explorer (BETA)</span>
          </div>
          <div id="nav-child2">
            <button className="mx-1">Mainnet Beta</button>
            <button className="mx-1">Testnet Beta</button>
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
      </>
    );
  }
}

export default Navbar;
