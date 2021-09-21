import React, { Component } from "react";
import StripeContainer from "./StripeContainer";

class Checkout extends Component {
  render() {
    return (
      <div>
        <div className="stripeBox">
          <StripeContainer />
        </div>
      </div>
    );
  }
}

export default Checkout;
