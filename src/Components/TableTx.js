import React, { Component } from "react";
import "../Styles/Table1.scss";

class Table extends Component {
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
            <td id="content">
              0xf6a68e53928c0c9463427d06995e4b281d40356e17eba4a816000f598a1fc839
            </td>
          </tr>
          <tr>
            <td>Status </td>
            <td id="content">Success</td>
          </tr>
          <tr>
            <td>Block</td>
            <td id="content">519545</td>
          </tr>
          <tr>
            <td>From </td>
            <td id="content">0x8b6c8fd93d6f4cea42bbb345dbc6f0dfdb5bec73</td>
          </tr>
          <tr>
            <td>To </td>
            <td id="content">0x8b6c8fd93d6f4cea42bbb345dbc6f0dfdb5bec73</td>
          </tr>
          <tr>
            <td>Value </td>
            <td id="content">1.39098068614789645 ZTR</td>
          </tr>

          <tr>
            <td style={{ borderBottom: "none" }}>Transaction Fee</td>
            <td id="content" style={{ borderBottom: "none" }}>
              0 ZTR
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Table;
