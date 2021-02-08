import React, { useState } from "react";
import { CustomModal } from "../custom/CustomModal";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

export const ContactNumberComponent = ({ setContact }) => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState(null);
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    setContact(data);
    setData(data);
    setModal(false);
  };
  console.log(data);
  return (
    <div className="bg-light shadow-sm rounded-3 p-4 mb-4">
      {modal ? (
        <CustomModal>
          <header className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="mb-0 fw-bold">Add New Contact</h6>
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
                type="email"
                name="email"
                placeholder="Enter a Email"
                ref={register({ required: true })}
              />
              <input
                className="form-control mb-4"
                type="text"
                name="phone"
                placeholder="Enter a phone number"
                ref={register({ required: true })}
              />

              <button type="submit" className="btn btn-dark w-100">
                Save Contact
              </button>
            </form>
          </section>
        </CustomModal>
      ) : null}
      <div className="d-flex align-items-center mb-3">
        <span className="badge bg-dark rounded-circle">2</span>
        <h6 className="text-capitalize ms-2 mb-0 fw-bold">
          Contact Information
        </h6>
        <button
          type="button"
          onClick={() => setModal(true)}
          className="btn p-1 ms-auto text-capitalize"
        >
          <small>+ Add Contact</small>
        </button>
      </div>
      {data === null ? (
        <h3>No Contact Information Found</h3>
      ) : (
        <div className="row">
          <div className="form-group mb-3" style={{ width: 200 }}>
            <button
              type="button"
              className="p-3 text-start rounded-lg btn btn-bt-box-1 w-100 h-100"
            >
              <div className="small font-weight-bold">Contact No </div>
              <div className="text-black-50 small">{data.phone}</div>
            </button>
          </div>
          <div className="form-group mb-3" style={{ width: 200 }}>
            <button
              type="button"
              className="p-3 text-start rounded-lg btn btn-bt-box-1  h-100"
            >
              <div className="small font-weight-bold">Email </div>
              <div className="text-black-50 small">{data.email}</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
