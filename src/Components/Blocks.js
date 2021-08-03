import Search from "./Search";
import BlockTable from "./BlockTable";
import React, { Component } from "react";

class Transactions extends Component {
  render() {
    return (
      <>
        <div className="rowcs container">
          <h2 className="text-light">Blocks</h2>
          <Search />
        </div>
        <BlockTable />
      </>
    );
  }
}

export default Transactions;
