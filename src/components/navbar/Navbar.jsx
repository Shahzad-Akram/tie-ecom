import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CustomModal } from '../custom/CustomModal';

export const Navbar = () => {
  const [sign, setSign] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [modal, setModal] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      {modal ? (
        <CustomModal>
          {sign ? (
            <>
              <header className='d-flex justify-content-between align-items-center mb-3'>
                <h6 className='mb-0 fw-bold text-dark'>Welcome Back</h6>
                <button
                  type='button'
                  className='btn p-0'
                  onClick={() => setModal(false)}
                >
                  <h3 className='mb-0'>&times;</h3>
                </button>
              </header>
              <div className='text-center'>
                <h6 className='mb-0 fw-bold small text-black-50 mb-4'>
                  Login with your email & password
                </h6>
                <form>
                  <input
                    className='form-control input-group-text text-start mb-3'
                    type='text'
                    placeholder='Name'
                  />
                  <input
                    className='form-control input-group-text text-start mb-3'
                    type='email'
                    placeholder='Demo@gmail.com'
                  />
                  <input
                    className='form-control input-group-text text-start mb-3'
                    type='password'
                    placeholder='Password'
                  />
                  <button type='submit' className='btn btn-dark w-100 mb-3'>
                    Continue
                  </button>
                  <div className='small text-black-50 d-flex align-items-center justify-content-center'>
                    <span>Don't have any account?</span>
                    <Link
                      className='ms-1 text-decoration-none small active'
                      onClick={() => setSign(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <>
              <header className='d-flex justify-content-between align-items-center mb-3'>
                <h6 className='mb-0 fw-bold text-dark'>Sign Up</h6>
                <button
                  type='button'
                  className='btn p-0'
                  onClick={() => setModal(false)}
                >
                  <h3 className='mb-0'>&times;</h3>
                </button>
              </header>
              <div className='text-center'>
                <h6 className='mb-0 fw-bold small text-black-50 mb-4'>
                  By signing up, you agree to Tie-ecommerce
                </h6>
                <form>
                  <input
                    className='form-control input-group-text text-start mb-3'
                    type='text'
                    placeholder='Name'
                  />
                  <input
                    className='form-control input-group-text text-start mb-3'
                    type='email'
                    placeholder='demo@gmail.com'
                  />
                  <input
                    className='form-control input-group-text text-start mb-3'
                    type='password'
                    placeholder='Password'
                  />

                  <button type='submit' className='btn btn-dark w-100 mb-3'>
                    Continue
                  </button>
                  <div className='small text-black-50 d-flex align-items-center justify-content-center'>
                    <span>Already have an account?</span>
                    <Link
                      className='ms-1 text-decoration-none small active'
                      onClick={() => setSign(true)}
                    >
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </>
          )}
        </CustomModal>
      ) : null}
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
              <li className='nav-item'>
                <NavLink className='nav-link' to='/yourOrder'>
                  Order
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
              <button
                type='button'
                onClick={() => setModal(true)}
                className='btn btn-dark'
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
