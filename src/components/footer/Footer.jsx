import React from 'react';

export const Footer = () => {
  return (
    <footer className='py-5 bg-primary text-white shadow-sm border-top'>
      <div className='container py-2'>
        <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4'>
          <div>
            <div class='d-flex justify-content-start flex-column small mb-2 mb-md-0'>
              <div className='text-center'>
                <img
                  height={60}
                  width={150}
                  src={require('../../assets/logos/logo-2.PNG').default}
                  alt='logo'
                  className='object-fit-cover rounded-3'
                />
              </div>

              <form className='w-100'>
                <input
                  className='form-control input-group-text text-start rounded-0 rounded-top'
                  type='email'
                  placeholder='Your e-mail address...'
                />
                <button
                  type='submit'
                  className='btn bg-dark p-2 rounded-0 rounded-bottom mb-3 text-decoration-none p-0 w-100'
                >
                  <span className='text-white'>
                    subscribe &amp; get $15 coupon
                  </span>
                </button>
              </form>
            </div>
          </div>
          <div className='d-flex flex-column align-items-md-center'>
            <div class='d-flex justify-content-start flex-column small mb-2 mb-md-0'>
              <a
                className='text-decoration-none p-0 me-3 me-md-0 text-start'
                href='/'
              >
                <small>About</small>
              </a>
              <a
                className='text-decoration-none p-0 me-3 me-md-0 text-start'
                href='/'
              >
                <small> Careers</small>
              </a>
              <a
                className='text-decoration-none p-0 me-3 me-md-0 text-start'
                href='/'
              >
                <small> Press</small>
              </a>
              <a
                className='text-decoration-none p-0 me-3 me-md-0 text-start'
                href='/'
              >
                <small> Help</small>
              </a>
              <a
                className='text-decoration-none p-0 me-3 me-md-0 text-start'
                href='/'
              >
                <small> Contact Us</small>
              </a>
            </div>
          </div>

          <div className='d-flex flex-column align-items-md-center'>
            <div class='d-flex justify-content-start flex-column small mb-2 mb-md-0'>
              <a
                className='text-decoration-none p-0 me-3 me-md-0 text-start'
                href='/'
              >
                <small> About</small>
              </a>
              <a
                className='text-decoration-none p-0 me-3 me-md-0 text-start'
                href='/'
              >
                <small> Careers</small>
              </a>
              <a
                className='text-decoration-none p-0 me-3 me-md-0 text-start'
                href='/'
              >
                <small> Press</small>
              </a>
              <a
                className='text-decoration-none p-0 me-3 me-md-0 text-start'
                href='/'
              >
                <small> Help</small>
              </a>
              <a
                className='text-decoration-none p-0 me-3 me-md-0 text-start'
                href='/'
              >
                <small> Contact Us</small>
              </a>
            </div>
          </div>

          <div>
            <div class='d-flex justify-content-start flex-column small mb-2 mb-md-0'>
              <a
                className='text-decoration-none p-0 me-3 me-md-0 text-start'
                href='tel:1234567890'
              >
                <small> (+1) 234 5678 910</small>
              </a>

              <div className='text-decoration-none p-0 me-3 me-md-0 text-start text-white-50'>
                <small> contact@example.com</small>
              </div>

              <div className='text-decoration-none p-0 me-3 me-md-0 text-start text-white-50'>
                <small> 71 Pilgrim Avenue, St.Chevy</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
