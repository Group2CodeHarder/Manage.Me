import React from "react";
import Clock from "react-live-clock";
const ReactFitText = require("react-fittext");
const Quote = require("inspirational-quotes");

export const Welcome = () => {
  const quote = Quote.getRandomQuote();

  return (
    <div className="content-wrapper">
      <div className="quote">
        <h2>Quote of the day: </h2>
        <h3>{quote}</h3>
      </div>

      <div className="clock">
        <ReactFitText compressor={4.0}>
          <h4>
            <Clock format="HH:mm:ss" interval={1000} ticking={true} />
          </h4>
        </ReactFitText>
      </div>
    </div>
  );
};

export default Welcome;
