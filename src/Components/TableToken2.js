import React, { Component } from "react";
import "../Styles/Table1.scss";

class Table extends Component {
  render() {
    return (
      <div className="pcontainer table">
        <table className="text-light darkBack ">
          <tr>
            <th>Profile Summary</th>

            <th id="content"></th>
          </tr>
          <tr>
            <td>Contract </td>
            <td id="content">0x09e1d08381d429202d81e63dd9e3bd28e015285a</td>
          </tr>
          <tr>
            <td>Decimals </td>
            <td id="content">18</td>
          </tr>

          <tr>
            <td style={{ borderBottom: "none" }}>Social Profiles</td>
            <td id="content" style={{ borderBottom: "none" }}>
              Not Available
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Table;
