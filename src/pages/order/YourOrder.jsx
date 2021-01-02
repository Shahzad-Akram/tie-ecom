import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Stepper from 'react-stepper-horizontal';
import { TabOne } from '../../components/tabs/TabOne';

export const YourOrder = () => {
  const [showItemOne, setShowItemOne] = useState(true);
  const [showItemTwo, setShowItemTwo] = useState(false);
  const [showItemThree, setShowItemThree] = useState(false);

  return (
    <section className='pt-5 d-flex align-items-center my-5'>
      <div className='row w-100 mx-0 px-lg-5'>
        <div className='col col-lg-2 mb-4 mb-lg-0'>
          <div className='shadow-sm border p-4 rounded-3'>
            <ul className='nav flex-column'>
              <li className='nav-item mb-3'>
                <NavLink to='/yourOrder' className='text-decoration-none'>
                  Your Order
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/sign-in' className='text-decoration-none'>
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-12 col-xl-4 col-xxl-3 my-4 my-xl-0'>
          <div
            className='shadow-sm border p-4 rounded-3 overflow-auto'
            style={{ height: 600 }}
          >
            <h5 className='fw-bold mb-3'>My Order</h5>
            {/* Tab Start */}
            <TabOne
              onClick={() => {
                setShowItemOne(true);
                setShowItemTwo(false);
                setShowItemThree(false);
              }}
            />
            <TabOne
              onClick={() => {
                setShowItemOne(false);
                setShowItemTwo(true);
                setShowItemThree(false);
              }}
            />
            <TabOne
              onClick={() => {
                setShowItemOne(false);
                setShowItemTwo(false);
                setShowItemThree(true);
              }}
            />
            {/* Tab End */}
          </div>
        </div>
        <div className='col'>
          <div className='shadow-sm border rounded-3 h-100'>
            <header className='border-bottom p-3'>
              <h5 className='fw-bold mb-0'>Order Details</h5>
            </header>

            {showItemOne ? (
              <>
                {/* Panel Start */}
                <section>
                  <div className='row border-bottom small mx-0'>
                    <div className='col py-3 border-end'>
                      <div className='fw-bold mb-2'>Delivery Address</div>
                      <div className='text-black-50 mb-2'>
                        <span>1756 Roy Alley, GIRARDVILLE, Pennsylvania</span>
                      </div>
                    </div>
                    <div className='col-12 col-md-4 col-xxl-3 py-3'>
                      <div className='d-flex justify-content-between mb-2 small'>
                        <span className='text-capitalize'>Sub Total</span>
                        <span className='text-capitalize'>$200</span>
                      </div>

                      <div className='d-flex justify-content-between mb-2 small'>
                        <span className='text-capitalize'>Discount</span>
                        <span className='text-capitalize'>$0</span>
                      </div>

                      <div className='d-flex justify-content-between mb-2 small'>
                        <span className='text-capitalize'>Delivery Fee</span>
                        <span className='text-capitalize'>$49.7</span>
                      </div>

                      <div className='d-flex justify-content-between mb-2 small fw-bold'>
                        <span className='text-capitalize'>Total</span>
                        <span className='text-capitalize'>$249.7</span>
                      </div>
                    </div>
                  </div>

                  <div className='mt-4 px-3 stepper-container'>
                    <Stepper
                      completeColor='#000'
                      completeTitleColor='#000'
                      activeColor='#999'
                      activeTitleColor='#999'
                      titleFontSize={14}
                      steps={[
                        { title: 'Order Received' },
                        { title: 'Order On The Way' },
                        { title: 'Order Delivered' },
                      ]}
                      activeStep={1}
                    />
                  </div>

                  <div className='p-3'>
                    <div className='overflow-auto' style={{ height: 250 }}>
                      <table className='table small border'>
                        <thead>
                          <tr className='bg-light'>
                            <th
                              style={{ borderColor: '#ddd' }}
                              scope='col'
                            ></th>
                            <th style={{ borderColor: '#ddd' }} scope='col'>
                              Items
                            </th>
                            <th
                              className='text-center'
                              style={{ borderColor: '#ddd' }}
                              scope='col'
                            >
                              Quantity
                            </th>
                            <th
                              className='text-center'
                              style={{ borderColor: '#ddd' }}
                              scope='col'
                            >
                              Price
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ height: 90, width: 90 }}>
                              <img
                                height='100%'
                                width='100%'
                                src='http://s3.amazonaws.com/redqteam.com/headless-image/banana.jpg'
                                alt=''
                              />
                            </td>
                            <td>
                              <div>
                                <div className='mb-1 fw-bold'>Banana</div>
                                <div className='mb-1 text-black-50'>2lb</div>
                                <div className='mb- text-success'>$50</div>
                              </div>
                            </td>
                            <td className='text-center'>2</td>
                            <td className='text-center'>$100</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
                {/* Panel End */}
              </>
            ) : (
              true
            )}
            {showItemTwo ? (
              <>
                {/* Panel Start */}
                <section>
                  <div className='row border-bottom small mx-0'>
                    <div className='col py-3 border-end'>
                      <div className='fw-bold mb-2'>Delivery Address</div>
                      <div className='text-black-50 mb-2'>
                        <span>1756 Roy Alley, GIRARDVILLE, Pennsylvania</span>
                      </div>
                    </div>
                    <div className='col-12 col-md-4 col-xxl-3 py-3'>
                      <div className='d-flex justify-content-between mb-2 small'>
                        <span className='text-capitalize'>Sub Total</span>
                        <span className='text-capitalize'>$200</span>
                      </div>

                      <div className='d-flex justify-content-between mb-2 small'>
                        <span className='text-capitalize'>Discount</span>
                        <span className='text-capitalize'>$0</span>
                      </div>

                      <div className='d-flex justify-content-between mb-2 small'>
                        <span className='text-capitalize'>Delivery Fee</span>
                        <span className='text-capitalize'>$49.7</span>
                      </div>

                      <div className='d-flex justify-content-between mb-2 small fw-bold'>
                        <span className='text-capitalize'>Total</span>
                        <span className='text-capitalize'>$249.7</span>
                      </div>
                    </div>
                  </div>

                  <div className='mt-4 px-3 stepper-container'>
                    <Stepper
                      completeColor='#000'
                      completeTitleColor='#000'
                      activeColor='#999'
                      activeTitleColor='#999'
                      titleFontSize={14}
                      steps={[
                        { title: 'Order Received' },
                        { title: 'Order On The Way' },
                        { title: 'Order Delivered' },
                      ]}
                      activeStep={2}
                    />
                  </div>

                  <div className='p-3'>
                    <div className='overflow-auto' style={{ height: 250 }}>
                      <table className='table small border'>
                        <thead>
                          <tr className='bg-light'>
                            <th
                              style={{ borderColor: '#ddd' }}
                              scope='col'
                            ></th>
                            <th style={{ borderColor: '#ddd' }} scope='col'>
                              Items
                            </th>
                            <th
                              className='text-center'
                              style={{ borderColor: '#ddd' }}
                              scope='col'
                            >
                              Quantity
                            </th>
                            <th
                              className='text-center'
                              style={{ borderColor: '#ddd' }}
                              scope='col'
                            >
                              Price
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ height: 90, width: 90 }}>
                              <img
                                height='100%'
                                width='100%'
                                src='http://s3.amazonaws.com/redqteam.com/headless-image/banana.jpg'
                                alt=''
                              />
                            </td>
                            <td>
                              <div>
                                <div className='mb-1 fw-bold'>Banana</div>
                                <div className='mb-1 text-black-50'>2lb</div>
                                <div className='mb- text-success'>$50</div>
                              </div>
                            </td>
                            <td className='text-center'>2</td>
                            <td className='text-center'>$100</td>
                          </tr>
                          <tr>
                            <td style={{ height: 90, width: 90 }}>
                              <img
                                height='100%'
                                width='100%'
                                src='http://s3.amazonaws.com/redqteam.com/headless-image/banana.jpg'
                                alt=''
                              />
                            </td>
                            <td>
                              <div>
                                <div className='mb-1 fw-bold'>Banana</div>
                                <div className='mb-1 text-black-50'>2lb</div>
                                <div className='mb- text-success'>$50</div>
                              </div>
                            </td>
                            <td className='text-center'>2</td>
                            <td className='text-center'>$100</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
                {/* Panel End */}
              </>
            ) : null}
            {showItemThree ? (
              <>
                {/* Panel Start */}
                <section>
                  <div className='row border-bottom small mx-0'>
                    <div className='col py-3 border-end'>
                      <div className='fw-bold mb-2'>Delivery Address</div>
                      <div className='text-black-50 mb-2'>
                        <span>1856 Roy Alley, GIRARDVILLE, Pennsylvania</span>
                      </div>
                    </div>
                    <div className='col-12 col-md-4 col-xxl-3 py-3'>
                      <div className='d-flex justify-content-between mb-2 small'>
                        <span className='text-capitalize'>Sub Total</span>
                        <span className='text-capitalize'>$200</span>
                      </div>

                      <div className='d-flex justify-content-between mb-2 small'>
                        <span className='text-capitalize'>Discount</span>
                        <span className='text-capitalize'>$0</span>
                      </div>

                      <div className='d-flex justify-content-between mb-2 small'>
                        <span className='text-capitalize'>Delivery Fee</span>
                        <span className='text-capitalize'>$49.7</span>
                      </div>

                      <div className='d-flex justify-content-between mb-2 small fw-bold'>
                        <span className='text-capitalize'>Total</span>
                        <span className='text-capitalize'>$249.7</span>
                      </div>
                    </div>
                  </div>

                  <div className='mt-4 px-3 stepper-container'>
                    <Stepper
                      completeColor='#000'
                      completeTitleColor='#000'
                      activeColor='#999'
                      activeTitleColor='#999'
                      titleFontSize={14}
                      steps={[
                        { title: 'Order Received' },
                        { title: 'Order On The Way' },
                        { title: 'Order Delivered' },
                      ]}
                      activeStep={3}
                    />
                  </div>

                  <div className='p-3'>
                    <div className='overflow-auto' style={{ height: 250 }}>
                      <table className='table small border'>
                        <thead>
                          <tr className='bg-light'>
                            <th
                              style={{ borderColor: '#ddd' }}
                              scope='col'
                            ></th>
                            <th style={{ borderColor: '#ddd' }} scope='col'>
                              Items
                            </th>
                            <th
                              className='text-center'
                              style={{ borderColor: '#ddd' }}
                              scope='col'
                            >
                              Quantity
                            </th>
                            <th
                              className='text-center'
                              style={{ borderColor: '#ddd' }}
                              scope='col'
                            >
                              Price
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ height: 90, width: 90 }}>
                              <img
                                height='100%'
                                width='100%'
                                src='http://s3.amazonaws.com/redqteam.com/headless-image/banana.jpg'
                                alt=''
                              />
                            </td>
                            <td>
                              <div>
                                <div className='mb-1 fw-bold'>Banana</div>
                                <div className='mb-1 text-black-50'>2lb</div>
                                <div className='mb- text-success'>$50</div>
                              </div>
                            </td>
                            <td className='text-center'>2</td>
                            <td className='text-center'>$100</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
                {/* Panel End */}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
