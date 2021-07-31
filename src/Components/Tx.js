import React, { Component } from "react";
import Overview from "./TableTx";
import "../Styles/Address.scss";

class Tx extends Component {
  render() {
    return (
      <div>
        <div className="text-light head">
          <h3>Transactions Details</h3>
        </div>

        <Overview />
      </div>
    );
  }
}

export default Tx;
