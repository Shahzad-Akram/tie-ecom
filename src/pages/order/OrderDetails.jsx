import React, { useEffect, useState } from "react";
import Stepper from "react-stepper-horizontal";

const OrderDetails = ({ order }) => {
  const [step, setStep] = useState(1);
  console.log(order);

  useEffect(() => {
    if (order !== null) {
      if (order.orderStatus === "pending") {
        setStep(1);
      }
    }
  }, []);
  console.log(order);
  return (
    <>
      {order === null ? (
        <>No Items Found</>
      ) : (
        <section>
          <div className="row border-bottom small mx-0">
            <div className="col py-3 border-end">
              <div className="fw-bold mb-2">Delivery Address</div>
              <div className="text-black-50 mb-2">
                <span>{order.address.addressDescription}</span>
              </div>
            </div>
            <div className="col-12 col-md-4 col-xxl-3 py-3">
              <div className="d-flex justify-content-between mb-2 small">
                <span className="text-capitalize">Sub Total</span>
                <span className="text-capitalize">£{order.total}</span>
              </div>

              <div className="d-flex justify-content-between mb-2 small">
                <span className="text-capitalize">Discount</span>
                <span className="text-capitalize">£0</span>
              </div>

              <div className="d-flex justify-content-between mb-2 small">
                <span className="text-capitalize">Delivery Fee</span>
                <span className="text-capitalize">£49.7</span>
              </div>

              <div className="d-flex justify-content-between mb-2 small fw-bold">
                <span className="text-capitalize">Total</span>
                <span className="text-capitalize">£{order.total}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 px-3 stepper-container">
            <Stepper
              completeColor="#284a63"
              completeTitleColor="#284a63"
              completeBorderColor="#284a63"
              completeBarColor="#284a63"
              activeColor="#999"
              activeTitleColor="#999"
              titleFontSize={14}
              steps={[
                { title: "Pending" },
                { title: "Order On The Way" },
                { title: "Order Delivered" },
              ]}
              activeStep={step}
            />
          </div>

          <div className="p-3">
            <div className="scroll-box" style={{ height: 250 }}>
              <table className="table small border">
                <thead>
                  <tr className="bg-light">
                    <th style={{ borderColor: "#ddd" }} scope="col"></th>
                    <th style={{ borderColor: "#ddd" }} scope="col">
                      Items
                    </th>
                    <th
                      className="text-center"
                      style={{ borderColor: "#ddd" }}
                      scope="col"
                    >
                      Quantity
                    </th>
                    <th
                      className="text-center"
                      style={{ borderColor: "#ddd" }}
                      scope="col"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {order.orderItem.map((v) => (
                    <tr>
                      <td style={{ height: 90, width: 90 }}>
                        <img
                          height="100%"
                          width="100%"
                          src={v.images[0]}
                          alt=""
                        />
                      </td>
                      <td>
                        <div>
                          <div className="mb-1 fw-bold">{v.name}</div>

                          <div className="mb- text-success">£{v.price}</div>
                        </div>
                      </td>
                      <td className="text-center">{v.quantity}</td>
                      <td className="text-center">£{v.quantity * v.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default OrderDetails;
