import { useState } from "react";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import Testimonials from "./Testmonials/Testimonials";
import Footer from "../components/Footer/Footer";
import Navbar from "./Navbar/Navbar";

function Home() {
  
  return (
    <div className="home">
      <Navbar/>

      <div className="content">
        <div className="content__list">
          <div className="content__items">
            <div className="content__titles">
              <span className="content__title-1">
                Unleash the Future
                <br />
                with{" "}
              </span>
              <span className="content__title-2">Crazy Tech!</span>
            </div>
            <div className="content__description">
              Are you ready to embark on a journey through the world of
              cutting-edge innovation? At Crazy Tech, we're redefining the
              possibilities of technology, one breakthrough at a time.
            </div>
          </div>
          <div className="nav-btn">
            <button className="content__button">
              <span className="content__button--title">
                Let's Innovate Together
              </span>
            </button>
          </div>
        </div>

        <div className="content__elements">
          <img
            src="/Elements.svg"
            alt="Element fill with dots"
            width={66}
            height={103}
          />
        </div>
        <div className="content__tag">
          <div className="content__tag--img">
            <img src="/Tag.svg" alt="HTML Close Tag" width={54} height={56} />
          </div>
        </div>
        <div className="content__bracket">
          <div className="content__bracket--img">
            <img
              src="/Bracket.svg"
              alt="Dots Inside Curly Bracket"
              width={98.2}
              height={67.8}
            />
          </div>
        </div>
        <div className="content__frame">
          <img src="/Frame.svg" alt="Frame Tea Cup" width={73} height={101} />
        </div>
        <div className="content__ellipse">
          <img
            src="/Ellipse.svg"
            alt="Ellipse look like D shape"
            width={101.21}
            height={93.04}
          />
        </div>
        <div className="content__layer">
          <img
            src="/Layer.svg"
            alt="Layers of code"
            width={86.19}
            height={82.51}
          />
        </div>
      </div>

      <div className="customers">
        <div className="customers__list">
          <img src="/nokia.svg" alt="Nokia" width={156} height={26} />
          <img src="/Group.svg" alt="Group On" width={160} height={29} />
          <img
            src="/honeywell.svg"
            alt="Honey Well"
            width={181.67}
            height={35}
          />
          <img src="/abb.svg" alt="ABB" width={86.67} height={35} />
          <img src="/barclays.svg" alt="Bar Clays" width={195} height={35} />
        </div>
      </div>

      <div className="services">
        <div className="service__items">
          <div className="service__title">Services We Offer</div>
          <div className="service__list">
            <div className="services__list--area">
              <div className="service__card">
                <div className="service__card--area">
                  <div className="service__card--content">
                    <div className="service__card--img">
                      <img src="/developer_mode.svg" alt="Developer Mode" />
                    </div>

                    <div className="service__card--info">
                      <div className="service__card--info-title">
                        Web App Development
                      </div>
                      <div className="service__card--dsc">
                        We have dedicated full stack developers team for
                        front-end and back-end development.
                      </div>
                    </div>

                    <div className="service__card--list">
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Custom Software Development
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Web App Development
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Mobile App Development
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Application Re-Engineering
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          UI/UX Design
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          UI/UX Design
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service__card--component"></div>
                </div>
              </div>

              <div className="service__card">
                <div className="service__card--area">
                  <div className="service__card--content">
                    <div className="service__card--img">
                      <img src="/developer_mode.svg" alt="Developer Mode" />
                    </div>

                    <div className="service__card--info">
                      <div className="service__card--info-title">
                        Mobile App Development
                      </div>
                      <div className="service__card--dsc">
                        We have dedicated full stack developers team for
                        front-end and back-end development.
                      </div>
                    </div>

                    <div className="service__card--list">
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Custom Software Development
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Web App Development
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Mobile App Development
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Application Re-Engineering
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          UI/UX Design
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service__card--component"></div>
                </div>
              </div>

              <div className="service__card">
                <div className="service__card--area">
                  <div className="service__card--content">
                    <div className="service__card--img">
                      <img src="/developer_mode.svg" alt="Developer Mode" />
                    </div>

                    <div className="service__card--info">
                      <div className="service__card--info-title">
                        SEO & Social Media Marketing
                      </div>
                      <div className="service__card--dsc">
                        We have dedicated full stack developers team for
                        front-end and back-end development.
                      </div>
                    </div>

                    <div className="service__card--list">
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Custom Software Development
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Web App Development
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Mobile App Development
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Application Re-Engineering
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service__card--component"></div>
                </div>
              </div>

              <div className="service__card">
                <div className="service__card--area">
                  <div className="service__card--content">
                    <div className="service__card--img">
                      <img src="/developer_mode.svg" alt="Developer Mode" />
                    </div>

                    <div className="service__card--info">
                      <div className="service__card--info-title">
                        Graphic Design
                      </div>
                      <div className="service__card--dsc">
                        We have dedicated full stack developers team for
                        front-end and back-end development.
                      </div>
                    </div>

                    <div className="service__card--list">
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Logos and branded elements
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Business cards, letterhead & envelopes
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Posters, banners and signage
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Brochures, rack cards & booklets
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Email marketing graphics
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Social media & digital marketing Ads
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service__card--component"></div>
                </div>
              </div>

              <div className="service__card">
                <div className="service__card--area">
                  <div className="service__card--content">
                    <div className="service__card--img">
                      <img src="/developer_mode.svg" alt="Developer Mode" />
                    </div>

                    <div className="service__card--info">
                      <div className="service__card--info-title">
                        Cloud / DevOps Development
                      </div>
                      <div className="service__card--dsc">
                        We have dedicated full stack developers team for
                        front-end and back-end development.
                      </div>
                    </div>

                    <div className="service__card--list">
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Custom Software Development
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Web App Development
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Mobile App Development
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Application Re-Engineering
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          UI/UX Design
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          UI/UX Design
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service__card--component"></div>
                </div>
              </div>

              <div className="service__card">
                <div className="service__card--area">
                  <div className="service__card--content">
                    <div className="service__card--img">
                      <img src="/developer_mode.svg" alt="Developer Mode" />
                    </div>

                    <div className="service__card--info">
                      <div className="service__card--info-title">
                        Software QA & Testing
                      </div>
                      <div className="service__card--dsc">
                        We have dedicated full stack developers team for
                        front-end and back-end development.
                      </div>
                    </div>

                    <div className="service__card--list">
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Custom Software Development
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Web App Development
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Mobile App Development
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          Application Re-Engineering
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          UI/UX Design
                        </div>
                      </div>
                      <div className="service__card--list-item">
                        <img src="/check.svg" alt="Check" />
                        <div className="service__card--list-title">
                          UI/UX Design
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service__card--component"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-btn">
            <button type="button" className="view-button">
              <div className="button__title">View All Services</div>
            </button>
          </div>
        </div>
      </div>

      <section className="projects">
        <div className="projects-section">
          <div className="section-content">
            <div className="content-title">Our Projects at Crazy Tech</div>
            <div className="content-dsc">
              Explore Our Ventures into Emerging Technologies
            </div>
          </div>

          <div className="section-card">
            <Projects />
          </div>

          <div className="section-btn">
            <button type="button" className="btn-button">
              <div className="button-title">View All Projects</div>
            </button>
          </div>
        </div>
      </section>
      {/* ####################### Testimonials Section Start Here ######################### */}
      <section className="client-testimonials mt-4 mb-4">
        <Testimonials />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
