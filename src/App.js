import React, { Component } from "react";
import "./App.scss";
import Web3 from "web3";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Main from "./Components/Main";
import Transactions from "./Components/Transactions";
import Address from "./Components/Address";
import Tx from "./Components/Tx";
import Token from "./Components/Token";
import TokenO from "./Components/TokenO";
import Blocks from "./Components/Blocks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./Styles/Mobile.scss";

class App extends Component {
  async componentDidMount() {
    const web3 = new Web3("https://dataserver-1.zenithchain.co/");
    console.log(await web3.eth.getBlock("latest"));

    const objTx = await web3.eth.getTransaction(
      "0x663e8297489520ab7bf3da925b9f0e10ea879e649b69e35e3e75240a0bd8124e"
    );
    const objRec = await web3.eth.getTransactionReceipt(
      "0x663e8297489520ab7bf3da925b9f0e10ea879e649b69e35e3e75240a0bd8124e"
    );
    const objBlock = await web3.eth.getBlock(objTx.blockHash);
    const timestamp = new Date(objBlock.timestamp);

    // console.log("timestamp", timestamp.toString());

    // console.log("blockno:", objTx.blockNumber);
    // console.log("from:", objTx.from);
    // console.log("to:", objTx.to);
    // console.log("value:", web3.utils.fromWei(objTx.value.toString()));

    // console.log(
    //   "tax:",
    //   web3.utils.fromWei(
    //     (objTx.gas * Number.parseInt(objTx.gasPrice)).toString()
    //   )
    // );

    console.log("status", objRec.status);
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          {/* <Main /> */}
          <Switch>
            <Route exact={true} path="/" component={Main}></Route>
            {/* <Route path="/transactions" component={Transactions}></Route>
            <Route path="/tokens" component={TokenO}></Route>
            <Route path="/blocks" component={Blocks}></Route> */}
            <Route path="/address/:id" component={Address}></Route>
            <Route path="/tx/:id" component={Tx}></Route>
            {/* <Route path="/tx/:id" component={Blocks}></Route> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
