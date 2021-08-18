import React, { Component } from "react";
import "./App.scss";
import Particles from "react-tsparticles";

import Web3 from "web3";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Main from "./Components/Main";
import Transactions from "./Components/Transactions";
import Address from "./Components/Address";
import Tx from "./Components/Tx";
import Token from "./Components/Token";
import TokenO from "./Components/TokenO";
import Blocks from "./Components/Blocks";
import Error from "./Components/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./Styles/Mobile.scss";

class App extends Component {
  // async componentDidMount() {
  //   const web3 = new Web3("https://dataserver-1.zenithchain.co/");
  //   console.log(await web3.eth.getBlock("latest"));

  //   const objTx = await web3.eth.getTransaction(
  //     // "0x663e8297489520ab7bf3da925b9f0e10ea879e649b69e35e3e75240a0bd8124e"
  //   );
  //   const objRec = await web3.eth.getTransactionReceipt(
  //     "0x663e8297489520ab7bf3da925b9f0e10ea879e649b69e35e3e75240a0bd8124e"
  //   );
  //   console.log(objTx);
  //   const objBlock = await web3.eth.getBlock(objTx.blockHash);
  //   const timestamp = new Date(objBlock.timestamp);

  //   // console.log("timestamp", timestamp.toString());

  //   // console.log("blockno:", objTx.blockNumber);
  //   // console.log("from:", objTx.from);
  //   // console.log("to:", objTx.to);
  //   // console.log("value:", web3.utils.fromWei(objTx.value.toString()));

  //   // console.log(
  //   //   "tax:",
  //   //   web3.utils.fromWei(
  //   //     (objTx.gas * Number.parseInt(objTx.gasPrice)).toString()
  //   //   )
  //   // );

  //   console.log("status", objRec.status);
  // }
  state = {
    location: "/",
  };
  setLocation = (val) => {
    this.setState({ location: val });
  };
  particlesInit(main) {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }
  particlesLoaded(container) {
    console.log(container);
  }
  render() {
    // console.log("props", this.props);
    return (
      <div>
        <Particles
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={{
            background: {
              color: {
                value: "#171429",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                // onHover: {
                //   enable: true,
                //   mode: "repulse",
                // },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 1,
              },
            },
            detectRetina: true,
          }}
        />
        <Router>
          <Navbar location={this.state.location} />
          {/* <Main /> */}
          <Switch>
            <Route
              exact={true}
              path="/"
              render={(props) => (
                <Main
                  {...props}
                  setLocation={this.setLocation}
                  location={this.state.location}
                />
              )}
            ></Route>
            {/* <Route path="/transactions" component={Transactions}></Route>
            <Route path="/tokens" component={TokenO}></Route>
            <Route path="/blocks" component={Blocks}></Route> */}
            <Route
              path="/address/:id"
              render={(props) => (
                <Address
                  {...props}
                  setLocation={this.setLocation}
                  location={this.props.location}
                />
              )}
            ></Route>
            <Route
              path="/tx/:id"
              render={(props) => (
                <Tx
                  {...props}
                  setLocation={this.setLocation}
                  location={this.props.location}
                />
              )}
            ></Route>
            <Route
              render={(props) => (
                <Error
                  {...props}
                  setLocation={this.setLocation}
                  location={this.props.location}
                />
              )}
            ></Route>
            {/* <Route path="/tx/:id" component={Blocks}></Route> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
