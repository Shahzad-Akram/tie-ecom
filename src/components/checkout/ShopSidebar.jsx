import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const category = [
  { id: 1, name: "Ties", value: "Tie" },
  { id: 2, name: "Bows", value: "bow" },
];

const brands = [
  { name: "Alexandermer" },
  { name: "Bossess" },
  { name: "Burbered" },
  { name: "Hermeck" },
  { name: "Hoga" },
];

const colors = [
  { key: 1, color: "check-color-1" },
  { key: 2, color: "check-color-2" },
  { key: 3, color: "check-color-3" },
  { key: 4, color: "check-color-4" },
  { key: 5, color: "check-color-5" },
];

const sizes = [
  { name: "37" },
  { name: "38" },
  { name: "40" },
  { name: "L" },
  { name: "m" },
  { name: "s" },
  { name: "xl" },
];

export const ShopSidebar = ({ setType, setPrice }) => {
  const [showOne, setShowOne] = useState(false);
  const [price, setPriceLimit] = useState();

  return (
    <section className="p-3">
      <div className="mb-4">
        <h6 className="fw-bold mb-3">Product Categories</h6>
        <ul className="nav flex-column">
          {category.map((value) => (
            <li key={value.id} className="nav-list">
              <button
                type="button"
                className="btn nav-link d-flex flex-wrap align-items-end"
                onClick={() => setType(value.value)}
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
        <h6 className="fw-bold mb-3">Brands</h6>
        <ul className="nav flex-column">
          {brands.map((value) => (
            <li className="nav-list">
              <button
                type="button"
                className="btn nav-link d-flex flex-wrap align-items-end"
                onClick={() => setShowOne(!showOne)}
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
          {colors.map((value) => (
            <div className={`form-check mr-2 ${value.color}`}>
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
              className="btn btn-outline-success btn-sm me-2 mb-2 d-flex align-items-center justify-content-center"
              style={{ height: 25, width: 25 }}
            >
              <span className="small text-capitalize">{value.name}</span>
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
          <span>$00.00</span>
          <span className="mx-1">-</span>
          <span>${price}</span>
        </div>
      </div>
      <div>
        <button type="button" className="btn w-100 btn-outline-success">
          <span>
            <FontAwesomeIcon icon={faRedo} className="small" />
          </span>
          <span className="text-capitalize ms-2 small">Rest all</span>
        </button>
      </div>
    </section>
  );
};
