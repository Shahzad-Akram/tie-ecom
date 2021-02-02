import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Images
import EmptyBox from '../../assets/images-svg/empty.svg';
import { ShopSidebar } from '../../components/checkout/ShopSidebar';
import { CustomModal } from '../../components/custom/CustomModal';

const cardArr = [
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    price: '$12',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    price: '$12',
    discount: '20%',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },

  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },

  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },
];

const checkoutItem = [
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },
];

export const ShopPage = () => {
  const [modal, setModal] = useState(false);
  const [checkoutBar, setCheckoutBar] = useState(false);
  const [counterButton, setCounterButton] = useState(true);
  const [showCounter, setShowCounter] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <section>
      {/* Checkout Bar Start */}
      <button
        type='button'
        className='checkout-btn-container position-fixed bottom-50 end-0 btn btn-dark p-2 rounded-3'
        style={{ zIndex: 555 }}
        onClick={() => setCheckoutBar(!checkoutBar)}
      >
        <div className='small mb-2'>
          <FontAwesomeIcon icon={faCartPlus} />
          <span className='ms-2 small fw-bold'>1 item</span>
        </div>
        <div className='bg-white shadow-sm p-1 rounded-3 small text-black-50'>
          $1.50
        </div>
      </button>

      <div
        className={
          checkoutBar ? `checkout-bar` : `checkout-bar checkout-bar-hide`
        }
      >
        <header className='d-flex align-items-baseline justify-content-between pt-2 pb-3 mb-3 border-bottom px-3'>
          <div>1 item</div>
          <Link
            className='text-decoration-none'
            onClick={() => setCheckoutBar(false)}
          >
            <div className='h4 mb-0'>&times;</div>
          </Link>
        </header>
        <main className='px-3'>
          {/* == */}
          <div className='mb-3 d-flex flex-column align-items-center'>
            <span className='d-flex' style={{ height: 150, width: 150 }}>
              <img src={EmptyBox} height='100%' width='100%' alt='Empty' />
            </span>
            <small className='text-black-50 mt-3'>No products found</small>
          </div>
          {/* End */}
          {/* Item */}
          {checkoutItem.map((value) => (
            <div className='mb-3 d-flex align-items-center justify-content-between small'>
              <div className='border border-dark rounded-pill d-flex flex-column justify-content-around align-items-center me-2 px-2'>
                <button
                  className='btn p-0'
                  onClick={() => setCount((prevCount) => prevCount + 1)}
                  style={{ boxShadow: 'unset' }}
                >
                  <span className='h6 mb-0'>+</span>
                </button>
                <span className='mt-1 mx-1 small'>{count}</span>
                <button
                  className='btn p-0'
                  style={{ boxShadow: 'unset' }}
                  onClick={() => {
                    setCount((prevCount) => prevCount - 1);
                  }}
                >
                  <span className='h4 mb-0'>-</span>
                </button>
              </div>

              <span className='me-2 text-black-50 small'>
                <img
                  height={50}
                  width={50}
                  src={value.image}
                  alt={value.name}
                />
              </span>
              <span className='me-2 small'>
                <div className='text-capitalize'>{value.name}</div>
                <div className='fw-bold'>{value.price}</div>
                <div className='text-black-50'>{value.stock}</div>
              </span>
              <span>{value.price}</span>
            </div>
          ))}
          {/* Item-End */}
        </main>
        <footer className='mt-auto px-3 py-3'>
          <div className='mb-3'>
            <h6>Do you have a voucher?</h6>
            <div className='row mx-0'>
              <div className='col-9 px-0'>
                <input className='form-control' type='text' />
              </div>
              <div className='col-3'>
                <button className='btn btn-dark'>Apply</button>
              </div>
            </div>
          </div>
          <div>
            <button type='button' className='btn btn-dark w-100'>
              Checkout
            </button>
          </div>
        </footer>
      </div>

      {/* Checkout Bar End */}
      <div className='py-5 my-5 text-center'>
        <h1>
          <i>Shop</i>
        </h1>
        <h4 className='fw-normal col-xl-7 mx-auto'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          odio eius debitis laudantium praesentium dolores temporibus nostrum
          ipsa quibusdam sit?
        </h4>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-xxl-2 bg-white shadow border-right'>
          <ShopSidebar />
        </div>
        <div className='col bg-light p-4'>
          <div className='row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 row-cols-xxl-6 justify-content-center'>
            {cardArr.map((cardArr) => (
              <Link
                className='col text-decoration-none small bg-white pb-3 rounded-3 m-3 d-flex flex-column'
                onClick={() => setModal(true)}
              >
                <div className='position-relative'>
                  <img
                    height={240}
                    width='100%'
                    src={cardArr.image}
                    alt={cardArr.name}
                  />
                  <span className='badge bg-warning rounded-pill position-absolute end-0 mt-3'>
                    {cardArr.discount}
                  </span>
                </div>
                <div className='fw-bold'>{cardArr.name}</div>
                <div className='mb-3'>{cardArr.stock}</div>
                <i className='text-decoration-line-through text-danger'>
                  {cardArr.minusPrice}
                </i>
                <div className='d-flex align-items-baseline justify-content-between mt-auto'>
                  <span className='fw-bold'>{cardArr.price}</span>
                  {/* -- */}
                  <div>
                    {counterButton ? (
                      <button
                        className='btn btn-sm btn-outline-dark rounded-pill m-2'
                        onClick={() => {
                          setCounterButton(false);
                          setShowCounter(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faCartPlus} />
                        <span className='ms-2 small fw-bold'>Cart</span>
                      </button>
                    ) : (
                      true
                    )}
                    {showCounter ? (
                      <div className='bg-dark rounded-pill d-flex justify-content-around align-items-center'>
                        <button
                          className='btn py-1 text-white'
                          style={{ boxShadow: 'unset' }}
                          onClick={() => {
                            setCount((prevCount) => prevCount - 1);
                          }}
                        >
                          -
                        </button>
                        <span className='mx-1 small text-white'>{count}</span>
                        <button
                          className='btn py-1 text-white'
                          onClick={() => setCount((prevCount) => prevCount + 1)}
                          style={{ boxShadow: 'unset' }}
                        >
                          +
                        </button>
                      </div>
                    ) : null}
                  </div>
                  {/* -- */}
                </div>
              </Link>
            ))}
          </div>
          <div className='text-center pt-3'>
            <button className='btn btn-outline-secondary'>Load More</button>
          </div>
        </div>
      </div>
      {modal ? (
        <CustomModal>
          {checkoutItem.map((value) => (
            <>
              <header className='d-flex justify-content-between align-items-baseline mb-3'>
                <div>
                  <h6 className='mb-0 fw-bold text-dark'>{value.name}</h6>
                  <div>{value.stock}</div>
                </div>
                <button
                  type='button'
                  className='btn p-0'
                  onClick={() => setModal(false)}
                >
                  <h3 className='mb-0'>&times;</h3>
                </button>
              </header>
              <div className='border-top my-2'></div>
              <div>
                <div className='position-relative'>
                  <img
                    style={{ objectFit: 'contain' }}
                    height={240}
                    width='100%'
                    src={value.image}
                    alt={value.name}
                  />
                  <span className='badge bg-warning rounded-pill position-absolute end-0 mt-3'>
                    {value.discount}
                  </span>
                </div>
                <div className='border-top my-2'></div>

                <div className='d-flex align-items-baseline justify-content-between mt-auto'>
                  <div className='d-flex align-items-center'>
                    <span className='fw-bold me-2'>{value.price}</span>
                    <i className='text-decoration-line-through text-danger small'>
                      {value.minusPrice}
                    </i>
                  </div>
                  {/* -- */}
                  <div>
                    {counterButton ? (
                      <button
                        className='btn btn-sm btn-outline-dark rounded-pill m-2'
                        onClick={() => {
                          setCounterButton(false);
                          setShowCounter(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faCartPlus} />
                        <span className='ms-2 small fw-bold'>Cart</span>
                      </button>
                    ) : (
                      true
                    )}
                    {showCounter ? (
                      <div className='bg-dark rounded-pill d-flex justify-content-around align-items-center'>
                        <button
                          className='btn py-1 text-white'
                          style={{ boxShadow: 'unset' }}
                          onClick={() => {
                            setCount((prevCount) => prevCount - 1);
                          }}
                        >
                          -
                        </button>
                        <span className='mx-1 small text-white'>{count}</span>
                        <button
                          className='btn py-1 text-white'
                          onClick={() => setCount((prevCount) => prevCount + 1)}
                          style={{ boxShadow: 'unset' }}
                        >
                          +
                        </button>
                      </div>
                    ) : null}
                  </div>
                  {/* -- */}
                </div>
              </div>
            </>
          ))}
        </CustomModal>
      ) : null}
    </section>
  );
};
