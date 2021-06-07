import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";

const Logo = () => {
  return (
    <>
      <div className="logo-box w-100-l w-70-m w-60-ns h-100-l h-70-m h-60-ns">
        <Tilt
          className="logo-contents "
          perspective={350}
          glareEnable={true}
          glareMaxOpacity={0.65}
          scale={1.02}
        >
          <div className="logo-img"></div>
        </Tilt>
      </div>
    </>
  );
};

export default Logo;
