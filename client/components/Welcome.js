import React from "react";
import Clock from "react-live-clock";
const ReactFitText = require("react-fittext");
const Quote = require("inspirational-quotes");

export const Welcome = () => {
  const quote = Quote.getRandomQuote();

  return (
    <div className="content-wrapper">
      <h1>Quote of the day: </h1>
      <h2>{quote}</h2>

      <ReactFitText compressor={4.0}>
        <h4>
          <Clock format="HH:mm:ss" interval={1000} ticking={true} />
        </h4>
      </ReactFitText>
    </div>
  );
};

export default Welcome;
