import React from "react";

export const Terms = () => {
  return (
    <main className="bg-light py-5 mt-5">
      <div className="container">
        <div className="mb-4 px-lg-2">
          <h4 className="text-dark fw-bold"> Delivery & Returns Policy</h4>
        </div>
        <div className="row">
          <div className="col-lg-4 col-xl-3 d-none d-lg-block">
            <ul className="nav flex-column position-sticky" style={{ top: 80 }}>
              <li className="nav-item">
                <a href="#policy1" className="nav-link">
                  <small>Delivery Policy</small>
                </a>
              </li>
              <li className="nav-item">
                <a href="#policy2" className="nav-link">
                  <small>Returns Policy</small>
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <section id="policy1" className="mb-5">
              <h5 className="mb-4 fw-bold">Delivery Policy</h5>
              <p>All orders are dispatched via Royal Mail Standard Delivery.</p>
              <h3>Standard Delivery £3.95</h3>
              <h3>Free Delivery on all orders over £30</h3>
              <p>
                Orders placed before 3pm Monday to Friday are typically
                processed and dispatched on the same working day. Orders placed
                after 3pm Monday to Friday are processed and dispatched the
                following working day. Orders placed after 3pm on Friday will be
                dispatched on Monday, unless a Bank Holiday then Tuesday.
              </p>
              <p>
                You will receive an email informing you when your order has been
                processed and despatched to you. Please allow 3-5 working days
                for your order to arrive. If you haven’t received your order
                after 10 working days, please contact customer service using our
                contact form and we will be happy to help you.
              </p>
              <p>
                For more info about our delivery policy, please visit our terms
                and conditions page.
              </p>
            </section>
            <section id="policy2" className="mb-5">
              <h5 className="mb-4 fw-bold">Returns Policy</h5>
              <p>
                If you’re not completely satisfied with your purchase or you
                have changed your mind, please return the item(s) within 30 days
                of delivery using the returns label on the back of your receipt.
                Please state on the returns label the reason for return.
              </p>
              <p>
                To be eligible for a refund, the item(s) must be unused, in
                their original packaging and in a sellable condition. Return
                postage is at your own cost and risk.
              </p>
              <p>
                We will notify you once we have received your item(s). If your
                return is approved, you refund will be credited back to your
                original method of payment.
              </p>
              <p>
                We will notify you when we have processed your refund payment.
                Please allow 5-10 working days for your refund to be credited to
                your account.
              </p>
              <p>
                For more info about our returns policy, please visit our terms
                and conditions page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};
