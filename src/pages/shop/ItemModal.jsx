import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { CustomModal } from "../../components/custom/CustomModal";
import { useCart } from "react-use-cart";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const ItemModal = ({ setModal, data }) => {
  const [counterButton, setCounterButton] = useState(true);
  const [showCounter, setShowCounter] = useState(false);
  const [count, setCount] = useState(0);
  const { inCart, addItem } = useCart();

  const checkoutItem = [
    {
      image:
        "https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg",
      name: "Roadster Women Solid Top",
      stock: "1 pc(s)",
      minusPrice: "£15",
      price: "£12",
      discount: "20%",
    },
  ];

  const slider = [
    {
      image:
        "https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg",
      name: "Roadster Women Solid Top",
      discount: "20%",
    },
    {
      image:
        "https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg",
      name: "Roadster Women Solid Top",
    },
    {
      image:
        "https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg",
      name: "Roadster Women Solid Top",
      discount: "20%",
    },
    {
      image:
        "https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg",
      name: "Roadster Women Solid Top",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleClickCart = (product) => {
    const productWithId = {
      ...product,
      id: product._id,
    };

    addItem(productWithId);
  };

  const alreadyAdded = inCart(data._id);
  console.log(data);
  return (
    <CustomModal className="bg-transparent w-100">
      <section className="bg-white p-4 col col-md-10 col-xl-8 mx-auto shadow modal-card-container scroll-box">
        {checkoutItem.map((value) => (
          <>
            <div className="row">
              <div className="col-12 d-block d-md-none my-2">
                <span
                  className="d-flex w-100 bg-light my-auto"
                  style={{ height: 3 }}
                ></span>
              </div>
              <div className="col-12 col-md-5">
                <Slider {...settings}>
                  {data.images.map((value) => (
                    <section>
                      <div className="position-relative">
                        <img
                          height={400}
                          style={{ objectFit: "contain" }}
                          width="100%"
                          src={value}
                          alt={value.name}
                        />
                        {/* <span className="badge bg-warning rounded-pill position-absolute top-0 end-0 mt-3">
                          {value.discount}
                        </span> */}
                      </div>
                    </section>
                  ))}
                </Slider>
              </div>

              <div className="col-1 d-none d-md-block">
                <span
                  className="d-flex h-100 bg-light mx-auto"
                  style={{ width: 2 }}
                ></span>
              </div>
              <main className="col order-first order-md-last">
                <header className="d-flex justify-content-between align-items-baseline mb-3">
                  <div>
                    <h5 className="mb-2 fw-bold text-dark">{data?.name}</h5>
                    <div className="text-black-50 small mb-2">
                      {data.stockQuantity} pc(s)
                    </div>
                    <div className="mb-2">
                      A necktie, or simply a tie, is a long piece of cloth,
                      worn, usually by men, for decorative purposes around the
                      neck, resting under the shirt collar and knotted at the
                      throat. ... In some cultures men and boys wear neckties as
                      part of regular office attire or formal wear.
                    </div>
                    <div className="d-flex mt-4">
                      <Link className="badge bg-light text-decoration-none me-2 mb-2">
                        Men {data.category}
                      </Link>
                      {/* <Link className="badge bg-light text-decoration-none me-2 mb-2">
                        Single Color
                      </Link> */}
                    </div>
                  </div>
                  <button type="button" className="btn p-0" onClick={setModal}>
                    <h3 className="mb-0">&times;</h3>
                  </button>
                </header>
                <section className="d-flex align-items-baseline justify-content-between mt-auto">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold me-2">{data.price}</span>
                    {/* <i className="text-decoration-line-through text-danger small">
                      {value.minusPrice}
                    </i> */}
                  </div>
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
                          // setCounterButton(false);
                          //setShowCounter(true);
                          handleClickCart(data);
                        }}
                      >
                        <FontAwesomeIcon icon={faCartPlus} />
                        <span className="ms-2 small fw-bold">Cart</span>
                      </button>
                    )}
                    {/* {counterButton ? (
                      <button
                        className="btn btn-sm btn-outline-dark rounded-pill m-2"
                        onClick={() => {
                          setCounterButton(false);
                          setShowCounter(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faCartPlus} />
                        <span className="ms-2 small fw-bold">Cart</span>
                      </button>
                    ) : (
                      true
                    )}
                    {showCounter ? (
                      <div className="bg-dark rounded-pill d-flex justify-content-around align-items-center">
                        <button
                          className="btn py-1 text-white"
                          style={{ boxShadow: "unset" }}
                          onClick={() => {
                            setCount((prevCount) => prevCount - 1);
                          }}
                        >
                          -
                        </button>
                        <span className="mx-1 small text-white">{count}</span>
                        <button
                          className="btn py-1 text-white"
                          onClick={() => setCount((prevCount) => prevCount + 1)}
                          style={{ boxShadow: "unset" }}
                        >
                          +
                        </button>
                      </div>
                    ) : null} */}
                  </div>
                  {/* -- */}
                </section>
              </main>
            </div>
          </>
        ))}
      </section>
    </CustomModal>
  );
};
export default ItemModal;
