import React from 'react';

const cardTabArr = [
  {
    key: 1,
    progressText: 'Order On the way',
    date: '7th April 2019',
    time: '17th April',
    price: '$230',
  },
];

export const TabOne = ({ onClick }) => {
  return (
    <>
      <div onClick={onClick}>
        {cardTabArr.map((cardTabArr) => (
          <button
            type='button'
            className='btn w-100 bg-light p-3 small rounded-3 mb-4'
          >
            <div className='d-flex justify-content-between mb-3'>
              <span className='fw-bold'>Order#{cardTabArr.key}</span>
              <span className='text-capitalize badge bg-dark'>
                {cardTabArr.progressText}
              </span>
            </div>

            <div className='d-flex justify-content-between mb-2 small'>
              <span className='text-capitalize'>Order Date:</span>
              <span className='text-capitalize'>{cardTabArr.date}</span>
            </div>

            <div className='d-flex justify-content-between mb-2 small'>
              <span className='text-capitalize'>Delivery Time:</span>
              <span className='text-capitalize'>{cardTabArr.time}</span>
            </div>

            <div className='d-flex justify-content-between small fw-bold'>
              <span className='text-capitalize'>Total Price:</span>
              <span className='text-capitalize'>{cardTabArr.price}</span>
            </div>
          </button>
        ))}
      </div>
    </>
  );
};
