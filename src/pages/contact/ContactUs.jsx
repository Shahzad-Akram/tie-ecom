import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CustomModal } from '../../components/custom/CustomModal';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelopeOpen,
  faHeadset,
  faHome,
  faLongArrowAltRight,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
// images
import imageOne from '../../assets/images/contact.svg';

export const ContactUs = () => {
  const [modal, setModal] = useState(false);

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

  return (
    <main className='bg-light' style={{ margin: '0 -12px' }}>
      <section className='pb-5'>
        <div
          className='d-flex align-items-center justify-content-center text-white text-center'
          style={{
            paddingTop: 70,
            height: '70vh',
            boxShadow: 'inset 0 0 0 1000px rgba(40,40,50,.7)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `url(${imageOne})`,
          }}
        >
          <div className='py-4 px-4 px-md-5 border rounded'>
            <h1 className='font-weight-light mb-0'>our contacts</h1>
          </div>
        </div>
      </section>
      <section className='pb-5'>
        <div className='text-center col-md-10 col-lg-8 col-xl-7 mx-auto mb-5'>
          <div className='text-dark mb-2'>Send Message</div>
          <h4 className='font-weight-bold mb-2'>Feel free to contact us.</h4>
          <p>
            Energistically predominate high-payoff alignments whereas
            maintainable materials timely deliverables. Synergistically leverage
            other's holistic mindshare via high-payoff expertise.
          </p>
        </div>
        <div className='container'>
          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4'>
            <div className='col mb-4 mb-lg-0'>
              <div className='bg-white py-4 rounded-lg shadow-sm box-card-3'>
                <a
                  href='tel:1234567890'
                  className='text-center text-dark text-decoration-none'
                >
                  <div className='mb-3'>
                    <FontAwesomeIcon icon={faPhone} className='h3 mb-0' />
                  </div>
                  <div className='font-weight-bold mb-2'>Call Us</div>
                  <div className='text-muted'>
                    <small>(+1) 234 5678 910</small>
                  </div>
                </a>
              </div>
            </div>

            <div className='col mb-4 mb-lg-0'>
              <div className='bg-white py-4 rounded-lg shadow-sm box-card-3'>
                <Link className='text-center text-dark text-decoration-none'>
                  <div className='mb-3'>
                    <FontAwesomeIcon
                      icon={faEnvelopeOpen}
                      className='h3 mb-0'
                    />
                  </div>
                  <div className='font-weight-bold mb-2'>Mail Us</div>
                  <div className='text-muted'>
                    <small>admin@mail.com</small>
                  </div>
                </Link>
              </div>
            </div>

            <div className='col mb-4 mb-lg-0'>
              <div className='bg-white py-4 rounded-lg shadow-sm box-card-3'>
                <Link className='text-center text-dark text-decoration-none'>
                  <div className='mb-3'>
                    <FontAwesomeIcon icon={faHome} className='h3 mb-0' />
                  </div>
                  <div className='font-weight-bold mb-2'>Visit Us</div>
                  <div className='text-muted'>
                    <small>Otaki, 32 Wilson Street</small>
                  </div>
                </Link>
              </div>
            </div>

            <div className='col mb-4 mb-lg-0'>
              <div className='bg-white py-4 rounded-lg shadow-sm box-card-3'>
                <Link className='text-center text-dark text-decoration-none'>
                  <div className='mb-3'>
                    <FontAwesomeIcon icon={faHeadset} className='h3 mb-0' />
                  </div>
                  <div className='font-weight-bold mb-2'>Support</div>
                  <div className='text-muted'>
                    <small>Live chart 24/7</small>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className='border-top my-5'></div>

          <div className='row'>
            <div className='col-12 col-lg-6 order-last order-lg-first mt-5 mt-lg-0'>
              <div className='bg-white p-4 shadow-sm rounded-lg'>
                <h5 className='mb-4'>Send as a message:</h5>
                <form>
                  <div className='mb-3'>
                    <input
                      className='input-group-text text-start w-100'
                      type='name'
                      placeholder='Your name'
                    />
                  </div>

                  <div className='mb-3'>
                    <input
                      className='input-group-text text-start w-100'
                      type='email'
                      placeholder='Email address'
                    />
                  </div>

                  <div className='mb-3'>
                    <input
                      className='input-group-text text-start w-100'
                      type='number'
                      placeholder='Phone number'
                    />
                  </div>

                  <div>
                    <textarea
                      as='textarea'
                      rows={6}
                      placeholder='Enter your message'
                      className='input-group-text text-start w-100'
                    />
                  </div>

                  <div>
                    {/* <Form.Check
                      type='checkbox'
                      label='Email prefered way to contact'
                    /> */}
                  </div>
                  <div className='mt-5'>
                    <button
                      block
                      type='submit'
                      className='btn btn-dark text-capitalize w-100'
                    >
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-12 col-lg-6 align-self-center'>
              <div className='col-lg-9 px-2'>
                <div className='mb-3 text-dark'>
                  <FontAwesomeIcon
                    icon={faLongArrowAltRight}
                    className='h3 mb-0'
                  />
                </div>

                <h3>Ready to start making busines with us?</h3>
                <p>
                  Rapidiously transform integrated processes via frictionless
                  paradigms. Intrinsicly productize proactive catalysts for
                  change via economically sound relationships.
                </p>
                <button
                  type='button'
                  className='btn btn-dark text-capitalize d-flex'
                  onClick={handleShow}
                >
                  Get quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {modal ? (
        <CustomModal>
          <header className='d-flex justify-content-between align-items-center mb-3'>
            <h6 className='mb-0 fw-bold text-dark'>Send New Request</h6>
            <button type='button' className='btn p-0' onClick={handleClose}>
              <h3 className='mb-0'>&times;</h3>
            </button>
          </header>
          <div className='text-center'>
            <form>
              <textarea
                className='form-control input-group-text text-start mb-3'
                rows='4'
                placeholder='Enter your message'
              ></textarea>
              <input
                className='form-control input-group-text text-start mb-3'
                type='text'
                placeholder='Name'
              />
              <div className='mt-4'>
                <button
                  type='submit'
                  className='btn btn-dark text-capitalize w-100'
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </CustomModal>
      ) : null}
    </main>
  );
};
