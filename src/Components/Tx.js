import React, { Component } from "react";
import TxOverview from "./TableTx";
import "../Styles/Address.scss";

class Tx extends Component {
  componentDidMount() {
    console.log(this.props);
    const { setLocation, match } = this.props;
    setLocation(match.path);
  }
  render() {
    return (
      <div>
        <div className="text-light head">
          <h3>Transactions Details</h3>
        </div>

        <TxOverview txHash={this.props.match.params.id} />
      </div>
    );
  }
}

export default Tx;
