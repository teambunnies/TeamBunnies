import React from "react";
import "../components/BackgroundColor/style.css";
import LandingNav from "../components/LandingNav";
import ChicagoBanner from "../components/ChicagoBanner";





function Landing() {
  return (
    <div>
 
 { <LandingNav /> }
 {<ChicagoBanner />}

    </div>
  )
}

export default Landing;
