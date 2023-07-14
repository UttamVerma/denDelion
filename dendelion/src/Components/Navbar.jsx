import React, { useState } from "react";
import "./Navbar.css";
import logo from "./dendelion_logo(new).png";
import profile from "./profile.png";
import search from "./search.png";
import question from "./question.png";
import heart from "./heart.png";
import shoppingbag from "./shopping-bag.png";
// import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  let navigate=useNavigate();
  let home=()=>{
    navigate("/")
  }
  let [showinput, setshowinput] = useState(false);
  let inputhandler = () => {
    setshowinput(true);
  };
  let helpNavigator=()=>{
    navigate("/help");
  }
  let manNavigator=()=>{
    navigate("/Man");
  }
  let WomanNavigator=()=>{
    navigate("/Woman");
  }
  let KidNavigator=()=>{
    navigate("/Kid");
  }
  let signupNavigator=()=>{
    navigate("/signup");
  }
  let cartNavigator=()=>{
    navigate("/Cart");
  }
  let WishlistNavigator=()=>{
    navigate("/Wishlist");
  }
  return (
    <>
      {showinput ? (
        <div className="parentsearchinput">
          <input
            className="searchinput"
            type="text"
            placeholder="What are you looking for ?"
          />
          <p className="cancel" onClick={() => setshowinput(false)}>
            X
          </p>
        </div>
      ) : (
        ""
      )}
      <nav className="navbar">
        <div className="typeofperson">
          <a className="man" href="#" onClick={manNavigator}>
            MAN
          </a>
          <a className="woman" href="#" onClick={WomanNavigator}>
            WOMAN
          </a>
          <a className="kid" href="#" onClick={KidNavigator}>
            KID
          </a>
        </div>
        <div className="logodiv">
          <img className="logo" src={logo} alt="" onClick={home}  />
        </div>

        <div className="profilediv">
          <img className="profileicon" src={profile} alt="" onClick={signupNavigator} />
          <img
            className="searchicon"
            src={search}
            alt=""
            onClick={inputhandler}
          />
          <img className="questionicon" src={question} alt="" onClick={helpNavigator}/>
          <img className="hearticon" src={heart} alt="" onClick={WishlistNavigator}/>
          <img className="shoppingbagicon" src={shoppingbag} alt="" onClick={cartNavigator} />
        </div>
      </nav>
      {/* <Footer /> */}
    </>
  );
};

export default Navbar;
