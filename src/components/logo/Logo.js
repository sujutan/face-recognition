import React from "react";

import Tilt from "react-parallax-tilt";
import brain from "../../images/brain.png";

//styles
import "./Logo.css";

export default function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt className="parallax-effect" perspective={500}>
        <div className="inner-element">
          <img src={brain} alt="brain logo" />
        </div>
      </Tilt>
    </div>
  );
}
