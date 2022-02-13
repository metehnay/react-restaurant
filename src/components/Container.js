import React from "react";
import "./Container.css";
import resturant from "../images/restaurant.jpg";

const Container = () => {
  return (
    <div className="container">
      <div className="container-md">
        <div className="img-container">
          <img src={resturant} className="rest" />
        </div>
        <div className="desc-section">
          <h1 className="title">ABOUT US</h1>
          <p className="desco">
            John Daniel's is a joint that goes beyond the bounds of average
            burger and fied chicken quality and settings. <br />
            <br />
            Experiments can lead to beautiful things. It’s the key that set the
            wheels in motion for John Daniel’s to open its first restaurant in
            Dubai, and the secret ingredient behind its unique chicken and
            burger menu.
            <br />
            <br />
            It took founder Eliezer Tan Semine hundreds of versions of his own
            homemade marinades, patties and dressings before he found the
            perfect combination to launch what is now known as John Daniel's
            trademark neighbourhood gourmet menu.
            <br />
            <br />
            And it works. What's on the plate is an inspirational cuisine fit
            for a multinational palate: the perfect mix of Asian-Western taste
            with a distinct Middle Eastern twist put together using quality and
            fresh ingredients.
            <br />
            <br />
            We opened our first restaurant in Port Saeed Area in April 2016 as
            we all know, the foot traffic in the area is very low and yet we
            still up and running. Most of our clients are repeat customers.
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container;
