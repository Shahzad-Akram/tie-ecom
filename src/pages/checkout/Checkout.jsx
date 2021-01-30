import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// Compoent
import { DeliveryAddressComponent } from "../../components/checkout/DeliveryAddressComponent";
import { DeliveryScheduleComponent } from "../../components/checkout/DeliveryScheduleComponent";
import { ContactNumberComponent } from "../../components/checkout/ContactNumberComponent";
import { PaymentOptionComponent } from "../../components/checkout/PaymentOptionComponent";

// Images
import EmptyBox from "../../assets/images-svg/empty.svg";

export const Checkout = () => {
  const [moveOrderBox, setMoveOrderBox] = useState(false);
  // const dispatch = useDispatch()
  // const history = useHistory()
  // const { isAuthenticated } = useSelector((state) => state.user);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setMoveOrderBox(true);
    } else {
      setMoveOrderBox(false);
    }
  };

  // useEffect(() => {
  //   if(!isAuthenticated)
  //   {
  //     history.push('/')
  //   }
  // },[])

  window.addEventListener("scroll", changeBackground);

  return (
    <section className="container">
      <form>
        <div className="row justify-content-center py-5 my-5">
          <div className="col col-lg-6 px-0 px-md-3">
            <DeliveryAddressComponent />
            <DeliveryScheduleComponent />
            <ContactNumberComponent />
            <PaymentOptionComponent />
          </div>
          <div
            className="order-first order-lg-last mb-4 mb-lg-0"
            style={{ width: 240 }}
          >
            <div className={moveOrderBox ? `moveOrderBox` : ``}>
              <h6 className="text-center fw-bold mb-4">Your order</h6>

              <div className="small">
                {/* == */}
                <div className="mb-3 d-flex flex-column align-items-center">
                  <span className="d-flex" style={{ height: 150, width: 150 }}>
                    <img
                      src={EmptyBox}
                      height="100%"
                      width="100%"
                      alt="Empty"
                    />
                  </span>
                  <small className="text-black-50 mt-3">
                    No products found
                  </small>
                </div>
                {/* End */}
                {/* Item */}
                <div className="mb-3 d-flex justify-content-between small">
                  <span className="mr-2">11</span>
                  <span className="mr-2 text-black-50 small">X</span>
                  <span className="text-black-50 mr-2 small">
                    <div className="text-capitalize">Mix vegetable platter</div>
                    <div>| 0.4 lb</div>
                  </span>
                  <span>$44.00</span>
                </div>
                {/* Item-End */}

                <div className="border-top mb-3"></div>

                <div>
                  <div className="mb-2 text-muted d-flex justify-content-between">
                    <span className="text-capitalize">Sub total</span>
                    <span>$44.00</span>
                  </div>
                  <div className="mb-2 text-muted d-flex justify-content-between">
                    <span className="text-capitalize">Delivery Fee</span>
                    <span>$00.00</span>
                  </div>
                  <div className="mb-2 text-muted d-flex justify-content-between">
                    <span className="text-capitalize">Discount</span>
                    <span>$00.00</span>
                  </div>

                  <div className="mt-3 fw-bold d-flex justify-content-between">
                    <span className="text-capitalize">
                      Total <small>(Incl. VAT)</small>
                    </span>
                    <span>$44.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
