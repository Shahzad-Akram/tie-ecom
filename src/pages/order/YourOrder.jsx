import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Stepper from 'react-stepper-horizontal';
import { TabOne } from '../../components/tabs/TabOne';
import OrderDetails from './OrderDetails';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

export const YourOrder = () => {
  const [details, setOrderDetails] = useState(null);
  const { user } = useSelector((state) => state.user);

  const getOrders = () => {
    return axios
      .get(`https://tie-ecommerce.herokuapp.com/order/${user._id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  };

  const { data, isLoading } = useQuery('orders', getOrders);

  useEffect(() => {
    if (isLoading !== true && data.length !== 0) {
      setOrderDetails(data[0]);
    }
  }, [isLoading]);

  console.log(data);

  const LoadingArr = [{}, {}, {}];
  return (
    <div className='container-fluid'>
      <section className='pt-5 d-flex align-items-center my-5'>
        {isLoading ? (
          <>
            {LoadingArr.map((value) => (
              <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 mx-0 overflow-hidden justify-content-around'>
                {LoadingArr.map((value) => (
                  <div className='loader-skeleton'></div>
                ))}
              </div>
            ))}
          </>
        ) : (
          <div className='row w-100 mx-0 px-lg-5'>
            {/* <div className="col col-lg-2 mb-4 mb-lg-0">
            <div className="shadow-sm border p-4 rounded-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-3">
                  <NavLink to="/yourOrder" className="text-decoration-none">
                    Your Order
                  </NavLink>
                </li>
              </ul>
            </div>
          </div> */}
            <div className='col-12 col-xl-4 col-xxl-3 my-4 my-xl-0'>
              <div
                className='shadow-sm border p-4 rounded-3 scroll-box'
                style={{ height: 600 }}
              >
                <h5 className='fw-bold mb-3'>My Order</h5>
                {/* Tab Start */}
                {data.map((v) => (
                  <TabOne data={v} onClick={() => setOrderDetails(v)} />
                ))}
                {/* Tab End */}
              </div>
            </div>
            <div className='col'>
              <div className='shadow-sm border rounded-3 h-100'>
                <header className='border-bottom p-3'>
                  <h5 className='fw-bold mb-0'>Order Details</h5>
                </header>

                {/* Panel Start */}
                {details === null ? (
                  <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 mx-0 overflow-hidden justify-content-around'>
                    {LoadingArr.map((value) => (
                      <div className='loader-skeleton'></div>
                    ))}
                  </div>
                ) : (
                  <OrderDetails order={details} />
                )}

                {/* Panel End */}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
