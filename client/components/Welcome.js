import React from "react";
const Quote = require("inspirational-quotes");

export const Welcome = () => {
  const quote = Quote.getRandomQuote();

  return (
      <div className="quote">
        <h3>Quote of the day: </h3>
        <br />
        <p><i>{quote}</i></p>
      </div>

  );
};

export default Welcome;
