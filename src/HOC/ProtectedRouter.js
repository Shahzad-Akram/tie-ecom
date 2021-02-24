import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';

import { useEffect } from 'react';
import { isLoggedIn, showLoginModal } from '../actions';
// import Navigationbar from '../components/Navigation/Navbar/Navbar';

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const history = useHistory();

  //   const isOrderPage = history.location.pathname !== '/order';

  //   const isCheckout = history.location.pathname === '/cart-checkout';

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      isLoggedIn(dispatch);
      showLoginModal(dispatch, true);
    }
  }, [isAuthenticated, dispatch, isLoading]);

  if (isLoading) return 'i am loading';

  return (
    <>
      {isAuthenticated && !isLoading ? (
        <>
          <div className='overflow-y-auto h-100vh'>{children}</div>
        </>
      ) : (
        <>
          <Redirect to='/' />
        </>
      )}
    </>
  );
};
export default ProtectedRoutes;
