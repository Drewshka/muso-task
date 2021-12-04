import { Link } from "react-router-dom";
import "./HomePage.scss";
import React from "react";
import Carousel from "../../components/Carousel/Carousel";
// import Photo from "../../assets/images/Upload-video-bike.jpg";
// import axios from "axios";
// const apiUrl = "http://localhost:8080";

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
        {/* <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" /> */}
      </Carousel>
    </section>
  );
}
