import React from "react";

import Tilt from "react-parallax-tilt";
import face from "../../images/face.png";

//styles
import "./Logo.css";

export default function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt className="parallax-effect" perspective={500}>
        <div className="inner-element">
          <img src={face} alt="face logo" />
        </div>
      </Tilt>
    </div>
  );
}
