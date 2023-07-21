import React, { useContext, useState, useEffect } from "react";
import styles from "./Signup.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AuthContext } from "./AuthContextProvider";
import { useNavigate } from "react-router-dom";

let Signup = () => {
  let navigate = useNavigate();
  let { setIsLogin, isLogin,setLoginEmail } = useContext(AuthContext);
  const [email, setEmail] = useState(""); // State variable for email input
  const [userData, setUserData] = useState(null); // State variable for user data

  // Function to handle email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Function to handle user logout
  const handleLogout = () => {
    setIsLogin(false);
    setUserData(null);
  };

  // Fetch user data based on email when isLogin changes or component mounts
  useEffect(() => {
    if (isLogin) {
      fetch(
        `https://dendelion-54b09-default-rtdb.firebaseio.com/login.json`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            const loginKeys = Object.keys(data);
            const lastLoginKey = loginKeys[loginKeys.length - 1]; 
            const lastLogin = data[lastLoginKey].Useremail;
            setUserData(lastLogin);
          } else {
            setUserData(null);
          }
        })
        .catch((error) => {
          console.log("Error fetching user data:", error);
        });
    }
  }, [isLogin, email]);

  // Function to handle signup/signin
  let handleSignup = () => {
    fetch("https://dendelion-54b09-default-rtdb.firebaseio.com/login.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Useremail: email,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Signup failed");
        }
        return res.json();
      })
      .then((data) => {
        setLoginEmail(email)
        setIsLogin(true);
        navigate("/");
      })
      .catch((error) => {
        console.log("Error signing up:", error);
      });
  };
  

  return (
    <>
      <Navbar />
      {!isLogin ? (
        <div className={styles.signupparent}>
          <h2 className={styles.hithere}>Hi There!</h2>
          <div>
            <p className={styles.para}>SignIn Or SignUp</p>
          </div>
          <div>
            <input
              className={styles.inputsignup}
              type="text"
              placeholder="E-Mail*"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          {email && (
            <button className={styles.button} onClick={handleSignup}>
              SigUp or SignIn
            </button>
          )}
        </div>
      ) : (
        <div className={styles.profile}>
          <h2 className={styles.profileTitle}>Profile</h2>
          {userData ? (
            <div className={styles.profileContent}>
              <p>
                Email:{" "}
                <span className={styles.profileData}>{userData}</span>
              </p>
              <button className={styles.logoutButton} onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
           <img src="https://media2.giphy.com/media/xT9DPldJHzZKtOnEn6/200w.webp?cid=ecf05e47yjbr7ay23k1r38hk0j4ztk7tkzro9u1luo1r9f06&ep=v1_gifs_search&rid=200w.webp&ct=g" alt="" />
          )}
        </div>
      )}
      <Footer />
    </>
  );
};

export default Signup;
