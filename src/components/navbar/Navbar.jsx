import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
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
              <Link className='nav-link active' aria-current='page' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/shop'>
                Shop
              </Link>
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
