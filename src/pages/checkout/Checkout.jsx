import React, { useState } from 'react';

import { useCart } from 'react-use-cart';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Compoent
import { DeliveryAddressComponent } from '../../components/checkout/DeliveryAddressComponent';
import { DeliveryScheduleComponent } from '../../components/checkout/DeliveryScheduleComponent';
import { ContactNumberComponent } from '../../components/checkout/ContactNumberComponent';
import { PaymentOptionComponent } from '../../components/checkout/PaymentOptionComponent';

// Images
import EmptyBox from '../../assets/images-svg/empty.svg';

export const Checkout = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [moveOrderBox, setMoveOrderBox] = useState(false);
  const [address, setAddress] = useState(null);
  const [contact, setContact] = useState(null);
  const [card, setCard] = useState(null);

  const {
    isEmpty,
    cartTotal,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setMoveOrderBox(true);
    } else {
      setMoveOrderBox(false);
    }
  };

  const placeOrder = () => {
    if (isEmpty) {
      toast.warn('Cart is Empty!', 1000);
    } else if (address === null && contact === null && card === null) {
      toast.warn('Please complete all the details!', 1000);
    } else {
      const data = {
        addressDescription: address.addressDescription,
        city: address.city,
        country: address.country,
        district: address.district,
        postalCode: address.postalCode,
        email: contact.email,
        phone: contact.phone,
        stripeToken: card.id,
        orderItem: items,
        subTotal: cartTotal,
        total: cartTotal,
        orderBy: user._id,
      };
      console.log(data);
      setLoading(true);
      axios
        .post('https://tie-ecommerce.herokuapp.com/order', data)
        .then((res) => {
          setLoading(false);
          toast.success('Order Placed Successfully!', 1000);
          emptyCart();
        })
        .catch((err) => {
          setLoading(false);
          toast.error('Something Went Wrong!', 1000);
        });
    }
  };

  window.addEventListener('scroll', changeBackground);
  console.log(cartTotal);
  return (
    <div className='container-fluid'>
      <section className='container'>
        <div className='row justify-content-center py-5 my-5'>
          <div className='col col-lg-6 px-0 px-md-3'>
            <DeliveryAddressComponent setAddress={setAddress} />
            {/* <DeliveryScheduleComponent /> */}
            <ContactNumberComponent setContact={setContact} />
            <PaymentOptionComponent setCard={setCard} />
          </div>
          <div
            className='order-first order-lg-last mb-4 mb-lg-0'
            style={{ width: 240 }}
          >
            <div className={moveOrderBox ? `moveOrderBox` : ``}>
              <h6 className='text-center fw-bold mb-4'>Your order</h6>

              <div className='small'>
                {isEmpty ? (
                  <div className='mb-3 d-flex flex-column align-items-center'>
                    <span
                      className='d-flex'
                      style={{ height: 150, width: 150 }}
                    >
                      <img
                        src={EmptyBox}
                        height='100%'
                        width='100%'
                        alt='Empty'
                      />
                    </span>
                    <small className='text-black-50 mt-3'>
                      No products found
                    </small>
                  </div>
                ) : (
                  items.map((item) => (
                    <div className='mb-3 d-flex justify-content-between small'>
                      <span className='mr-2'>{item.quantity}</span>
                      <span className='mr-2 text-black-50 small'>x</span>
                      <span className='text-black-50 mr-2 small'>
                        <div className='text-capitalize'>{item.name}</div>
                      </span>
                      <span>${item.price}</span>
                    </div>
                  ))
                )}

                <div className='border-top mb-3'></div>

                <div>
                  <div className='mb-2 text-muted d-flex justify-content-between'>
                    <span className='text-capitalize'>Cart Total</span>
                    <span>${cartTotal}</span>
                  </div>
                  <div className='mb-2 text-muted d-flex justify-content-between'>
                    <span className='text-capitalize'>Delivery Fee</span>
                    <span>$00.00</span>
                  </div>
                  <div className='mb-2 text-muted d-flex justify-content-between'>
                    <span className='text-capitalize'>Discount</span>
                    <span>$00.00</span>
                  </div>

                  <div className='mt-3 fw-bold d-flex justify-content-between'>
                    <span className='text-capitalize'>
                      Total <small>(Incl. VAT)</small>
                    </span>
                    <span>${cartTotal}</span>
                  </div>
                  <div>
                    {loading ? (
                      <div class='d-flex justify-content-center'>
                        <div class='spinner-border' role='status'>
                          <span class='sr-only'>Loading...</span>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={placeOrder}
                        className=' m-2 btn btn-dark w-100'
                      >
                        Make payment
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
