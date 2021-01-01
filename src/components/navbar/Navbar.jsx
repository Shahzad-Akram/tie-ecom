import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <nav
      className={
        navbar
          ? `navbar navbar-expand-lg navbar-light fixed-top bg-light shadow`
          : 'navbar navbar-expand-lg navbar-light bg-transparent fixed-top'
      }
    >
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Logo
        </Link>
        <button className='navbar-toggler' type='button'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/shop'>
                Shop
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink className='nav-link' to='/checkout'>
                Checkout
              </NavLink>
            </li>
          </ul>
          <form className='d-flex'>
            {/* <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            /> */}
            <button className='btn btn-success btn-secondary'>Join</button>
          </form>
        </div>
      </div>
    </nav>
  );
};
