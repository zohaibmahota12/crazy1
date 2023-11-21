import React from "react";

function OurProjects() {
  return (
    <>
      <section className="projects">
        <div className="projects-section">
          <div className="section-content">
            <div className="content-title">Our Projects at Crazy Tech</div>
            <div className="content-dsc">
              Explore Our Ventures into Emerging Technologies
            </div>
          </div>

          <div className="section-card">
            <div className="card">
              <div className="card-image">
                <img src="/Horizob.png" alt="Horizob - Job Finder" />
              </div>
              <div className="card-content">
                <div className="content-section">
                  <div className="section-text">
                    <div className="text-title">
                      HORIZOB - Job Finder Landing Page Exploration
                    </div>
                    <div className="text-dsc">
                      An exploration of a Job finder landing page called
                      HORIZOB. This helps users to search for jobs.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <img src="/Tappa.png" alt="Tappa - Website Design" />
              </div>
              <div className="card-content">
                <div className="content-section">
                  <div className="section-text">
                    <div className="text-title">
                      Tappa! - Website design messenger application
                    </div>
                    <div className="text-dsc">
                      In the realm of startups and scaling companies, the
                      trifecta of brand identity, a promotional website, and a
                      seamless digital product.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <img src="/Banking.png" alt="Simple Banking Landing Page" />
              </div>
              <div className="card-content">
                <div className="content-section">
                  <div className="section-text">
                    <div className="text-title">
                      Simple Banking Landing Page
                    </div>
                    <div className="text-dsc">
                      An exploration of a Job finder landing page called
                      HORIZOB. This helps users to search for jobs.Today we want
                      to share with you some more content from the concepts done
                      for a bank app that we worked on. Hope you will like it!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <img src="/UI8.png" alt="UI8 - Landing Page Design" />
              </div>
              <div className="card-content">
                <div className="content-section">
                  <div className="section-text">
                    <div className="text-title">
                      UI8 - Landing page design for SaaS startups
                    </div>
                    <div className="text-dsc">
                      UI8 is a marketplace curated by top industry leaders to
                      bring you the best resources and solutions for your design
                      process.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-btn">
            <button type="button" className="btn-button">
              <div className="button-title">View All Projects</div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurProjects;
