import React from "react";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the world, One Country at a Time.
          </h1>
          <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries fo find the details you.
          </p>
          <NavLink to="/country">
            <button className="btn btn-blue btn-inline bg-white-box">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>
        <div className="hero-image">
          <img
            src="/images/world.png"
            alt="world beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
