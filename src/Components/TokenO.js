import Search from "./Search";
import TokenTable from "./TokenTable";
import React, { Component } from "react";

class Transactions extends Component {
  render() {
    return (
      <>
        <div className="rowcs container">
          <h2 className="text-light">Tokens</h2>
          <Search />
        </div>
        <TokenTable />
      </>
    );
  }
}

export default Transactions;
