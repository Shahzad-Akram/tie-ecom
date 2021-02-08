import React from 'react';
import './CustomModal.styles.css';

export const CustomModal = ({ className, children, onClose }) => {
  return (
    <>
      <div className='e-modal-overlay' onClick={onClose}>
        <div className={`e-modal-container-1 puff-in-center ${className}`}>
          {children}
        </div>
      </div>
    </>
  );
};
