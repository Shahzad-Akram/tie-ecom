import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import CheckoutBar from "./CheckoutBar";
import Products from "./Products";
import { useCart } from "react-use-cart";

// Images
import EmptyBox from "../../assets/images-svg/empty.svg";
import { ShopSidebar } from "../../components/checkout/ShopSidebar";

export const ShopPage = () => {
  const [checkoutBar, setCheckoutBar] = useState(false);
  const {
    isEmpty,
    cartTotal,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <section className="container-fluid ">
      {/* Checkout Bar Start */}
      <button
        type="button"
        className="checkout-btn-container position-fixed bottom-50 end-0 btn btn-dark p-2 rounded-3"
        style={{ zIndex: 555 }}
        onClick={() => setCheckoutBar(!checkoutBar)}
      >
        <div className="small mb-2">
          <FontAwesomeIcon icon={faCartPlus} />
          <span className="ms-2 small fw-bold">{totalUniqueItems} items</span>
        </div>
        <div className="bg-white shadow-sm p-1 rounded-3 small text-black-50">
          £{cartTotal}
        </div>
      </button>

      <CheckoutBar checkoutBar={checkoutBar} setCheckoutBar={setCheckoutBar} />

      {/* Checkout Bar End */}

      <div className="py-5 my-5 text-center">
        <h1>
          <i>Shop</i>
        </h1>
        <h4 className="fw-normal col-xl-7 mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          odio eius debitis laudantium praesentium dolores temporibus nostrum
          ipsa quibusdam sit?
        </h4>
      </div>
      <Products />
    </section>
  );
};
