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
      <h1>Home Page</h1>
      <Carousel>
        <div>
          <h1>Performance opportunities</h1>
        </div>
        <div>
          <h1>Recording and studio work</h1>
        </div>
        <div>
          <h1>Teaching opportunities...</h1>
        </div>
        {/* <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" /> */}
      </Carousel>
    </section>
  );
}
