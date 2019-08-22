import React, { Fragment }from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import { logout } from '../../actions/auth'
import "./style.css";

const Nav = ({  auth: { isAuthenticated, loading}, chicagoname: {chicagoname},logout}) => {
 
  const authLinks = (
    <ul>
     
      <p>HELLO, {chicagoname && chicagoname.firstname} {chicagoname &&  chicagoname.lastname} </p>
     
      <li><Link className="" to="/dashboard">Dashboard</Link></li>
      <li><Link to='/food'>Foods</Link></li>
      <li><Link to='/experience'>Experiences</Link></li>
      <li><Link to='/gallery'>Image Gallery</Link></li>
      <li><Link to='/consulates'>Consulates</Link></li>
      <li><Link to='/maps'>Maps</Link></li>
      <li><Link onClick={logout} to="/login">Logout</Link></li>
    </ul>
    
  )

  const guestLinks = (
    <>
    {/* <li><Link className="btn btn-dark" to="/register">Register</Link></li> 
    <li><Link className="btn btn-dark" to="/login">Login</Link></li> */}
    <ul>
    <li><Link className="" to="/register" role="button">Register</Link></li>
    <li> <Link className="" to="/login" role="button">Login</Link></li>
    </ul>
  </>

  )
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        ODYSSEY
        </a>
        {!loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks}</Fragment>) }
        
    </nav>
  );
}

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  chicagoname: PropTypes.object.isRequired,
 
}

const mapStatetoProps = state => ({
  auth: state.auth,
  chicagoname: state.chicagoname
  
})

export default connect(mapStatetoProps, {  logout })(Nav)