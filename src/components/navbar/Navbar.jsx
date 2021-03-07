import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CustomModal } from '../custom/CustomModal';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, isLoggedIn, logOut, showLoginModal } from '../../actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Navbar = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [sign, setSign] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { show } = useSelector((state) => state.signIn);
  const dispatch = useDispatch();
  const [navbarToggler, setNavbarToggler] = useState(false);
  const [modal, setModal] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const showModal = (show) => {
    showLoginModal(dispatch, show);
  };

  const onSubmit = (data) => {
    axios
      .post('https://tie-ecommerce.herokuapp.com/auth/signup', data)
      .then((res) => {
        toast.success('Login Successfull!', 1000);
        showModal(false);
      })
      .catch((err) => {
        toast.error('Something Went Wrong!', 1000);
        showModal(false);
      });
  };

  const login = (data) => {
    setLoading(true);
    console.log(data);
    axios
      .post('https://tie-ecommerce.herokuapp.com/auth/signin', data)
      .then((res) => {
        loginUser(dispatch, res.data);
        setLoading(false);
        toast.success('Login Successfull!', 1000);
        showModal(false);
      })
      .catch((err) => {
        toast.error(err.response.data.Message, 1000);
        console.log(err.response.data);
        setLoading(false);
        showModal(false);
      });
  };

  useEffect(() => {
    if (isAuthenticated === false) {
      isLoggedIn(dispatch);
    }
  }, [isAuthenticated, dispatch]);

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      {show ? (
        <CustomModal>
          {sign ? (
            <>
              <header className='d-flex justify-content-between align-items-center mb-3'>
                <h6 className='mb-0 fw-bold text-dark'>Welcome Back</h6>
                <button
                  type='button'
                  className='btn p-0'
                  onClick={() => showModal(false)}
                >
                  <h3 className='mb-0'>&times;</h3>
                </button>
              </header>
              <div className='text-center'>
                <h6 className='mb-0 fw-bold small text-black-50 mb-4'>
                  Login with your email & password
                </h6>
                <form onSubmit={handleSubmit(login)}>
                  <input
                    className='form-control input-group-text text-start mb-3'
                    type='email'
                    name='email'
                    placeholder='Demo@gmail.com'
                    ref={register({ required: true })}
                  />
                  <input
                    className='form-control input-group-text text-start mb-3'
                    type='password'
                    name='password'
                    placeholder='Password'
                    ref={register({ required: true })}
                  />
                  {loading ? (
                    <div class='spinner-border' role='status'>
                      <span class='sr-only'>Loading...</span>
                    </div>
                  ) : (
                    <button type='submit' className='btn btn-dark  w-100 mb-3 '>
                      Continue
                    </button>
                  )}

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
                  onClick={() => showModal(false)}
                >
                  <h3 className='mb-0'>&times;</h3>
                </button>
              </header>
              <div className='text-center'>
                <h6 className='mb-0 fw-bold small text-black-50 mb-4'>
                  By signing up, you agree to Tie-ecommerce
                </h6>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className='form-control input-group-text text-start mb-3'
                    type='text'
                    placeholder='First Name'
                    name='firstname'
                    ref={register({ required: true })}
                  />
                  <input
                    className='form-control input-group-text text-start mb-3'
                    type='text'
                    placeholder='Last Name'
                    name='lastname'
                    ref={register({ required: true })}
                  />
                  <input
                    className='form-control input-group-text text-start mb-3'
                    type='email'
                    placeholder='demo@gmail.com'
                    name='email'
                    ref={register({ required: true })}
                  />
                  <input
                    className='form-control input-group-text text-start mb-3'
                    type='password'
                    name='password'
                    placeholder='Password'
                    ref={register({ required: true })}
                  />
                  {loading ? (
                    <div class='spinner-border' role='status'>
                      <span class='sr-only'>Loading...</span>
                    </div>
                  ) : (
                    <button type='submit' className='btn btn-dark w-100 mb-3'>
                      Continue
                    </button>
                  )}
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
            ? `navbar navbar-expand-lg navbar-light fixed-top bg-primary shadow`
            : 'navbar navbar-expand-lg navbar-light bg-primary fixed-top'
        }
      >
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            <img
              height='30'
              width='60'
              src={require('../../assets/logos/logo-1.PNG').default}
              style={{ objectFit: 'cover' }}
              alt='Logo'
            />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            onClick={() => setNavbarToggler(!navbarToggler)}
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className={
              navbarToggler
                ? 'navbar-collapse py-3 py-lg-0'
                : 'collapse navbar-collapse'
            }
          >
            <div
              className='d-flex d-lg-none h-100 w-100 position-fixed'
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            ></div>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 text-center position-relative'>
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
              <li className='nav-item'>
                <NavLink className='nav-link' to='/contact'>
                  ContactUs
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/PrivacyPolicy'>
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
            <form className='d-flex justify-content-center position-relative'>
              {/* <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            /> */}
              {isAuthenticated ? (
                <button
                  onClick={() => logOut(dispatch)}
                  type='button'
                  className='btn btn-dark'
                >
                  Logout
                </button>
              ) : (
                <button
                  type='button'
                  onClick={() => showModal(true)}
                  className='btn btn-dark'
                >
                  Join
                </button>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
