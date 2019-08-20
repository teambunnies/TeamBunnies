import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/food' className='btn btn-light'>
        <i className='fab fa-black-tie text-primary' /> Foods
      </Link>
      <Link to='/experience' className='btn btn-light'>
        <i className='fab fa-black-tie text-primary' /> Experiences
      </Link>
      <Link to='/gallery' className='btn btn-light'>
        <i className='fas fa-graduation-cap text-primary' /> Image Gallery
      </Link>
      <Link to='/consulates' className='btn btn-light'>
        <i className='fas fa-graduation-cap text-primary' /> Consulates
      </Link>
      <Link to='/maps' className='btn btn-light'>
        <i className='fas fa-graduation-cap text-primary' /> Maps
      </Link>
    </div>
  );
};

export default DashboardActions;
