import { useState } from "react";
import { Link } from "react-router-dom";

import Testimonials from "./Testmonials/Testimonials";
import Footer from "../components/Footer/Footer";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import Customers from "./Customers/Customers";

import OurProjects from "./Ourprojects/OurProjects";
import Myservices from "./Ourservices/OurServices";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <Customers />
      <Myservices />
      <OurProjects />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
