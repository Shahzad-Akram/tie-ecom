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
  const [cardList, setCardList] = useState([]);
  const stripe = useStripe();
  const elements = useElements();



  const settleBrand =  (brand) =>{
   switch (brand) {
     case 'visa': return 'http://assets.stickpng.com/images/58482363cef1014c0b5e49c1.png';break;
     case 'mastercard': return 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/MasterCard_early_1990s_logo.png/1200px-MasterCard_early_1990s_logo.png';break;
     default:
       break;
   }

  }


  const saveCard = async () => {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      console.log(paymentMethod);
      setDetails(paymentMethod);
      cardList.push(paymentMethod.card);
      setCardList(cardList);
      console.log('card-list', cardList)
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
            {/* 
            cards data 
            - card-1 
            - card-2 
            */}
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
        {cardList === null ? (
          <h3>No Card Added</h3>
        ) : cardList.map(item => {
        return  <div className="form-group mb-3 mx-auto px-2" style={{ width: 200 }}>
          <button
            type="button"
            className="p-3 text-start rounded-lg btn btn-bt-box-1 w-100 h-100"
          >
            <div className="small">
              <img
                className="mb-2"
                height={15}
                width={30}
                src={settleBrand(item.brand)}
                alt=""
              />
              <div className="small text-black-50 mb-2">
                <small>Card Number</small>
              </div>
              <div className="small">
                <span className="mx-1">****</span>
                <span className="mx-1">****</span>
                <span className="mx-1">****</span>
                <span className="mx-1">{item.last4}</span>
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


        }) 
        }
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
