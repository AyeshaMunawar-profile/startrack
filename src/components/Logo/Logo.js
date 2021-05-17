import React from "react";
import Tilt from "react-parallax-tilt";
import './Logo.css';

const Logo = ()=>{
    return(
        <>
            <div className="logo-box ma4 mt0">
                <Tilt className="logo-contents"
                      perspective={350}
                      glareEnable={true}
                      glareMaxOpacity={0.65}
                      scale={1.02}>
                    <div className="logo-img">
                        {/*<img src="../../res/img/logo.png" alt="Face value Logo" className="logo"/>*/}
                    </div>
                </Tilt>
            </div>
        </>
    );
}

export default Logo;
