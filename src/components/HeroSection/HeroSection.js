import React from "react";

function HeroSection() {
  return (
    <>
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
    </>
  );
}

export default HeroSection;
