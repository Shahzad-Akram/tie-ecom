import { faFilter, faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const category = [
  { id: 1, name: "Ties", value: "tie" },
  { id: 2, name: "Bows", value: "bow" },
];

const Materials = [
  { name: "Cotton", value: "cotton" },
  { name: "Cotton Mix", value: "cotton-mix" },
  { name: "Polyester", value: "polyester" },
  { name: "Polyester Mix", value: "mix" },
  { name: "Silk", value: "silk" },
  { name: "Wool", value: "wool  " },
];

const Pattern = [
  { name: "Geometric", value: "geometric" },
  { name: "Plain", value: "plain" },
  { name: "Stripe", value: "stripe" },
  { name: "Floral", value: "floral" },
  { name: "Spot", value: "spot" },
  { name: "Check", value: "check" },
  { name: "Patterned", value: "patterned" },
  { name: "Knitted", value: "knitted" },
  { name: "Paisley", value: "paisley" },
];

const colors = [
  { key: 1, color: "check-color-1", value: "#008000" },
  { key: 2, color: "check-color-2", value: "#440000" },
  { key: 3, color: "check-color-3", value: "#ffd700" },
  { key: 4, color: "check-color-4", value: "#808080" },
  { key: 5, color: "check-color-5", value: "#000080" },
  { key: 5, color: "check-color-6", value: "#ffa500" },
  { key: 5, color: "check-color-7", value: "#ffc0cb" },
  { key: 5, color: "check-color-8", value: "#800080" },
  { key: 5, color: "check-color-9", value: "#ff0000" },
  { key: 5, color: "check-color-10", value: "#c0c0c0" },
  { key: 5, color: "check-color-11", value: "#ffffff" },
  { key: 5, color: "check-color-12", value: "#ffff00" },
  { key: 5, color: "check-color-13", value: "#fffdd0" },
  { key: 5, color: "check-color-14", value: "#00bfff" },
];

const sizes = [
  { name: "Regular", value: "regular" },
  { name: "Skinny", value: "skinny" },
  { name: "Slim", value: "slim" },
];

export const ShopSidebar = ({
  setType,
  setPrice,
  setMaterial,
  setPattern,
  setSize,
  setColor,
}) => {
  const [showOne, setShowOne] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const [price, setPriceLimit] = useState();
  const [filterModal, setFilterModal] = useState(false);
  const resetAll = () => {
    setType(null);
    setPrice(null);
    setMaterial(null);
    setPattern(null);
    setSize(null);
    setColor(null);
  };

  return (
    <>
      <section className="p-3 d-none d-lg-block">
        <div className="mb-4">
          <h6 className="fw-bold mb-3">Product Categories</h6>
          <ul className="nav flex-column">
            {category.map((value) => (
              <li key={value.id} className="nav-list">
                <button
                  type="button"
                  className="btn nav-link d-flex flex-wrap align-items-end"
                  onClick={() => {
                    setType(value.value);
                    setShowToggle(true);
                  }}
                >
                  {showOne ? (
                    <span className="me-2 badge bg-light text-black-50 rounded-3">
                      &times;
                    </span>
                  ) : null}
                  <span className="text-capitalize small text-black-50">
                    {value.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <main className={` ${showToggle ? "d-block" : "d-none "}`}>
          <div className="mb-4">
            <h6 className="fw-bold mb-3">Materials</h6>
            <ul className="nav flex-column">
              {Materials.map((value) => (
                <li className="nav-list">
                  <button
                    type="button"
                    className="btn nav-link d-flex flex-wrap align-items-end"
                    onClick={() => setMaterial(value.value)}
                  >
                    {/* {showOne ? (
                  <span className="me-2 badge bg-light text-black-50 rounded-3">
                    &times;
                  </span>
                ) : null} */}
                    <span className="text-capitalize small text-black-50">
                      {value.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h6 className="fw-bold mb-3">Pattern</h6>
            <ul className="nav flex-column">
              {Pattern.map((value) => (
                <li className="nav-list">
                  <button
                    type="button"
                    className="btn nav-link d-flex flex-wrap align-items-end"
                    onClick={() => setPattern(value.value)}
                  >
                    {showOne ? (
                      <span className="me-2 badge bg-light text-black-50 rounded-3">
                        &times;
                      </span>
                    ) : null}
                    <span className="text-capitalize small text-black-50">
                      {value.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h6 className="fw-bold mb-3">Product Color</h6>
            <div className="d-flex flex-wrap">
              {colors.map((value, key) => (
                <div
                  key={value.key}
                  className={`form-check mr-2 ${value.color}`}
                  onClick={() => setColor(value.value)}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={value.key}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h6 className="fw-bold mb-3">Product Size</h6>
            <div className="d-flex flex-wrap">
              {sizes.map((value) => (
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm me-2 mb-2 d-flex align-items-center justify-content-center"
                  style={{ height: 25, width: 50 }}
                  onClick={() => setSize(value.value)}
                >
                  <span className="small text-capitalize">{value.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* <div className="mb-4">
            <h6 className="fw-bold mb-3">Brands</h6>
            <div className="mb-3">
              <input
                type="range"
                min="5"
                max="500"
                onChange={(e) => {
                  setPrice(e.target.value);
                  setPriceLimit(e.target.value);
                }}
                className="form-range"
                id="customRange1"
              />
            </div>
            <div className="d-flex align-items-end fw-bold">
              <span className="small text-black-50 me-1">Price:</span>
              <span>$00.00</span>
              <span className="mx-1">-</span>
              <span>${price}</span>
            </div>
          </div> */}
          <div>
            <button
              type="button"
              className="btn w-100 btn-outline-dark"
              onClick={resetAll}
            >
              <span>
                <FontAwesomeIcon icon={faRedo} className="small" />
              </span>
              <span className="text-capitalize ms-2 small">Reset all</span>
            </button>
          </div>
        </main>
      </section>
      {/* responsive filter start */}
      <button
        type="button"
        className="d-block d-lg-none position-fixed bottom-0 mb-3 end-0 btn btn-dark p-2 rounded-3"
        style={{ zIndex: 8888888888888 }}
        onClick={() => setFilterModal(!filterModal)}
      >
        <div className="small">
          <FontAwesomeIcon icon={faFilter} />
          <span className="ms-2 small fw-bold"> Filter</span>
        </div>
      </button>
      {filterModal ? (
        <div
          className="position-fixed w-100 h-100 d-block d-lg-none"
          style={{
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#0000002e",
            zIndex: 33333333,
          }}
        >
          <section
            className="px-3 pb-3 bg-white col-8 col-md-4 h-100 scroll-box"
            style={{ paddingTop: 100 }}
          >
            <div className="mb-4">
              <h6 className="fw-bold mb-3">Product Categories</h6>
              <ul className="nav flex-column">
                {category.map((value) => (
                  <li key={value.id} className="nav-list">
                    <button
                      type="button"
                      className="btn nav-link d-flex flex-wrap align-items-end"
                      onClick={() => {
                        setType(value.value);
                        setShowToggle(!showToggle);
                      }}
                    >
                      {showOne ? (
                        <span className="me-2 badge bg-light text-black-50 rounded-3">
                          &times;
                        </span>
                      ) : null}
                      <span className="text-capitalize small text-black-50">
                        {value.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <main className={` ${showToggle ? "d-block" : "d-none "}`}>
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Materials</h6>
                <ul className="nav flex-column">
                  {Materials.map((value) => (
                    <li className="nav-list">
                      <button
                        type="button"
                        className="btn nav-link d-flex flex-wrap align-items-end"
                        onClick={() => setMaterial(value.value)}
                      >
                        {/* {showOne ? (
                  <span className="me-2 badge bg-light text-black-50 rounded-3">
                    &times;
                  </span>
                ) : null} */}
                        <span className="text-capitalize small text-black-50">
                          {value.name}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-3">Pattern</h6>
                <ul className="nav flex-column">
                  {Pattern.map((value) => (
                    <li className="nav-list">
                      <button
                        type="button"
                        className="btn nav-link d-flex flex-wrap align-items-end"
                        onClick={() => setPattern(value.value)}
                      >
                        {showOne ? (
                          <span className="me-2 badge bg-light text-black-50 rounded-3">
                            &times;
                          </span>
                        ) : null}
                        <span className="text-capitalize small text-black-50">
                          {value.name}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-3">Product Color</h6>
                <div className="d-flex flex-wrap">
                  {colors.map((value, key) => (
                    <div
                      key={value.key}
                      className={`form-check mr-2 ${value.color}`}
                      onClick={() => setColor(value.value)}
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={value.key}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-3">Product Size</h6>
                <div className="d-flex flex-wrap">
                  {sizes.map((value) => (
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-sm me-2 mb-2 d-flex align-items-center justify-content-center"
                      style={{ height: 25, width: 50 }}
                      onClick={() => setSize(value.value)}
                    >
                      <span className="small text-capitalize">
                        {value.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-3">Brands</h6>
                <div className="mb-3">
                  <input
                    type="range"
                    min="5"
                    max="500"
                    onChange={(e) => {
                      setPrice(e.target.value);
                      setPriceLimit(e.target.value);
                    }}
                    className="form-range"
                    id="customRange1"
                  />
                </div>
                <div className="d-flex align-items-end fw-bold">
                  <span className="small text-black-50 me-1">Price:</span>
                  <span>£00.00</span>
                  <span className="mx-1">-</span>
                  <span>£{price}</span>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="btn w-100 btn-outline-dark"
                  onClick={resetAll}
                >
                  <span>
                    <FontAwesomeIcon icon={faRedo} className="small" />
                  </span>
                  <span className="text-capitalize ms-2 small">Reset all</span>
                </button>
              </div>
            </main>
          </section>
        </div>
      ) : null}
      {/* responsive filter end */}
    </>
  );
};
