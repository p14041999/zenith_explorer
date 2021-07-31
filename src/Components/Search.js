import React, { Component } from "react";

import SearchIcon from "@material-ui/icons/Search";
import "../Styles/Search.scss";

class Search extends Component {
  render() {
    return (
      <div className="row search darkBack">
        <input
          placeholder="Search for blocks,accounts,transactions,programs,and tokens"
          className="darkBack"
        />
        {/* <span>|</span> */}
        <SearchIcon className="icon" />
      </div>
    );
  }
}

export default Search;
