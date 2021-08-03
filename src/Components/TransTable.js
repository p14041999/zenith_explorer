import React, { Component } from "react";
import "../Styles/Table1.scss";

class Table extends Component {
  render() {
    return (
      <div className="container table">
        <table className="text-light darkBack">
          <tr>
            <th>BLOCK</th>
            <th>TRANSACTION HASH </th>
            <th>INSTRUCTIONS</th>
            <th>STATUS</th>
            <th>FEE</th>

            <th id="content">TIMESTAMP</th>
          </tr>
          <tr>
            <td> 8989433 </td>
            <td> 4hZy...nvsU </td>
            <td> Unknown </td>
            <td> Success </td>
            <td> 0.000005 ZTR </td>
            <td id="content">1m ago</td>
          </tr>
          <tr>
            <td> 8989433 </td>
            <td> 4hZy...nvsU </td>
            <td> Unknown </td>
            <td> Success </td>
            <td> 0.000005 ZTR </td>
            <td id="content">1m ago</td>
          </tr>
          <tr>
            <td> 8989433 </td>
            <td> 4hZy...nvsU </td>
            <td> Unknown </td>
            <td> Success </td>
            <td> 0.000005 ZTR </td>
            <td id="content">1m ago</td>
          </tr>
          <tr>
            <td> 8989433 </td>
            <td> 4hZy...nvsU </td>
            <td> Unknown </td>
            <td> Success </td>
            <td> 0.000005 ZTR </td>
            <td id="content">1m ago</td>
          </tr>
          <tr>
            <td> 8989433 </td>
            <td> 4hZy...nvsU </td>
            <td> Unknown </td>
            <td> Success </td>
            <td> 0.000005 ZTR </td>
            <td id="content">1m ago</td>
          </tr>
          <tr>
            <td> 8989433 </td>
            <td> 4hZy...nvsU </td>
            <td> Unknown </td>
            <td> Success </td>
            <td> 0.000005 ZTR </td>
            <td id="content">1m ago</td>
          </tr>
          <tr>
            <td> 8989433 </td>
            <td> 4hZy...nvsU </td>
            <td> Unknown </td>
            <td> Success </td>
            <td> 0.000005 ZTR </td>
            <td id="content">1m ago</td>
          </tr>
          <tr>
            <td style={{ borderBottom: "none" }}> 8989433 </td>
            <td style={{ borderBottom: "none" }}> 4hZy...nvsU </td>
            <td style={{ borderBottom: "none" }}> Unknown </td>
            <td style={{ borderBottom: "none" }}> Success </td>
            <td style={{ borderBottom: "none" }}> 0.000005 ZTR </td>
            <td id="content" style={{ borderBottom: "none" }}>
              1m ago
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Table;
