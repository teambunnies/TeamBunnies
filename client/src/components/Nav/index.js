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
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{' '}
          <span className="hide-sm">Logout</span></a>
        </li>
    </ul>
    
  )

  const guestLinks = (
    <>
    {/* <li><Link className="btn btn-dark" to="/register">Register</Link></li> 
    <li><Link className="btn btn-dark" to="/login">Login</Link></li> */}
    <a class="btn btn-dark" href="/register" role="button">Register</a>
    <a class="btn btn-dark" href="/login" role="button">Login</a>
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