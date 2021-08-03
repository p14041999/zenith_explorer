import React, { Component } from "react";
import Overview from "./TableAdd";
import Trans from "./TableAdd2";
import "../Styles/Address.scss";

class Address extends Component {
  render() {
    return (
      <div>
        <div className="text-light head py-3">
          <h3>Account Details</h3>
          {/* <p></p> */}
        </div>

        <Overview address={this.props.match} />
      </div>
    );
  }
}

export default Address;
