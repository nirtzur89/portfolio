import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = () => (
  <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <NavLink className='header-logo' to='/'>
      NIR TZUR
    </NavLink>
    <button
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarNavAltMarkup'
      aria-controls='navbarNavAltMarkup'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
      <div className='navbar nav'>
        <NavLink
          to='/'
          className='nav-item nav-link'
          activeClassName='active-nav'
          exact={true}
        >
          Home
        </NavLink>
        <NavLink
          to='/'
          className='nav-item nav-link'
          activeClassName='active-nav'
        >
          About Me
        </NavLink>
        <NavLink
          to='/'
          className='nav-item nav-link'
          activeClassName='active-nav'
        >
          Projects
        </NavLink>
        <NavLink
          to='/'
          className='nav-item nav-link'
          activeClassName='active-nav'
        >
          Contact Me
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Header;
