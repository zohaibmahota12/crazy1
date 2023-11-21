import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer class="footer-section">
        <div class="container-fluid">
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-3 mb-50 pe-0 ">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <a href="index.html">Crazy Tech</a>
                  </div>
                  <div class="footer-text">
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div class="footer-social-icon mt-4">
                    <a href="#">
                      <i class="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter twitter-bg"></i>
                    </a>

                    <a href="#">
                      <i class="fab fa-linkedin-in linkedin-in-bg"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-instagram instagram-bg"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div class="col-xl-4 col-lg-4 col-md-6 ">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <p>MAIN NAVIGATION</p>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About us </a>
                    </li>
                    <li>
                      <a href="#">Portfolio</a>
                    </li>
                    <li>
                      <a href="#">Services </a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                    <li>
                      <a href="#">Case studies </a>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div class="col-lg-3 col-md-3   col-6 footer-links ps-0 mt-4">
                <p className="ms-4">MAIN NAVIGATION</p>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Case studies </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-3  col-6 footer-links ps-0 mt-4">
                <p className="ms-4">OUR SERVICES</p>
                <ul>
                  <li>
                    <a href="#">Web App Development</a>
                  </li>
                  <li>
                    <a href="#">Mobile App Development</a>
                  </li>
                  <li>
                    <a href="#">SEO & Social Media Marketing</a>
                  </li>
                  <li>
                    <a href="#">Graphic Design </a>
                  </li>
                  <li>
                    <a href="#">Cloud / DevOps Development</a>
                  </li>
                  <li>
                    <a href="#">Software QA & Testing</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-3  col-6 footer-links ps-0 mt-4">
                <p className="ms-4">OUR SERVICES</p>
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-phone  me-2" aria-hidden="true"></i> (336)
                      520 0590
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-solid fa-envelope me-2"></i>
                      info@crazytech.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i class="fa-solid fa-location-dot me-2"></i> 414
                      Gallimore Dairy Rd‎ Greensboro, NC 27409
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
