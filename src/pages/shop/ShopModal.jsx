import React, { useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export const ShopModal = ({ onHide }) => {
  const [counterButton, setCounterButton] = useState(true);
  const [showCounter, setShowCounter] = useState(false);
  const [count, setCount] = useState(0);

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

  const slider = [
    {
      image:
        'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
      name: 'Roadster Women Solid Top',
      discount: '20%',
    },
    {
      image:
        'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
      name: 'Roadster Women Solid Top',
    },
    {
      image:
        'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
      name: 'Roadster Women Solid Top',
      discount: '20%',
    },
    {
      image:
        'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
      name: 'Roadster Women Solid Top',
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className='bg-white p-4 col col-md-10 col-xl-8 mx-auto shadow modal-card-container scroll-box'>
      {checkoutItem.map((value) => (
        <>
          <div className='row'>
            <div className='col-12 d-block d-md-none my-2'>
              <span
                className='d-flex w-100 bg-light my-auto'
                style={{ height: 3 }}
              ></span>
            </div>
            <div className='col-12 col-md-5'>
              <Slider {...settings}>
                {slider.map((value) => (
                  <section>
                    <div className='position-relative'>
                      <img
                        height={400}
                        style={{ objectFit: 'contain' }}
                        width='100%'
                        src={value.image}
                        alt={value.name}
                      />
                      <span className='badge bg-warning rounded-pill position-absolute top-0 end-0 mt-3'>
                        {value.discount}
                      </span>
                    </div>
                  </section>
                ))}
              </Slider>
            </div>

            <div className='col-1 d-none d-md-block'>
              <span
                className='d-flex h-100 bg-light mx-auto'
                style={{ width: 2 }}
              ></span>
            </div>
            <main className='col order-first order-md-last'>
              <header className='d-flex justify-content-between align-items-baseline mb-3'>
                <div>
                  <h5 className='mb-2 fw-bold text-dark'>{value.name}</h5>
                  <div className='text-black-50 small mb-2'>{value.stock}</div>
                  <div className='mb-2'>
                    Mauve printed knitted fit and flare dress, has a round neck,
                    three-quarter sleeves, concealed zip closure,, flared hem
                  </div>
                  <div className='d-flex mt-4'>
                    <Link className='badge bg-light text-decoration-none me-2 mb-2'>
                      Woman Dress
                    </Link>
                    <Link className='badge bg-light text-decoration-none me-2 mb-2'>
                      Single Color
                    </Link>
                  </div>
                </div>
                <button type='button' className='btn p-0' onClick={onHide}>
                  <h3 className='mb-0'>&times;</h3>
                </button>
              </header>
              <section className='d-flex align-items-baseline justify-content-between mt-auto'>
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
              </section>
            </main>
          </div>
        </>
      ))}
    </section>
  );
};
