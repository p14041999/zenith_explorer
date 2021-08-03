import React, { Component } from "react";
import "../Styles/Table1.scss";
import Web3 from "web3";

class Table extends Component {
  state = {
    txHash: "",
    objTx: {},
    status: true,
    value: 0,
    gasfees: 0,
    timestamp: {},
  };
  async componentDidMount() {
    const web3 = new Web3("https://dataserver-1.zenithchain.co/");
    // console.log(await web3.eth.getBlock("latest"));

    const objTx = await web3.eth.getTransaction(this.props.txHash);
    const objRec = await web3.eth.getTransactionReceipt(this.props.txHash);
    const objBlock = await web3.eth.getBlock(objTx.blockHash);
    const timestamp = new Date(objBlock.timestamp);
    const gasfees = web3.utils.fromWei(
      (objTx.gas * Number.parseInt(objTx.gasPrice)).toString()
    );

    this.setState({
      txHash: this.props.txHash,
      objTx,
      status: objRec.status,
      timestamp,
      value: web3.utils.fromWei(objTx.value.toString()),
      gasfees: gasfees,
    });
  }
  render() {
    return (
      <div className="pcontainer table">
        <table className="text-light darkBack ">
          <tr>
            <th>Overview</th>

            <th id="content"></th>
          </tr>
          <tr>
            <td>Transaction Hash</td>
            <td id="content">{this.state.txHash}</td>
          </tr>
          <tr>
            <td>Status </td>
            <td id="content">{this.state.status ? "SUCCESS" : "FAIL"}</td>
          </tr>
          <tr>
            <td>Block</td>
            <td id="content">{this.state.objTx?.blockNumber}</td>
          </tr>
          <tr>
            <td>From </td>
            <td id="content">{this.state.objTx?.from}</td>
          </tr>
          <tr>
            <td>To </td>
            <td id="content">{this.state.objTx?.to}</td>
          </tr>
          <tr>
            <td>Value </td>
            <td id="content">{this.state.value} ZTC</td>
          </tr>

          <tr>
            <td style={{ borderBottom: "none" }}>Transaction Fee</td>
            <td id="content" style={{ borderBottom: "none" }}>
              {this.state.gasfees} ZTC
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Table;
