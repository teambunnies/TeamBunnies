import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div class='dash-buttons'>
      <Link to='/food' class='btn btn-light'>
        <i class='fab fa-black-tie text-primary' /> Foods
      </Link>
      <Link to='/experience' class='btn btn-light'>
        <i class='fab fa-black-tie text-primary' /> Experiences
      </Link>
      <Link to='/gallery' class='btn btn-light'>
        <i class='fas fa-graduation-cap text-primary' /> Image Gallery
      </Link>
      <Link to='/consulates' class='btn btn-light'>
        <i class='fas fa-graduation-cap text-primary' /> Consulates
      </Link>
      <Link to='/maps' class='btn btn-light'>
        <i class='fas fa-graduation-cap text-primary' /> Maps
      </Link>
    </div>
  );
};

export default DashboardActions;
