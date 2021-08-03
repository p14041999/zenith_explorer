import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "../Styles/Search.scss";

class Search extends Component {
  state = {
    val: "",
  };
  handleSearchBTn = () => {
    // if()
    const valArray = this.state.val.split("");
    // console.log(valArray.length);
    if (valArray.length == 66) {
      this.props.history.push(`/tx/${this.state.val}`);
    } else {
      if (valArray.length == 42) {
        this.props.history.push(`/address/${this.state.val}`);
      } else {
        this.props.history.push(`/error`);
      }
    }
  };
  render() {
    return (
      <div className="row search darkBack">
        <input
          placeholder="Search for accounts and transactions"
          className="darkBack"
          value={this.state.val}
          onChange={(e) => {
            this.setState({ val: e.target.value });
          }}
        />
        {/* <span>|</span> */}
        <SearchIcon onClick={this.handleSearchBTn} className="icon" />
      </div>
    );
  }
}

export default withRouter(Search);
