import React, { Component } from "react";
import Table1 from "./Table";
import Cards from "./Cards";
import Search from "./Search";

class Main extends Component {
  render() {
    return (
      <div>
        <Search history={this.props.history} />
        <Cards />
        <Table1 />
        {/* <Table1 /> */}
      </div>
    );
  }
}

export default Main;
