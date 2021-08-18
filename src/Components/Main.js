import React, { Component } from "react";
import Table1 from "./Table";
import Cards from "./Cards";
import Search from "./Search";

class Main extends Component {
  async componentDidMount() {
    console.log(this.props);
    const { location, setLocation, match } = this.props;
    const path = await match.path;
    await setLocation(path);
    console.log(setLocation);
    console.log("loc", location);
  }
  render() {
    console.log("propsMain", this.props);
    return (
      <div>
        <Search history={this.props.history} />
        <Cards />
        <Table1 />
        {/* <Table1 /> */}
      </div>
    );
  }
}

export default Main;
