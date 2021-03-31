import React, { useState } from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { CustomModal } from "../custom/CustomModal";
import { useForm } from "react-hook-form";

export const DeliveryAddressComponent = ({ setAddress }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [modal, setModal] = useState(false);
  const [data, setData] = useState(null);

  const onSubmit = (data) => {
    setAddress(data);
    setData(data);
    setModal(false);
  };

  return (
    <div className="bg-light shadow-sm rounded-3 p-4 mb-4">
      {modal ? (
        <CustomModal>
          <header className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="mb-0 fw-bold">Add New Address</h6>
            <button
              type="button"
              className="btn p-0"
              onClick={() => setModal(false)}
            >
              <h3 className="mb-0">&times;</h3>
            </button>
          </header>
          <section>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control mb-4"
                type="text"
                placeholder="Address Line 1"
                name="ad1"
                ref={register({ required: true })}
              />
              <input
                className="form-control mb-4"
                type="text"
                placeholder="Address Line 2"
                name="ad2"
                ref={register}
              />
              <input
                className="form-control mb-4"
                type="text"
                placeholder="Enter Country"
                name="country"
                ref={register({ required: true })}
              />

              {/* <input
                className="form-control mb-4"
                type="text"
                placeholder="Enter District"
                name="district"
                ref={register({ required: true })}
              /> */}
              <input
                className="form-control mb-4"
                type="text"
                placeholder="Enter City"
                name="city"
                ref={register({ required: true })}
              />
              <input
                className="form-control mb-4"
                type="text"
                placeholder="Enter Postal Code"
                name="postalCode"
                ref={register({ required: true })}
              />
              {/* <textarea
                className="form-control mb-4"
                rows="4"
                placeholder="Enter Address"
                name="addressDescription"
                ref={register({ required: true })}
              ></textarea> */}
              <button type="submit" className="btn btn-dark w-100">
                Save Address
              </button>
            </form>
          </section>
        </CustomModal>
      ) : null}

      <div className="d-flex align-items-center mb-3">
        <span className="badge bg-dark rounded-circle">1</span>
        <h6 className="text-capitalize ms-2 mb-0 fw-bold">Delivery Address</h6>
        <button
          type="button"
          onClick={() => setModal(true)}
          className="btn p-1 ms-auto text-capitalize"
        >
          <small>+ Add Address</small>
        </button>
      </div>

      <div className="row">
        {data === null ? (
          <h3>No Address Found</h3>
        ) : (
          <div className="form-group mb-3" style={{ width: 200 }}>
            <button
              type="button"
              className="p-3 text-start rounded-lg btn btn-bt-box-1 w-100 h-100"
            >
              <>
                <div className="small font-weight-bold">Home</div>
                <div className="text-black-50 small">
                  {data.ad1},{data.ad2}, {data.city}, {data.country}
                </div>
              </>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
