import React from 'react';

export const DeliveryScheduleComponent = () => {
  return (
    <div className='bg-light shadow-sm rounded-3 p-4 mb-4'>
      <div className='d-flex align-items-center mb-3'>
        <span className='badge bg-dark rounded-circle'>2</span>
        <h6 className='text-capitalize ms-2 mb-0 fw-bold'>Delivery Schedule</h6>
      </div>

      <div className='row'>
        <div className='form-group mb-3' style={{ width: 200 }}>
          <button
            type='button'
            className='p-3 text-start rounded-lg btn btn-bt-box-1 w-100 h-100'
          >
            <div className='small font-weight-bold'>Express-Delivery</div>
            <div className='text-black-50 small'>90 min express delivery</div>
          </button>
        </div>

        <div className='form-group mb-3' style={{ width: 200 }}>
          <button
            type='button'
            className='p-3 text-start rounded-lg btn btn-bt-box-1 w-100 h-100'
          >
            <div className='small font-weight-bold'>8am-11am</div>
            <div className='text-black-50 small'>8.00 AM - 11.00 AM</div>
          </button>
        </div>

        <div className='form-group mb-3' style={{ width: 200 }}>
          <button
            type='button'
            className='p-3 text-start rounded-lg btn btn-bt-box-1 w-100 h-100'
          >
            <div className='small font-weight-bold'>11am-2pm</div>
            <div className='text-black-50 small'>11.00 AM - 2.00 PM</div>
          </button>
        </div>

        <div className='form-group mb-3' style={{ width: 200 }}>
          <button
            type='button'
            className='p-3 text-start rounded-lg btn btn-bt-box-1 w-100 h-100'
          >
            <div className='small font-weight-bold'>2pm-5pm</div>
            <div className='text-black-50 small'>2.00 PM - 5.00 PM</div>
          </button>
        </div>

        <div className='form-group mb-3' style={{ width: 200 }}>
          <button
            type='button'
            className='p-3 text-start rounded-lg btn btn-bt-box-1 w-100 h-100'
          >
            <div className='small font-weight-bold'>5pm-8pm</div>
            <div className='text-black-50 small'>5.00 PM - 8.00 PM</div>
          </button>
        </div>

        <div className='form-group mb-3' style={{ width: 200 }}>
          <button
            type='button'
            className='p-3 text-start rounded-lg btn btn-bt-box-1 w-100 h-100'
          >
            <div className='small font-weight-bold'>Next Day</div>
            <div className='text-black-50 small'>Next Day</div>
          </button>
        </div>
      </div>
    </div>
  );
};
