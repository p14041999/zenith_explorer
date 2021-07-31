import React, { Component } from "react";
import Overview1 from "./TableToken1";
import Overview2 from "./TableToken2";
// import Overview2 from "./TableAdd";
import Trans from "./TableAdd2";
import "../Styles/Address.scss";

class Address extends Component {
  render() {
    return (
      <div>
        <div className="text-light head">
          {/* <p>Zenith Chain</p> */}
          <h3>Token</h3>
        </div>
        <div className="row">
          <Overview1 />
          <Overview2 />
        </div>
        <Trans />
      </div>
    );
  }
}

export default Address;
