import React, { Component } from "react";

class Error extends Component {
  componentDidMount() {
    console.log(this.props);
    const { setLocation, match } = this.props;
    setLocation(match.path);
  }
  render() {
    return (
      <div>
        <h1 className="text-center text-light">Error:Page Not Found!</h1>
      </div>
    );
  }
}

export default Error;
