import React from "react";
import "./Navbar.css";
import logo from "./dendelion_logo(new).png";
import profile from "./profile.png";
import search from "./search.png";
import question from "./question.png";
import heart from "./heart.png";
import shoppingbag from "./shopping-bag.png";
import Footer from "./Footer";


const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="typeofperson">
      <a className="man" href="#">MAN</a>
      <a  className="woman" href="#">WOMAN</a>
      <a className="kid" href="#">KID</a>
        </div>
        <div className="logodiv">
        <img  className="logo" src={logo} alt="" />
        </div>
     

      <div className="profilediv">
        
        <img className="profileicon" src={profile} alt="" />
        <img className="searchicon" src={search} alt="" />
        <img className="questionicon" src={question} alt="" />
        <img className="hearticon" src={heart} alt="" />
        <img className="shoppingbagicon" src={shoppingbag} alt="" />
        
      </div>
    </nav>
    <Footer />
    </>
  );
};

export default Navbar;
