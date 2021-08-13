import "./Container.css";
import React from "react";
import ControlledCarousel from "../../features/carousel/Carousel";

const Container = () => {
  return (
    <div className="container-body">
      <h1>ברוכים הבאים </h1>
      <ControlledCarousel className="carousel-container" />
    </div>
  );
};

export default Container;
