import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import EmptyBox from "../../assets/images-svg/empty.svg";
import { useCart } from "react-use-cart";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedIn, showLoginModal } from "../../actions";

const CheckoutBar = ({ checkoutBar, setCheckoutBar }) => {
  const [counterButton, setCounterButton] = useState(true);
  const [showCounter, setShowCounter] = useState(false);
  const [count, setCount] = useState(0);

  const { isAuthenticated } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    isEmpty,
    cartTotal,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const handleCheckout = () => {
    if (isAuthenticated) {
      history.push("/checkout");
    } else {
      isLoggedIn(dispatch);
      showLoginModal(dispatch, true);
    }
  };

  return (
    <div
      className={
        checkoutBar ? `checkout-bar` : `checkout-bar checkout-bar-hide`
      }
    >
      <header className="d-flex align-items-baseline justify-content-between pt-2 pb-3 mb-3 border-bottom px-3">
        <div>{totalUniqueItems} items</div>
        <Link
          className="text-decoration-none"
          onClick={() => setCheckoutBar(false)}
        >
          <div className="h4 mb-0">&times;</div>
        </Link>
      </header>
      <main className="px-3 scroll-box">
        {/* == */}
        {isEmpty && (
          <div className="mb-3 d-flex flex-column align-items-center">
            <span className="d-flex" style={{ height: 150, width: 150 }}>
              <img src={EmptyBox} height="100%" width="100%" alt="Empty" />
            </span>
            <small className="text-black-50 mt-3">No products found</small>
          </div>
        )}

        {/* End */}
        {/* Item */}
        {items.map((item) => (
          <div
            key={item.id}
            className="mb-3 d-flex align-items-center justify-content-between small"
          >
            <div className="border border-dark rounded-pill d-flex flex-column justify-content-around align-items-center me-2 px-2">
              <button
                disabled={item.quantity >= item.stockQuantity}
                className="btn p-0"
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                style={{ boxShadow: "unset" }}
              >
                <span className="h6 mb-0">+</span>
              </button>
              <span className="mt-1 mx-1 small">{item.quantity}</span>
              <button
                className="btn p-0"
                style={{ boxShadow: "unset" }}
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                <span className="h4 mb-0">-</span>
              </button>
            </div>

            <span className="me-2 text-black-50 small">
              <img
                height={50}
                width={50}
                src={item.images[0]}
                alt={item.name}
              />
            </span>
            <span className="me-2 small">
              <div className="text-capitalize">{item.name}</div>
              <div className="fw-bold">{item.price}</div>
              <div className="text-black-50">
                In Stock: {item.stockQuantity}
              </div>
            </span>
            <span>£{item.price * item.quantity}</span>
          </div>
        ))}
        {/* Item-End */}
      </main>
      <footer className="mt-auto px-3 py-3">
        <div className="mb-3">
          <h6>Do you have a voucher?</h6>
          <div className="row mx-0">
            <div className="col-9 px-0">
              <input className="form-control" type="text" />
            </div>
            <div className="col-3">
              <button className="btn btn-dark">Apply</button>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={handleCheckout}
            type="button"
            className="btn btn-dark w-100"
          >
            Checkout
          </button>
        </div>
      </footer>
    </div>
  );
};
export default CheckoutBar;
