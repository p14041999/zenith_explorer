import React, { Component } from "react";
import Overview from "./TableAdd";
import Trans from "./TableAdd2";
import "../Styles/Address.scss";

class Address extends Component {
  render() {
    return (
      <div>
        <div className="text-light head">
          <p>DETAILS</p>
          <h3>Account</h3>
        </div>

        <Overview />
        <Trans />
      </div>
    );
  }
}

export default Address;
