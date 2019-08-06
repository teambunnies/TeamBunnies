import React from "react";
import "./style.css";


function LandingNav() {
  return (
    <>
    <div className="background">
    <nav className="navbar navbar-light ">
      <a className="navbar-brand" href="/">
        ODYSSEY
        </a>
      
        <div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Resources
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="/foodexp">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
      
      
    </nav>
    </div>
    </>
  );
}


export default LandingNav;
