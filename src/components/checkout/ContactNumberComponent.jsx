import React, { useState } from 'react';
import { CustomModal } from '../custom/CustomModal';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

export const ContactNumberComponent = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className='bg-light shadow-sm rounded-3 p-4 mb-4'>
      {modal ? (
        <CustomModal>
          <header className='d-flex justify-content-between align-items-center mb-3'>
            <h6 className='mb-0 fw-bold'>Add New Contact</h6>
            <button
              type='button'
              className='btn p-0'
              onClick={() => setModal(false)}
            >
              <h3 className='mb-0'>&times;</h3>
            </button>
          </header>
          <section>
            <input
              className='form-control mb-4'
              type='text'
              placeholder='Enter a phone number'
            />

            <button
              type='button'
              onClick={() => setModal(false)}
              className='btn btn-dark w-100'
            >
              Save Contact
            </button>
          </section>
        </CustomModal>
      ) : null}
      <div className='d-flex align-items-center mb-3'>
        <span className='badge bg-dark rounded-circle'>3</span>
        <h6 className='text-capitalize ms-2 mb-0 fw-bold'>Delivery Address</h6>
        <button
          type='button'
          onClick={() => setModal(true)}
          className='btn p-1 ms-auto text-capitalize'
        >
          <small>+ Add Contact</small>
        </button>
      </div>

      <div className='row'>
        <div className='form-group mb-3' style={{ width: 200 }}>
          <button
            type='button'
            className='p-3 text-start rounded-lg btn btn-bt-box-1 w-100 h-100'
          >
            <div className='small font-weight-bold'>Primary</div>
            <div className='text-black-50 small'>202-555-0191</div>
            <div className='bt-box-1__item '>
              <button
                type='button'
                className='p-0 rounded-circle text-white d-flex align-items-center justify-content-center me-1 btn btn-success'
                style={{ height: 18, width: 18 }}
                onClick={() => setModal(true)}
              >
                <FontAwesomeIcon size='xs' icon={faPencilAlt} />
              </button>
              <button
                type='button'
                className='p-0 rounded-circle text-white d-flex align-items-center justify-content-center btn btn-danger'
                style={{ height: 18, width: 18 }}
              >
                <FontAwesomeIcon size='xs' icon={faTimes} />
              </button>
            </div>
          </button>
        </div>

        <div className='form-group mb-3' style={{ width: 200 }}>
          <button
            type='button'
            className='p-3 text-start rounded-lg btn btn-bt-box-1 w-100 h-100'
          >
            <div className='small font-weight-bold'>Secondary</div>
            <div className='text-black-50 small'>202-555-0701</div>
            <div className='bt-box-1__item '>
              <button
                type='button'
                className='p-0 rounded-circle text-white d-flex align-items-center justify-content-center me-1 btn btn-success'
                style={{ height: 18, width: 18 }}
                onClick={() => setModal(true)}
              >
                <FontAwesomeIcon size='xs' icon={faPencilAlt} />
              </button>
              <button
                type='button'
                className='p-0 rounded-circle text-white d-flex align-items-center justify-content-center btn btn-danger'
                style={{ height: 18, width: 18 }}
              >
                <FontAwesomeIcon size='xs' icon={faTimes} />
              </button>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};