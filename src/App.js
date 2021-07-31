import React, { Component } from "react";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Cards from "./Components/Cards";
import Table1 from "./Components/Table";
import "./Styles/Mobile.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Search />
        <Cards />
        <Table1 />
        <Table1 />
      </div>
    );
  }
}

export default App;
