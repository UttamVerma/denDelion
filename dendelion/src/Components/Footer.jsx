import "./Footer.css";
import youtube from "./youtube.png";
import instagram from "./instagram.png";
import facebook from "./facebook.png";
import { useState } from "react";

let Footer = () => {
  let [email,setEmail]=useState("");
  let handleSubmit=()=>{
    setEmail("");
  }
  return (
    <>
      <div className="footer">
        <div className="firstpartfooter">
          <h5 className="headingtext">Sign up to never miss an update.</h5>
          <input
            className="inputfooter"
            type="text"
            placeholder="Enter your Email address*"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            spellCheck="false"
            data-ms-editor="true"
          />
          <div className="gender">
            <div className="radiobuttonwrapper">
              <input
                type="radio"
                id="formMaleId"
                name="gender"
                value="male"
                className="gender-radio is-valid"
              />
              <label id="man">Men</label>
            </div>
            <div className="radiobuttonwrapper">
              <input
                type="radio"
                id="formFemaleId"
                name="gender"
                value="female"
                className="gender-radio is-valid"
              />
              <label id="woman">Women</label>
            </div>
          </div>
          <p className="privacypolicynewsletter">
            By clicking Sign up you have read and agreed to our{" "}
            <a href="" className="more">
              <span className="learnmoretext">
                <u>privacy policy</u>
              </span>
            </a>
          </p>
          <button className="signupbutton" onClick={handleSubmit}><b>SIGN UP</b></button>
        </div>
        <div className="secondpartfooter">
          <h4 className="socialheader">Connect with us on social media</h4>
          <div className="social-icons">
          <img className="social-icon" src={instagram} alt="Instagram" />
            <img className="social-icon" src={facebook} alt="Facebook" />
            <img className="social-icon" src={youtube} alt="YouTube" />
          </div>
        </div>
      </div>
      <p  className="copyright">
        Copyright ©️2021 Dendelion Fashion India Pvt.Ltd
      </p>
    </>
  );
};

export default Footer;
