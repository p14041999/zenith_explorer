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
            <td>Address </td>
            <td id="content">Buc3Jp2fWSWE79pXBBdDmFM3ubJo8HGDqn3H14XKSKHi</td>
          </tr>
          <tr>
            <td>Balance </td>
            <td id="content">0 ZTR</td>
          </tr>
          <tr>
            <td>ZTR Value</td>
            <td id="content">$0.00</td>
          </tr>
          <tr>
            <td>Contract Creator </td>
            <td id="content">0*fokjhsdl3iv124jasjflug</td>
          </tr>

          <tr>
            <td style={{ borderBottom: "none" }}>Token Tracker</td>
            <td id="content" style={{ borderBottom: "none" }}>
              Zenith Chain(ZTR)
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Table;
