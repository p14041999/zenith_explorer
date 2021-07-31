import React, { Component } from "react";
import "../Styles/Table1.scss";

class Table extends Component {
  render() {
    return (
      <div className="mcontainer table">
        <table className="text-light darkBack">
          <tr>
            <th>Live Cluster Stats</th>

            <th id="content"></th>
          </tr>
          <tr>
            <td>Slot </td>
            <td id="content">89,647,678</td>
          </tr>
          <tr>
            <td>Block height</td>
            <td id="content">79,864,999</td>
          </tr>
          <tr>
            <td>Cluster time</td>
            <td id="content">
              July 31, 2021 at 11:48:49 Coordinated Universal Time Slot time
            </td>
          </tr>
          <tr>
            <td>Slot time (1min average) </td>
            <td id="content">536ms</td>
          </tr>
          <tr>
            <td>Slot time (1hr average) </td>
            <td id="content">536ms</td>
          </tr>
          <tr>
            <td>Epoch </td>
            <td id="content">207</td>
          </tr>
          <tr>
            <td>Epoch progress </td>
            <td id="content">2.0%</td>
          </tr>

          <tr>
            <td style={{ borderBottom: "none" }}>
              Epoch time remaining (approx.)
            </td>
            <td id="content" style={{ borderBottom: "none" }}>
              ~2d 16h 55m
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Table;
