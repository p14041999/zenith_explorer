import React, { Component } from "react";
import "../Styles/Table1.scss";

class Table extends Component {
  render() {
    return (
      <div className="pcontainer table" style={{ width: 530 }}>
        <table className="text-light darkBack ">
          <tr>
            <th>Overview</th>

            <th id="content"></th>
          </tr>
          <tr>
            <td>Total Supply </td>
            <td id="content">0 ZTR</td>
          </tr>
          <tr>
            <td>Holders </td>
            <td id="content">0 addresses</td>
          </tr>
          <tr>
            <td>Price</td>
            <td id="content">$0.00</td>
          </tr>

          <tr>
            <td style={{ borderBottom: "none" }}>Transfer</td>
            <td id="content" style={{ borderBottom: "none" }}>
              0
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Table;
