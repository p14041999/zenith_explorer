import React, { Component } from "react";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Main from "./Components/Main";
import Address from "./Components/Address";
import Tx from "./Components/Tx";
import Token from "./Components/Token";

import "./Styles/Mobile.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
