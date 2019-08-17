import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div class='dash-buttons'>
      <Link to='/edit-profile' class='btn btn-light'>
        <i class='fas fa-user-circle text-primary' /> Edit Profile
      </Link>
      <Link to='/food' class='btn btn-light'>
        <i class='fab fa-black-tie text-primary' /> Foods
      </Link>
      <Link to='/experiences' class='btn btn-light'>
        <i class='fab fa-black-tie text-primary' /> Experiences
      </Link>
      <Link to='/gallery' class='btn btn-light'>
        <i class='fas fa-graduation-cap text-primary' /> Image Gallery
      </Link>
      <Link to='/resources' class='btn btn-light'>
        <i class='fas fa-graduation-cap text-primary' /> Resources
      </Link>
      <Link to='/maps' class='btn btn-light'>
        <i class='fas fa-graduation-cap text-primary' /> Maps
      </Link>
    </div>
  );
};

export default DashboardActions;
