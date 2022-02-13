import React, { useState, useEffect } from "react";
import "./MenuList.css";
import menuz from "../images/menu.jpg";
import burger1 from "../images/burger1.jpg";
import burger2 from "../images/burger2.jpg";
import burger3 from "../images/burger3.jpg";
import burger4 from "../images/burger4.jpg";
import kola from "../images/kola.jpg";
import pepsi from "../images/pepsi.jpg";
import icecream from "../images/ice-cream.jpg";
import baklava from "../images/baklava.jpg";

const MenuList = () => {
  const [menu, setMenu] = useState("");
  const [act, setAct] = useState(false);
  const [drinks, setDrinks] = useState(false);
  const [burgers, setBurgers] = useState(false);
  const [deserts, setDeserts] = useState(false);

  const meals = () => {
    setAct(true);
    setBurgers(false);
    setDeserts(false);
    setDrinks(false);
    setMenu(
      <>
        <div className="menu1">
          <div className="img-menu">
            <img src={menuz} className="menu" alt="menu" />
          </div>
          <h2>MAC BURGER</h2>
          <p>
            Double quarter pound pure fresh house-made cheeseburger, topped with
            smoked turkey bacon with overflowing cheese sauce on a bed of fresh
            veggies with our signature JD's sauce
          </p>
          <div className="price">
            <h4>25$</h4>
          </div>
        </div>
      </>
    );
  };

  const desertMenu = () => {
    setAct(false);
    setDrinks(false);
    setBurgers(false);
    setDeserts(true);
    setMenu(desertt);
  };

  const burgerMenu = () => {
    setAct(false);
    setDrinks(false);
    setDeserts(false);
    setBurgers(true);
    setMenu(
      <>
        <div className="menu1">
          <div className="img-menu">
            <img src={menuz} className="menu" alt="menu" />
          </div>
          <h2>MAC BURGER</h2>
          <p>
            Double quarter pound pure fresh house-made cheeseburger, topped with
            smoked turkey bacon with overflowing cheese sauce on a bed of fresh
            veggies with our signature JD's sauce
          </p>
          <div className="price">
            <h4>25$</h4>
          </div>
        </div>
        <div className="menu1">
          <div className="img-menu">
            <img src={burger2} className="menu" alt="menu" />
          </div>
          <h2>JUST BURGER</h2>
          <p>
            Double quarter pound pure fresh house-made cheeseburger, topped with
            smoked turkey bacon with overflowing cheese sauce on a bed of fresh
            veggies with our signature JD's sauce
          </p>
          <div className="price">
            <h4>18$</h4>
          </div>
        </div>
        <div className="menu1">
          <div className="img-menu">
            <img src={burger1} className="menu" alt="menu" />
          </div>
          <h2>BIG MAC</h2>
          <p>
            Double quarter pound pure fresh house-made cheeseburger, topped with
            smoked turkey bacon with overflowing cheese sauce on a bed of fresh
            veggies with our signature JD's sauce
          </p>
          <div className="price">
            <h4>14$</h4>
          </div>
        </div>
        <div className="menu1">
          <div className="img-menu">
            <img src={burger3} className="menu" alt="menu" />
          </div>
          <h2>GOOD BURGER</h2>
          <p>
            Double quarter pound pure fresh house-made cheeseburger, topped with
            smoked turkey bacon with overflowing cheese sauce on a bed of fresh
            veggies with our signature JD's sauce
          </p>
          <div className="price">
            <h4>12$</h4>
          </div>
        </div>
      </>
    );
  };

  const drinkMenu = () => {
    setAct(false);
    setDrinks(true);
    setBurgers(false);
    setDeserts(false);

    setMenu(
      <>
        <div className="menu1">
          <div className="img-menu">
            <img src={kola} className="menu" alt="menu" />
          </div>
          <h2>PEPSI</h2>
          <p>
            Double quarter pound pure fresh house-made cheeseburger, topped with
            smoked turkey bacon with overflowing cheese sauce on a bed of fresh
            veggies with our signature JD's sauce
          </p>
          <div className="price">
            <h4>25$</h4>
          </div>
        </div>
        <div className="menu1">
          <div className="img-menu">
            <img src={pepsi} className="menu" alt="menu" />
          </div>
          <h2>COCA COLA</h2>
          <p>
            Double quarter pound pure fresh house-made cheeseburger, topped with
            smoked turkey bacon with overflowing cheese sauce on a bed of fresh
            veggies with our signature JD's sauce
          </p>
          <div className="price">
            <h4>18$</h4>
          </div>
        </div>
      </>
    );
  };

  useEffect(() => {
    setMenu(
      <>
        <div className="menu1">
          <div className="img-menu">
            <img src={menuz} className="menu" alt="menu" />
          </div>
          <h2>MEGABITE</h2>
          <p>
            Double quarter pound pure fresh house-made cheeseburger, topped with
            smoked turkey bacon with overflowing cheese sauce on a bed of fresh
            veggies with our signature JD's sauce
          </p>
          <div className="price">
            <h4>25$</h4>
          </div>
        </div>
        <div className="menu1">
          <div className="img-menu">
            <img src={burger2} className="menu" alt="menu" />
          </div>
          <h2>JUST BURGER</h2>
          <p>
            Double quarter pound pure fresh house-made cheeseburger, topped with
            smoked turkey bacon with overflowing cheese sauce on a bed of fresh
            veggies with our signature JD's sauce
          </p>
          <div className="price">
            <h4>18$</h4>
          </div>
        </div>
        <div className="menu1">
          <div className="img-menu">
            <img src={burger1} className="menu" alt="menu" />
          </div>
          <h2>BIGGY MAC</h2>
          <p>
            Double quarter pound pure fresh house-made cheeseburger, topped with
            smoked turkey bacon with overflowing cheese sauce on a bed of fresh
            veggies with our signature JD's sauce
          </p>
          <div className="price">
            <h4>14$</h4>
          </div>
        </div>
        <div className="menu1">
          <div className="img-menu">
            <img src={burger3} className="menu" alt="menu" />
          </div>
          <h2>DOUBLE BURGER</h2>
          <p>
            Double quarter pound pure fresh house-made cheeseburger, topped with
            smoked turkey bacon with overflowing cheese sauce on a bed of fresh
            veggies with our signature JD's sauce
          </p>
          <div className="price">
            <h4>12$</h4>
          </div>
        </div>
        <div className="menu1">
          <div className="img-menu">
            <img src={burger4} className="menu" alt="menu" />
          </div>
          <h2>MAC N CHEESE</h2>
          <p>
            Double quarter pound pure fresh house-made cheeseburger, topped with
            smoked turkey bacon with overflowing cheese sauce on a bed of fresh
            veggies with our signature JD's sauce
          </p>
          <div className="price">
            <h4>25$</h4>
          </div>
        </div>
      </>
    );
  }, []);

  const desertt = (
    <>
      <div className="menu1">
        <div className="img-menu">
          <img src={icecream} className="menu" alt="menu" />
        </div>
        <h2>Ice Cream</h2>
        <p>
          Double quarter pound pure fresh house-made cheeseburger, topped with
          smoked turkey bacon with overflowing cheese sauce on a bed of fresh
          veggies with our signature JD's sauce
        </p>
        <div className="price">
          <h4>25$</h4>
        </div>
      </div>
      <div className="menu1">
        <div className="img-menu">
          <img src={baklava} className="menu" alt="menu" />
        </div>
        <h2>BAKLAVA</h2>
        <p>
          Double quarter pound pure fresh house-made cheeseburger, topped with
          smoked turkey bacon with overflowing cheese sauce on a bed of fresh
          veggies with our signature JD's sauce
        </p>
        <div className="price">
          <h4>13$</h4>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="title-container">
        {" "}
        <h1 className="tit">MENU</h1>
      </div>
      <div className="menu-container">
        <div className="buttons-container">
          <button
            className={burgers ? "btn btn-active" : "btn"}
            onClick={() => burgerMenu()}
          >
            Burgers
          </button>
          <button
            className={drinks ? "btn btn-active" : "btn"}
            onClick={() => drinkMenu()}
          >
            Drinks
          </button>
          <button
            className={deserts ? "btn btn-active" : "btn"}
            onClick={() => desertMenu()}
          >
            Deserts
          </button>
          <button
            className={act ? "btn btn-active" : "btn"}
            onClick={() => meals()}
          >
            Value Meals
          </button>
          <button
            className="btn"
            onClick={() =>
              alert("PRESS DRINKS OR DESERTS FOR THE TEST THIS SECTION")
            }
          >
            Chicken
          </button>
          <button
            className="btn"
            onClick={() =>
              alert("PRESS DRINKS OR DESERTS FOR THE TEST THIS SECTION")
            }
          >
            Sides
          </button>
          <button
            className="btn"
            onClick={() =>
              alert("PRESS DRINKS OR DESERTS FOR THE TEST THIS SECTION")
            }
          >
            Extras
          </button>
        </div>
        <div className="menum-container">
          <div className="menu-item">{menu}</div>
        </div>
      </div>
    </>
  );
};

export default MenuList;
