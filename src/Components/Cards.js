import React, { Component } from "react";
import "../Styles/Cards.scss";

class Cards extends Component {
  render() {
    return (
      <div>
        <div className="card-cont py-2 mcontainer row">
          <div className="card darkBack p-1 px-3 text-light">
            <h3>Circulating Supply</h3>
            <h2 className="text-primary">80M</h2>
            <span>/100M</span>
            {/* <p>
              <span className="text-primary">55.8%</span> is circulating
            </p> */}
          </div>
          <div className="card darkBack p-1 px-3 text-light">
            <h3>Total Holdings</h3>
            <h2 className="text-primary">1006</h2>
            {/*<span>/21M</span>
             <p>
              Delinquent stake:{""}
              <span className="text-primary">50.6%</span>
            </p> */}
          </div>
          <div className="card darkBack p-1 px-3 text-light">
            <h3>Price</h3>
            <h2 className="text-primary">$0.2</h2>
            {/* <span>/21M</span> */}
            {/* <p>
              MCap: <span className="text-primary">55.8%</span>
              is circulating
            </p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
