// rafc
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faShoppingBag,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { getProductstype, getProducts } from "../../actions";
import { useQuery } from "react-query";

import imageOne from "../../assets/images/bg-image-1.png";
import imageTwo from "../../assets/images/bow-banner.png";
import cardBoxImageOne from "../../assets/images/card-box-image-1.png";
import tie1 from "../../assets/images/tie-1.jpg";
import tie2 from "../../assets/images/tie-2.jpg";
import bow1 from "../../assets/images/bow-1.jpg";

export const HomePage = () => {
  const { data, isLoading } = useQuery(
    ["product"],

    getProducts
  );
  console.log(data);
  return (
    <div className="container-fluid">
      <section className="row vh-100 bg-light align-items-end mb-5">
        <div className="col-3 text-start ps-0 ">
          <img
            height={400}
            width="100%"
            style={{ objectFit: "contain", objectPosition: "50% 90%" }}
            src={imageOne}
            alt="pic"
          />
        </div>
        <div className="col text-center align-self-center">
          <h1 className="fw-bold fs-2 fs-md-1">Shop your designer dresses</h1>
          <div className="fs-6">
            Ready to wear dresses tailored for you from online. Hurry up while
            stock lasts.
          </div>
        </div>
        <div className="col-3 text-end pe-0 ">
          <img
            height={400}
            width="100%"
            style={{ objectFit: "contain", objectPosition: "50% 90%" }}
            src={imageTwo}
            alt="pic"
          />
        </div>
      </section>
      <section className="mb-5 container">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1395,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 1000,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1395,
                min: 1000,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className="row es-bg-1 py-3 px-4 rounded-3 text-white mx-3">
            <div className="col-12 col-md-7">
              <div className="text-center text-md-start">
                <span className="fs-4 fw-bold text-capitalize">
                  Gift Voucher 1
                </span>
                <div className="small">With personal care items</div>
                <Link
                  to="/shop"
                  className="btn btn-sm btn-light rounded-pill px-3 mt-4 text-capitalize"
                >
                  <small style={{ color: "#009e7f " }}>Shop coupons</small>
                </Link>
              </div>
            </div>
            <div className="col col-md-5 order-first order-md-last text-center text-md-end">
              <img height={100} src={cardBoxImageOne} alt="pic" />
            </div>
          </div>
          <div className="row es-bg-1 py-3 px-4 rounded-3 text-white mx-3">
            <div className="col-12 col-md-7">
              <div className="text-center text-md-start">
                <span className="fs-4 fw-bold text-capitalize">
                  Gift Voucher 2
                </span>
                <div className="small">With personal care items</div>
                <Link
                  to="/shop"
                  className="btn btn-sm btn-light rounded-pill px-3 mt-4 text-capitalize"
                >
                  <small style={{ color: "#009e7f " }}>Shop coupons</small>
                </Link>
              </div>
            </div>
            <div className="col col-md-5 order-first order-md-last text-center text-md-end">
              <img height={100} src={cardBoxImageOne} alt="pic" />
            </div>
          </div>
          <div className="row es-bg-1 py-3 px-4 rounded-3 text-white mx-3">
            <div className="col-12 col-md-7">
              <div className="text-center text-md-start">
                <span className="fs-4 fw-bold text-capitalize">
                  Gift Voucher 3
                </span>
                <div className="small">With personal care items</div>
                <Link
                  to="/shop"
                  className="btn btn-sm btn-light rounded-pill px-3 mt-4 text-capitalize"
                >
                  <small style={{ color: "#009e7f " }}>Shop coupons</small>
                </Link>
              </div>
            </div>
            <div className="col col-md-5 order-first order-md-last text-center text-md-end">
              <img height={100} src={cardBoxImageOne} alt="pic" />
            </div>
          </div>
        </Carousel>
      </section>
      <section className="mb-5 container pt-5 bg-light">
        <div className="row justify-content-around">
          <div className="col-12 col-sm-6 col-lg-5 col-xl-4">
            <div className="mb-5 pb-5">
              <Link>
                <img
                  className="rounded-4 shadow"
                  height={300}
                  width="100%"
                  src={bow1}
                  alt="pic"
                />
              </Link>
              <div className="w-75 mx-auto mt-4">
                <h2>Trending bags</h2>
                <p>
                  Suspendisse potenti. Ut bibendum rhoncus quam eget lorem ipsum
                  pellentesque.
                </p>
              </div>
            </div>
            {/* ========== */}
            <div className="mb-5 pb-5">
              <Link>
                <img
                  className="rounded-4 shadow"
                  height={450}
                  width="100%"
                  src={tie1}
                  alt="pic"
                />
              </Link>
              <div className="w-75 mx-auto mt-4">
                <h2>T shirt collections</h2>
                <p>
                  Pellentesque eget dolor augue. Fusce augue urna, maximus non
                  blandit sit amet.
                </p>
                <Link
                  to="/shop"
                  className="btn btn-outline-dark text-capitalize"
                >
                  Shop now
                </Link>
              </div>
            </div>
            {/* =========== */}
            <div className="mb-5 pb-5">
              <Link>
                <img
                  className="rounded-4 shadow"
                  height={300}
                  width="100%"
                  src="https://elementor-10aba.kxcdn.com/kera/wp-content/uploads/2020/05/banner-home1-05.jpg"
                  alt="pic"
                />
              </Link>
              <div className="w-75 mx-auto mt-4">
                <h2>Trending bags</h2>
                <p>
                  Suspendisse potenti. Ut bibendum rhoncus quam eget lorem ipsum
                  pellentesque.
                </p>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-lg-5 col-xl-4 align-self-center">
            <div className="mb-5 pb-5">
              <Link>
                <img
                  className="rounded-4 shadow"
                  height={650}
                  width="100%"
                  src={tie2}
                  alt="pic"
                />
              </Link>
              <div className="w-75 mx-auto mt-4">
                <h2>Coming in July</h2>
                <p>
                  Vestibulum ac nunc tempus, vestibulum tortor luctus, convallis
                  ipsum. In hac habitasse platea dictumst.
                </p>
              </div>
            </div>
            {/* ====== */}
            <div className="mb-5 pb-5">
              <Link>
                <img
                  className="rounded-4 shadow"
                  height={350}
                  width="100%"
                  src="https://elementor-10aba.kxcdn.com/kera/wp-content/uploads/2020/05/banner-home1-04.jpg"
                  alt="pic"
                />
              </Link>
              <div className="w-75 mx-auto mt-4">
                <h2>Sale up to 50%</h2>
                <p>
                  Pellentesque eget dolor augue. Fusce augue urna, maximus non
                  blandit sit amet.
                </p>
                <Link
                  to="/shop"
                  className="btn btn-outline-dark text-capitalize"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5 container py-5">
        <h2 className="mb-5 text-center"> 3 for 30£ Sale </h2>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 4,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 579,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tabletSmall: {
              breakpoint: {
                max: 867,
                min: 579,
              },
              items: 2,
              partialVisibilityGutter: 10,
            },
            tablet: {
              breakpoint: {
                max: 1195,
                min: 867,
              },
              items: 3,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {isLoading ? (
            <> loading </>
          ) : (
            data
              .filter((v) => v.three4Thirty === true)
              .map((v) => (
                <div className="small mx-auto" style={{ width: 270 }}>
                  <div className="mb-3 position-relative es-btn-overlay-1">
                    <Link>
                      <img
                        width="100%"
                        height={300}
                        src={v.images[0]}
                        alt="pic"
                      />
                    </Link>
                    <div className="es-overlay-1 position-absolute bottom-0 d-flex bg-white w-100 d-flex justify-content-around shadow-sm">
                      <Link className="h3">
                        <FontAwesomeIcon icon={faShoppingBag} />
                      </Link>
                      <Link className="h3">
                        <FontAwesomeIcon icon={faEye} />
                      </Link>
                    </div>
                  </div>
                  <Link className="text-decoration-none">{v.name}</Link>
                  <div className="mt-1 mb-2 d-flex align-items-center">
                    <span className="small">
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-black-50"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-black-50"
                      />
                    </span>
                    <span className="ms-2 text-black-50">2</span>
                  </div>
                  <b>£{v.price}</b>
                </div>
              ))
          )}
          {/* <div className="small mx-auto" style={{ width: 270 }}>
            <div className="mb-3 position-relative es-btn-overlay-1">
              <Link>
                <img
                  width="100%"
                  height={300}
                  src="https://elementor.thembay.com/kera/wp-content/uploads/2019/12/product-41-600x700.jpg"
                  alt="pic"
                />
              </Link>
              <div className="es-overlay-1 position-absolute bottom-0 d-flex bg-white w-100 d-flex justify-content-around shadow-sm">
                <Link className="h3">
                  <FontAwesomeIcon icon={faShoppingBag} />
                </Link>
                <Link className="h3">
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </div>
            </div>
            <Link className="text-decoration-none">
              Reversible Black Leather Belt
            </Link>
            <div className="mt-1 mb-2 d-flex align-items-center">
              <span className="small">
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-black-50" />
                <FontAwesomeIcon icon={faStar} className="text-black-50" />
              </span>
              <span className="ms-2 text-black-50">2</span>
            </div>
            <b>£ 146.18 - £ 153.10</b>
          </div>

          <div className="small mx-auto" style={{ width: 270 }}>
            <div className="mb-3 position-relative es-btn-overlay-1">
              <Link>
                <img
                  width="100%"
                  height={300}
                  src="https://elementor.thembay.com/kera/wp-content/uploads/2019/12/product-41-600x700.jpg"
                  alt="pic"
                />
              </Link>
              <div className="es-overlay-1 position-absolute bottom-0 d-flex bg-white w-100 d-flex justify-content-around shadow-sm">
                <Link className="h3">
                  <FontAwesomeIcon icon={faShoppingBag} />
                </Link>
                <Link className="h3">
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </div>
            </div>
            <Link className="text-decoration-none">
              Reversible Black Leather Belt
            </Link>
            <div className="mt-1 mb-2 d-flex align-items-center">
              <span className="small">
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-black-50" />
                <FontAwesomeIcon icon={faStar} className="text-black-50" />
              </span>
              <span className="ms-2 text-black-50">2</span>
            </div>
            <b>£ 146.18 - £ 153.10</b>
          </div>

          <div className="small mx-auto" style={{ width: 270 }}>
            <div className="mb-3 position-relative es-btn-overlay-1">
              <Link>
                <img
                  width="100%"
                  height={300}
                  src="https://elementor.thembay.com/kera/wp-content/uploads/2019/12/product-41-600x700.jpg"
                  alt="pic"
                />
              </Link>
              <div className="es-overlay-1 position-absolute bottom-0 d-flex bg-white w-100 d-flex justify-content-around shadow-sm">
                <Link className="h3">
                  <FontAwesomeIcon icon={faShoppingBag} />
                </Link>
                <Link className="h3">
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </div>
            </div>
            <Link className="text-decoration-none">
              Reversible Black Leather Belt
            </Link>
            <div className="mt-1 mb-2 d-flex align-items-center">
              <span className="small">
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-black-50" />
                <FontAwesomeIcon icon={faStar} className="text-black-50" />
              </span>
              <span className="ms-2 text-black-50">2</span>
            </div>
            <b>£ 146.18 - £ 153.10</b>
          </div> */}
        </Carousel>
      </section>
    </div>
  );
};
