import React from "react";
import DayJS from "react-dayjs";

const cardTabArr = [
  {
    key: 1,
    progressText: "Order On the way",
    date: "7th April 2019",
    time: "17th April",
    price: "$230",
  },
];

export const TabOne = ({ onClick, data }) => {
  return (
    <>
      <div onClick={onClick}>
        <button
          type="button"
          className="btn w-100 bg-light p-3 small rounded-3 mb-4"
        >
          <div className="d-flex justify-content-between mb-3">
            <span className="fw-bold">Order No: {data.orderId}</span>
            <span className="text-capitalize badge bg-dark">
              {cardTabArr.progressText}
            </span>
          </div>

          <div className="d-flex justify-content-between mb-2 small">
            <span className="text-capitalize">Order Date:</span>
            <span className="text-capitalize">
              <DayJS format="MM-DD-YYYY">{data.createdAt}</DayJS>
            </span>
          </div>

          <div className="d-flex justify-content-between mb-2 small">
            <span className="text-capitalize">Delivery Time:</span>
            <span className="text-capitalize">1234</span>
          </div>

          <div className="d-flex justify-content-between small fw-bold">
            <span className="text-capitalize">Total Price:</span>
            <span className="text-capitalize">${data.total}</span>
          </div>
        </button>
      </div>
    </>
  );
};
