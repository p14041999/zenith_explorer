import React, { Component } from "react";
import "../Styles/Table1.scss";
import "../Styles/Address.scss";

class Table extends Component {
  render() {
    return (
      <>
        <div className="text-light head">
          {/* <p>DETAILS</p> */}
          <h3>Transactions</h3>
        </div>
        <div className="pcontainer table">
          <table className="text-light darkBack">
            <tr>
              <th>Txn Hash</th>
              <th>Block</th>
              <th>Age</th>
              <th>From</th>
              <th>To</th>
              <th>Value</th>

              <th> [Txn Fee]</th>
            </tr>
            <tr>
              <td>0x663e98769764654ab87.. </td>
              <td>9876544 </td>
              <td>15 days 8 hrs ago </td>
              <td>0x663e98769764654ab87.. </td>
              <td>0x663e98769764654ab87.. </td>
              <td>0.076149855663667 ZTR </td>
              <td>0.000105</td>
            </tr>
            <tr>
              <td>0x663e98769764654ab87.. </td>
              <td>9876544 </td>
              <td>15 days 8 hrs ago </td>
              <td>0x663e98769764654ab87.. </td>
              <td>0x663e98769764654ab87.. </td>
              <td>0.076149855663667 ZTR </td>
              <td>0.000105</td>
            </tr>

            <tr>
              <td style={{ borderBottom: "none" }}>0x663e98769764654ab87.. </td>
              <td style={{ borderBottom: "none" }}>9876544 </td>
              <td style={{ borderBottom: "none" }}>15 days 8 hrs ago </td>
              <td style={{ borderBottom: "none" }}>0x663e98769764654ab87.. </td>
              <td style={{ borderBottom: "none" }}>0x663e98769764654ab87.. </td>
              <td style={{ borderBottom: "none" }}>0.076149855663667 ZTR </td>
              <td style={{ borderBottom: "none" }}>0.000105</td>
            </tr>
          </table>
        </div>
      </>
    );
  }
}

export default Table;
