import React, { Component } from "react";
import "../Styles/Table1.scss";

class Table extends Component {
  render() {
    return (
      <div className="container table">
        <table className="text-light darkBack">
          <tr>
            <th>TOKEN</th>
            <th>PRICE</th>
            <th>24H CHANGE</th>
            <th>ACCOUNTS</th>
            <th id="content">VOLUME (24H)</th>
          </tr>
          <tr>
            <td>Solanium</td>
            <td> $0.33 </td>
            <td> -1.55% </td>
            <td> 625,539 </td>
            <td id="content">$135,841.58</td>
          </tr>
          <tr>
            <td>Solanium</td>
            <td> $0.33 </td>
            <td> -1.55% </td>
            <td> 625,539 </td>
            <td id="content">$135,841.58</td>
          </tr>
          <tr>
            <td>Solanium</td>
            <td> $0.33 </td>
            <td> -1.55% </td>
            <td> 625,539 </td>
            <td id="content">$135,841.58</td>
          </tr>
          <tr>
            <td>Solanium</td>
            <td> $0.33 </td>
            <td> -1.55% </td>
            <td> 625,539 </td>
            <td id="content">$135,841.58</td>
          </tr>
          <tr>
            <td>Solanium</td>
            <td> $0.33 </td>
            <td> -1.55% </td>
            <td> 625,539 </td>
            <td id="content">$135,841.58</td>
          </tr>
          <tr>
            <td>Solanium</td>
            <td> $0.33 </td>
            <td> -1.55% </td>
            <td> 625,539 </td>
            <td id="content">$135,841.58</td>
          </tr>
          <tr>
            <td>Solanium</td>
            <td> $0.33 </td>
            <td> -1.55% </td>
            <td> 625,539 </td>
            <td id="content">$135,841.58</td>
          </tr>

          <tr>
            <td style={{ borderBottom: "none" }}> Solanium </td>
            <td style={{ borderBottom: "none" }}>$0.33 </td>
            <td style={{ borderBottom: "none" }}> -1.55% </td>
            <td style={{ borderBottom: "none" }}> 625,539 </td>
            <td id="content" style={{ borderBottom: "none" }}>
              $135,841.58
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Table;
