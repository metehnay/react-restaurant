import React from "react";
import "./Header.css";
import logom from "../images/logom.svg";
import logom1 from "../images/logom1.svg";
import burger from "../images/kahuna-burger.png";
import { ImPhone } from "react-icons/im";
import { Link } from "react-scroll";
import Container from "./Container";

const Header = () => {
  return (
    <div className="header">
      <nav className="nav-menu">
        <ul className="ul-menu">
          <img src={logom} id="logo" />

          <li>
            {" "}
            <Link
              to="container"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link to="tit" spy={true} smooth={true} offset={50} duration={500}>
              Our Menu
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="delivery"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Delivery
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header-container">
        <img src={logom1} id="logom1" width="400px" />
        <div className="header-description">
          <h1 className="premium">PREMIUM BURGERS & CRISPY BROASTED CHICKEN</h1>
          <div className="button-container">
            <button className="btn1">
              {" "}
              <Link
                to="tit"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                View Menu
              </Link>
            </button>
            <button type="button" className="btn2">
              <ImPhone className="icon" />
              <Link
                to="phone"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Order from home
              </Link>
            </button>
          </div>
          <div className="info-container">
            <h3>Opening Times</h3>
            <h4>Everyday 1:00PM - 11:45PM</h4>
          </div>
          <div className="image-container">
            <img src={burger} id="burger" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
