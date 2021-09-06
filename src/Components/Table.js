import React, { Component } from "react";
import "../Styles/Table1.scss";
import Web3 from "web3";

class Table extends Component {
  state = {
    height: 0,
    timestamp: "",
  };
  async componentDidMount() {
    const web3 = new Web3("https://dataserver-1.zenithchain.co/");
    // console.log(await web3.eth.getBlock("latest"));
    let obj = await web3.eth.getBlock("latest");
    let height = obj.number;
    let timestamp = Date(obj.timestamp);
    console.log(timestamp);
    window.blocktime = obj.timestamp;
    let lastHash = obj.hash;
    let gasLimit = obj.gasLimit;
    let difficulty = obj.difficulty;

    this.setState({
      height: height,
      timestamp: timestamp.toString(),
      lastHash,
      gasLimit,
      difficulty,
    });

    // const objTx = await web3.eth
    //   .getTransaction
    //   // "0x663e8297489520ab7bf3da925b9f0e10ea879e649b69e35e3e75240a0bd8124e"
    //   ();
    // const objRec = await web3.eth.getTransactionReceipt(
    //   "0x663e8297489520ab7bf3da925b9f0e10ea879e649b69e35e3e75240a0bd8124e"
    // );
    // console.log(objTx);
    // const objBlock = await web3.eth.getBlock(objTx.blockHash);
    // const timestamp = new Date(objBlock.timestamp);

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

    // console.log("status", objRec.status);
  }
  render() {
    console.log(this.state.timestamp);
    return (
      <div className="mcontainer table">
        <table className="text-light darkBack">
          <tr>
            <th>Live Cluster Stats</th>

            <th id="content"></th>
          </tr>
          {/* <tr>
            <td>Slot </td>
            <td id="content">89,647,678</td>
          </tr> */}
          <tr>
            <td>Block height</td>
            <td id="content">{this.state.height}</td>
          </tr>
          <tr>
            <td>Cluster time</td>
            <td id="content">{this.state.timestamp}</td>
          </tr>
          {/* <tr>
            <td>Slot time (1min average) </td>
            <td id="content">536ms</td>
          </tr>
          <tr>
            <td>Slot time (1hr average) </td>
            <td id="content">536ms</td>
          </tr> */}
          <tr>
            <td>Last Block Hash</td>
            <td id="content">{this.state.lastHash}</td>
          </tr>
          <tr>
            <td>Difficulty </td>
            <td id="content">{this.state.difficulty}</td>
          </tr>

          <tr>
            <td style={{ borderBottom: "none" }}>Gas Limit</td>
            <td id="content" style={{ borderBottom: "none" }}>
              {this.state.gasLimit}
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Table;
