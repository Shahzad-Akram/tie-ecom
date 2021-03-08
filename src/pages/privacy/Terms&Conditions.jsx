import React from "react";

export const Terms = () => {
  return (
    <main className="bg-light py-5 mt-5">
      <div className="container">
        <div className="mb-4 px-lg-2">
          <h4 className="text-dark fw-bold">Terms & Conditions</h4>
        </div>
        <div className="row">
          <div className="col-lg-4 col-xl-3 d-none d-lg-block">
            <ul className="nav flex-column position-sticky" style={{ top: 80 }}>
              <li className="nav-item">
                <a href="#policy1" className="nav-link">
                  <small>PURPOSE</small>
                </a>
              </li>
              <li className="nav-item">
                <a href="#policy2" className="nav-link">
                  <small>WHAT IS PERSONAL DATA?</small>
                </a>
              </li>
              <li className="nav-item">
                <a href="#policy3" className="nav-link">
                  <small>PERSONAL DATA COLLECTED</small>
                </a>
              </li>
              <li className="nav-item">
                <a href="#policy4" className="nav-link">
                  <small>ACCESSING YOUR PERSONAL DATA</small>
                </a>
              </li>
              <li className="nav-item">
                <a href="#policy5" className="nav-link">
                  <small>COMPLAINTS</small>
                </a>
              </li>
              <li className="nav-item">
                <a href="#policy6" className="nav-link">
                  OWNER AND DATA CONTROLLER
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <section id="policy1" className="mb-5">
              <h5 className="mb-4 fw-bold">Purpose</h5>
              <p>
                Little & Big is committed to protecting your privacy because we
                are committed to valuing people. Our Privacy Policy below sets
                out how your personal information is collected, used and
                protected. The Demo Country Privacy Principles also apply to us.
              </p>
              <p>
                This Privacy Policy describes our policies and procedures on the
                collection, holding, use and disclosure of your personal
                information and should be read together with our Terms and
                Conditions. By providing your personal information you consent
                to our collection, use and disclosure of that information in
                accordance with this Privacy Policy.
              </p>
            </section>
            <section id="policy2" className="mb-5">
              <h5 className="mb-4 fw-bold">What is Personal Data?</h5>
              <p>
                When used in this Policy, "personal information" has the meaning
                given in the Privacy Act. Generally, it means any information or
                an opinion that could be used to identify you.
              </p>
            </section>
            <section id="policy3" className="mb-5">
              <h5 className="mb-4 fw-bold">Personal Data Collected</h5>
              <p>
                Personal Data collected for the following purposes and using the
                following services:
              </p>
              <ul className="nav flex-column ps-2 ps-md-4">
                <li className="nav-item">
                  Google Analytics: Cookies; Usage Data
                </li>
                <li className="nav-item">
                  Contact form: email address; first name; phone number
                </li>
                <li className="nav-item">
                  Mailing list or newsletter: email address; first name
                </li>
              </ul>
            </section>
            <section id="policy4" className="mb-5">
              <h5 className="mb-4 fw-bold">Accessing your Personal Data</h5>
              <p>
                You may request access to your personal information collected by
                us, and ask that we correct that personal information. You can
                ask for access or correction by contacting us and we will
                usually respond within 30 days. If we refuse to give you access
                to, or correct, your personal information, we will notify you in
                writing setting out the reasons.
              </p>
            </section>
            <section id="policy5" className="mb-5">
              <h5 className="mb-4 fw-bold">Complaints</h5>
              <p>
                If you believe your privacy has been breached or you have a
                complaint about how we have handled your personal information,
                please contact us in writing. We will respond within a
                reasonable period (usually within 30 days).
              </p>
            </section>
            <section id="policy6" className="mb-5">
              <h5 className="mb-4 fw-bold">Owner and Data Controller</h5>

              <ul className="nav flex-column">
                <li className="nav-item">The Commons</li>
                <li className="nav-item">20-40 demo St,</li>
                <li className="nav-item">Jon doe NSW 2008</li>
                <li className="nav-item">Country</li>
              </ul>
              <p>Email: demo@demo.com</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};
