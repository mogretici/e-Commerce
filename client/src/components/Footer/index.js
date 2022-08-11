import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <img
            src="https://www.yollando.com/wp-content/uploads/visa.png"
            alt=""
          />
          <img
            src="https://www.yollando.com/wp-content/uploads/mastercard.png"
            alt=""
          />
          <img
            src="https://www.yollando.com/wp-content/uploads/american-express.png"
            alt=""
          />
          <img
            src="https://www.yollando.com/wp-content/uploads/discover.png"
            alt=""
          />
          <img
            src="https://www.yollando.com/wp-content/uploads/paypal.png"
            alt=""
          />
          <img
            src="https://www.yollando.com/wp-content/uploads/diners-club.png"
            alt=""
          />
          <img
            src="https://www.yollando.com/wp-content/uploads/jcb.png"
            alt=""
          />
          <img
            src="https://www.yollando.com/wp-content/uploads/unionpay.png"
            alt=""
          />
        </section>
        <section className="mb-4">
          <p>
            As Turkey's Computer Developer eCommerce, we set out as a brand that
            offers technological solutions to our users with its innovative
            merchandising approach and advanced website features in order to
            realize the retail sale of Gathering Computers, Gaming Notebooks and
            Gaming Products.
          </p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase" style={{color:"white"}}>eCommerce</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                  Career
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                  Our Stores
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                  Communication
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase" style={{color:"white"}}>Customer Service</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                  Cancellation and Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                  Warranty Conditions
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                  Frequently Asked Questions
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                  KVKK Illumination Text
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase" style={{color:"white"}}>Trading Guide</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                  How Can I Order?
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                  Order Tracking
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                  Payment Options
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                  Payment and Security
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase" style={{color:"white"}}>Follow Us</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    <MDBIcon fab icon="facebook-f" /> Facebook
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    <MDBIcon fab icon="twitter" /> Twitter
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    <MDBIcon fab icon="instagram" /> Instagram
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    <MDBIcon fab icon="youtube" /> Youtube
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright:
        <a className="text-white" href="https://github.com/mogretici">
          @mogretici
        </a>
      </div>
    </MDBFooter>
  );
}
