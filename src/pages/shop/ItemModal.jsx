import React, { useState } from "react";
import { CustomModal } from "../../components/custom/CustomModal";

const ItemModal = () => {
  return (
    <CustomModal>
      <header className="d-flex justify-content-between align-items-baseline mb-3">
        <div>
          <h6 className="mb-0 fw-bold text-dark">item 1</h6>
          <div>110</div>
        </div>
        <button
          type="button"
          className="btn p-0"
          //   onClick={() => setModal(false)}
        >
          <h3 className="mb-0">&times;</h3>
        </button>
      </header>
      <div className="border-top my-2"></div>
      <div>
        <div className="position-relative">
          <img
            style={{ objectFit: "contain" }}
            height={240}
            width="100%"
            src="https://osp-server.s3.amazonaws.com/1612628977474-code.png"
            alt="asdf"
          />
          <span className="badge bg-warning rounded-pill position-absolute end-0 mt-3">
            10%
          </span>
        </div>
        <div className="border-top my-2"></div>

        <div className="d-flex align-items-baseline justify-content-between mt-auto">
          <div className="d-flex align-items-center">
            <span className="fw-bold me-2">110</span>
            <i className="text-decoration-line-through text-danger small">20</i>
          </div>
          {/* -- */}
          <div>
            {/* {counterButton ? (
                          <button
                            className='btn btn-sm btn-outline-dark rounded-pill m-2'
                            onClick={() => {
                              setCounterButton(false);
                              setShowCounter(true);
                            }}
                          >
                            <FontAwesomeIcon icon={faCartPlus} />
                            <span className='ms-2 small fw-bold'>Cart</span>
                          </button>
                        ) : (
                          true
                        )} */}
            {/* {showCounter ? (
                          <div className='bg-dark rounded-pill d-flex justify-content-around align-items-center'>
                            <button
                              className='btn py-1 text-white'
                              style={{ boxShadow: 'unset' }}
                              onClick={() => {
                                setCount((prevCount) => prevCount - 1);
                              }}
                            >
                              -
                            </button>
                            <span className='mx-1 small text-white'>{count}</span>
                            <button
                              className='btn py-1 text-white'
                              onClick={() => setCount((prevCount) => prevCount + 1)}
                              style={{ boxShadow: 'unset' }}
                            >
                              +
                            </button>
                          </div>
                        ) : null} */}
          </div>
          {/* -- */}
        </div>
      </div>
    </CustomModal>
  );
};
export default ItemModal;
