import Search from "./Search";
import TransTable from "./TransTable";
import React, { Component } from "react";

class Transactions extends Component {
  render() {
    return (
      <>
        <div className="rowcs container">
          <h2 className="text-light">Transactions</h2>
          <Search />
        </div>
        <TransTable />
      </>
    );
  }
}

export default Transactions;
