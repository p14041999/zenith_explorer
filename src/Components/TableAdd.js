import React, { Component } from "react";
import "../Styles/Table1.scss";
import Web3 from "web3";

class Table extends Component {
  state = {
    balance: 0,
    price: 1.8,
    address: "",
  };
  async componentDidMount() {
    const web3 = new Web3("https://dataserver-1.zenithchain.co/");
    await this.setState({
      address: this.props.address.params.id,
    });
    // console.log(this.state.address);
    // console.log(this.props.address.params.id.toLowerCase());
    const bal = await web3.eth.getBalance(this.state.address);
    // console.log("bal", web3.utils.fromWei(bal.toString()));
    this.setState({ balance: web3.utils.fromWei(bal.toString()) });
    // console.log(this.props.address.params.id);
  }
  numberWithCommas = (x) => {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  };
  numberWithCommas2 = (x) => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };
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
            <td id="content">{this.state.address}</td>
          </tr>
          <tr>
            <td>Balance </td>
            <td id="content">
              {this.numberWithCommas2(this.state.balance)} ZTC
            </td>
          </tr>
          <tr style={{ borderBottom: "none" }}>
            <td>ZTC Value</td>
            <td id="content">
              ${this.numberWithCommas2(this.state.price * this.state.balance)}
            </td>
          </tr>
          {/* <tr>
            <td>Contract Creator </td>
            <td id="content">0*fokjhsdl3iv124jasjflug</td>
          </tr>

          <tr>
            <td style={{ borderBottom: "none" }}>Token Tracker</td>
            <td id="content" style={{ borderBottom: "none" }}>
              Zenith Chain(ZTR)
            </td>
          </tr> */}
        </table>
      </div>
    );
  }
}

export default Table;
