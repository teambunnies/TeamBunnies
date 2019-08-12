import React, { Fragment }from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'
import "./style.css";

const Nav = ({ auth: { isAuthenticated, loading}, logout}) => {
  const authLinks = (
    <ul>
      <p>HELLO, Italian Beef Buckingham</p>
      <li><Link className="" to="/register">Resources</Link></li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{' '}
          <span className="hide-sm">Logout</span></a>
        </li>
    </ul>
    
  )

  const guestLinks = (
    <ul>
    
    <li><Link className="btn btn-dark" to="/register">Register</Link></li>
    <li><Link className="btn btn-dark" to="/login">Login</Link></li>
  </ul>

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
}

const mapStatetoProps = state => ({
  auth: state.auth
})

export default connect(mapStatetoProps, { logout })(Nav)