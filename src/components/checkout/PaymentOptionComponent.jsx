import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import { CustomModal } from "../custom/CustomModal";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export const PaymentOptionComponent = ({ setCard }) => {
  const [modal, setModal] = useState(false);
  const [cardDetails, setDetails] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const saveCard = async () => {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      setDetails(paymentMethod);
      setCard(paymentMethod);
      setModal(false);
    }
  };

  return (
    <div className="bg-light shadow-sm rounded-3 p-4 mb-4">
      {modal ? (
        <CustomModal>
          <header className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="mb-0 fw-bold">Enter card info</h6>
            <button
              type="button"
              className="btn p-0"
              onClick={() => setModal(false)}
            >
              <h3 className="mb-0">&times;</h3>
            </button>
          </header>
          <section>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "12px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />

            <button
              type="button"
              onClick={saveCard}
              className="mt-3 btn btn-dark w-100"
            >
              Save Card
            </button>
          </section>
        </CustomModal>
      ) : null}
      <div className="d-flex align-items-center mb-3">
        <span className="badge bg-dark rounded-circle">4</span>
        <h6 className="text-capitalize ms-2 mb-0 fw-bold">Payment Option</h6>
      </div>

      <div className="d-flex align-items-center mb-3">
        <h6 className="ms-2 mb-0 fw-bold text-capitalize">
          <small>Saved Cards</small>
        </h6>
        <button
          type="button"
          onClick={() => setModal(true)}
          className="btn p-1 ms-auto text-capitalize"
        >
          <small>+ Add Card</small>
        </button>
      </div>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1400,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 579,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tabletSmall: {
            breakpoint: {
              max: 990,
              min: 579,
            },
            items: 3,
            partialVisibilityGutter: 10,
          },
          tablet: {
            breakpoint: {
              max: 1400,
              min: 990,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {cardDetails === null ? (
          <h3>No Card Added</h3>
        ) : (
          <div className="form-group mb-3 mx-auto px-2" style={{ width: 200 }}>
            <button
              type="button"
              className="p-3 text-start rounded-lg btn btn-bt-box-1 w-100 h-100"
            >
              <div className="small">
                <img
                  className="mb-2"
                  height={15}
                  width={30}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAOCAYAAAB+UA+TAAAEhklEQVRIidWVXWxUVRSFv3XntkBpYUZqKQ0tqVgpPyp/wohEkBBMNKJGQ3wwhF8fTIQHxCCUONopiJEYNTFRQw3+oOIT6pORiDxACzEoodCIRmyLEIl2qKPT6cy924e5tLRTEI01cSf35uass9de69xz9hHAiLmx8cMU+kbSdQwIg04ZL3Y21W0biP2fwgEowJk/mEkAQQTREI42rPhvpf274eRezuS/nCn/riFXM4ThAsih16jTk8LJ9uRNzIwpvZmYOcTkD0YUjtbvk7S0/6h91tnl3UdLLJ/wWuPt8yPJZM4hSi7jbUF6h5WVO66a23huCmRfwzjiBIlTLmFOJo3jZfKedE3NDKra41filFgEYNhRsJZgdElklPvYPzYJkMneEphMAV8Cp0FTMZ5nd8dNV0/OzgQWICt2YG/IUG2vYN/Lm+6HXFIzbgVTdDC6klmxUlAxQKLLW9R5eOs0M44DmFlOzKxY0eg58dksjLl/y6j8nDbjKKsqF+LTpyHjlwPw1s/lNP40k71W2D/ZAl9qdUvmfDdREMqNG8L6m5RD4p57obAQ4JfBtLiuG4ix87TEktyxo0R+TxiETK2RufHHTfaSRGG42z1DNP65xBrM6nxU5IjNZrySaKpbDxCJ1r+BtNawlxMondNKKwAhm4opVzhUcpxdbfuwdO7I/NZ+isb2TmAePjUYtQgwa3VD8vsakZc1b0SRAMwJkQ1H6Fq8GBsTCRaIg4MZ9aVaBwNRHI7WH8DLjEOqwkiRzX5KofsjpgzGCxKVwBoAHzttpjbEZsFDwPrwvPidGGsx2hN/DN+C2R4kMO6msf0AxrSg7CEs+TTSUrAzmHaDlgDzABg1vo1key0ICtxWV/Q1ouyY0ubOZQ8Muj3Bvsfx3hwMERZwqFhigUHa4KD59qwKQg0CTPZE4vDW1wHC0fhEiTmeEzqZPLTlRCQab0dUhm9rmI5vuw3zfdMyjm/8HT0yOSgyAZiA8SvifTw9RchvwUjjFNzFqnFnaDy7C/w2zH4APIwbwdIsr2hzzbHJIrcVsmPLUvn+7BzSftzCDSwv776C0VoQ5vNcornumcux8O3xnQCGjgGMnr89QtabYOAlD9WcCgjeAzbJ9feBqnzTtq7muib2Wohkxw0AOKHZrKj4qpe48WwlaBTiAiPL23Na/WkIkE7R1VGNo2EYxyB3vfT+Ua+8rOgyg0+yumrnYMby1kKqFeBLTfkgXyOmO9iecLT+XTzvfomxZnwLyzwA8/wPFHI2gaqAExeHZ3OLlTw/CQhhlu5nEkA9FzA3BVxPsuMjGjtaMFsfoCdxVEvuOLUCODImXcrNlpWW9RG5X1yLycBMNUbK8zLHBkK+shswPpSpAvEoPh8HUEtfurrMzAfrzmbsYQ7EsrlkrzoQ05xXc2V1N2YbAQ94ELNZiE9yhGrB/ODqsZMAikTrtxgUmOOkLq5e3oCCDpwcP5x1QccbylgYc8Pp0BGhGWa2LtG09dWhKKPer11tFUgdgDA6WF1ZORQFB0ZkbnwTDtsN9icO1y0eqjp/Anh31Sy27YKTAAAAAElFTkSuQmCC"
                  alt=""
                />
                <div className="small text-black-50 mb-2">
                  <small>Card Number</small>
                </div>
                <div className="small">
                  <span className="mx-1">****</span>
                  <span className="mx-1">****</span>
                  <span className="mx-1">****</span>
                  <span className="mx-1">{cardDetails.card.last4}</span>
                </div>
                {/* <div className="small">
                  <small>Jhon Doe Smith</small>
                </div> */}
              </div>
              <div className="bt-box-1__item ">
                <button
                  type="button"
                  className="p-0 rounded-circle text-white d-flex align-items-center justify-content-center btn btn-danger"
                  style={{ height: 18, width: 18 }}
                >
                  <FontAwesomeIcon size="xs" icon={faTimes} />
                </button>
              </div>
            </button>
          </div>
        )}
      </Carousel>

      <div className="ms-2">
        <h6>Do you have a voucher?</h6>
        <div className="row">
          <div className="col-9 col-md-6">
            <input className="form-control" type="text" />
          </div>
          <div className="col-3">
            <button className="btn btn-dark">Apply</button>
          </div>
        </div>
      </div>

      <div className="ms-2 my-3 text-black-50 small">
        <small> By making this purchase you agree to our</small>
        <a href="/" className="btn-link ms-1 text-decoration-none">
          <small>terms and conditions.</small>
        </a>
      </div>
    </div>
  );
};
