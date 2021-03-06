import "./HomePage.scss";
import React from "react";
import Carousel from "../../components/Carousel/Carousel";

export default function HomePage() {
  return (
    <section className="home">
      <h2 className="home__header">Connect with musicians in your area</h2>
      <Carousel>
        <div className="home__caro-one">
          <h3 className="home__caro-one-header">Performance opportunities</h3>
        </div>
        <div className="home__caro-two">
          <h3 className="home__caro-two-header">Recording and studio work</h3>
        </div>
        <div className="home__caro-three">
          <h3 className="home__caro-three-header">Teaching opportunities</h3>
        </div>
      </Carousel>
    </section>
  );
}
