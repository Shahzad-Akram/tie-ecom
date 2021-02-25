import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShopSidebar } from "../../components/checkout/ShopSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

import { getProductstype, getProducts } from "../../actions";

import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useCart } from "react-use-cart";
import ItemModal from "./ItemModal";
import axios from "axios";

const Products = () => {
  const [modal, setModal] = useState(false);
  const [counterButton, setCounterButton] = useState(true);
  const [showCounter, setShowCounter] = useState(false);
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [categoriesbytype, setCategoriesbytype] = useState(null);
  const [categoriesbybrand, setCategoriesbybrand] = useState(null);
  const [categoriesbyprice, setCategoriesbyprice] = useState(null);
  const [categoriesbypattern, setCategoriesbypattern] = useState(null);
  const [categoriesbysize, setCategoriesbysize] = useState(null);
  const [categoriesbycolor, setCategoriesbycolor] = useState(null);

  const { inCart, addItem } = useCart();

  // const getProducts = () => {
  //   return axios
  //     .get("https://tie-ecommerce.herokuapp.com/product")
  //     .then((res) => {
  //       return res.data.products;
  //     })
  //     .catch((err) => console.log(err));
  // };

  const { data, isLoading } = useQuery(
    [
      "product",
      categoriesbytype,
      categoriesbybrand,
      categoriesbyprice,
      categoriesbypattern,
      categoriesbysize,
      categoriesbycolor,
      limit,
    ],

    getProductstype
  );

  // const { data, isLoading } = useQuery("product", getProductstype);
  // console.log(data, isLoading);

  const handleClickCart = (product) => {
    const productWithId = {
      ...product,
      id: product._id,
    };

    addItem(productWithId);
  };

  const LoadingArr = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  console.log(data);
  return (
    <>
      {modal ? <ItemModal setModal={() => setModal(false)} /> : null}
      <div className="row">
        <div className="col-lg-3 col-xxl-2 bg-white shadow-sm border">
          <ShopSidebar
            setType={setCategoriesbytype}
            setPrice={setCategoriesbyprice}
            setMaterial={setCategoriesbybrand}
            setPattern={setCategoriesbypattern}
            setSize={setCategoriesbysize}
            setColor={setCategoriesbycolor}
          />
        </div>
        <div className="col bg-light p-4">
          <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 row-cols-xxl-6 justify-content-center">
            {isLoading ? (
              <>
                {LoadingArr.map((value) => (
                  <div className="loader-skeleton"></div>
                ))}
              </>
            ) : (
              data.products.map((data) => {
                const alreadyAdded = inCart(data._id);
                return (
                  <Link
                    className="col text-decoration-none small bg-white pb-3 rounded-3 m-3 d-flex flex-column"
                    key={data._id}
                  >
                    <div className="position-relative">
                      <img
                        height={240}
                        width="100%"
                        src={data.images[0]}
                        alt={data.name}
                        onClick={() => setModal(true)}
                      />
                      <span className="badge bg-warning rounded-pill position-absolute end-0 mt-3">
                        20%
                      </span>
                    </div>
                    <div className="fw-bold">{data.name}</div>
                    <div className="mb-3">{data.stockQuantity}</div>
                    <i className="text-decoration-line-through text-danger">
                      10$
                    </i>
                    <div className="d-flex align-items-baseline justify-content-between mt-auto">
                      <span className="fw-bold">{data.price}</span>
                      {/* -- */}
                      <div>
                        {alreadyAdded ? (
                          <button
                            className="btn btn-sm btn-outline-dark rounded-pill m-2"
                            disabled
                          >
                            <FontAwesomeIcon icon={faCartArrowDown} />
                            <span className="ms-2 small fw-bold">
                              Added to Cart
                            </span>
                          </button>
                        ) : (
                          <button
                            className="btn btn-sm btn-outline-dark rounded-pill m-2"
                            onClick={() => {
                              setCounterButton(false);
                              //setShowCounter(true);
                              handleClickCart(data);
                            }}
                          >
                            <FontAwesomeIcon icon={faCartPlus} />
                            <span className="ms-2 small fw-bold">Cart</span>
                          </button>
                        )}
                      </div>
                      {/* -- */}
                    </div>
                  </Link>
                );
              })
            )}
          </div>
          <div className="text-center pt-3">
            {limit >= data?.count ? (
              <button disabled className="btn btn-outline-secondary">
                No more Products
              </button>
            ) : (
              <button
                onClick={() => setLimit(limit + 5)}
                className="btn btn-outline-secondary"
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
