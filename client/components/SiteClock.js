import React from "react";
import Clock from "react-live-clock";
const ReactFitText = require("react-fittext");

const SiteClock = () => {

  return (
      <div className="clock">
        <ReactFitText compressor={1}>
          <h4>
            <Clock format="HH:mm:ss" interval={1000} ticking={true} />
          </h4>
        </ReactFitText>
      </div>
  );
};

export default SiteClock;
