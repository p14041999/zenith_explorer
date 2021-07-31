import React, { Component } from "react";
import Table1 from "./Table";
import Cards from "./Cards";

class Main extends Component {
  render() {
    return (
      <div>
        <Cards />
        <Table1 />
        <Table1 />
      </div>
    );
  }
}

export default Main;
