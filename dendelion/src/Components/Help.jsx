import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import styles from "./Help.module.css";
import Footer from "./Footer";

const Help = () => {
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Simulate loading time (You can replace this with actual API calls)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Setting loading to false after 2 seconds (adjust as per your requirement)
  }, []);

  return (
    <>
      <Navbar />
      <h5 className={styles.headingtexthelp}>HELP</h5>

      {loading ? (
        <div className={styles.loadingText}><img src="https://media2.giphy.com/media/xT9DPldJHzZKtOnEn6/200w.webp?cid=ecf05e47yjbr7ay23k1r38hk0j4ztk7tkzro9u1luo1r9f06&ep=v1_gifs_search&rid=200w.webp&ct=g" alt="" /></div>
      ) : (
        <div className={styles.helpparent}>
          <div className={styles.fiersarthelp}>
            <h5 className={styles.needhelp}>NEED HELP?</h5>
            <div className={styles.needhelp1}>
              If you have any question or need help with your account, you may
              contact us to assist you.
            </div>
            <div className={styles.needhelp2}>
              We will respond to every message within 1 working day. Monday to
              Saturday, excluding national holidays.
            </div>

            <p className={styles.bigesstthing}>
              Please note that we have not authorized any person(s) to solicit
              monies from you or to solicit any personal information from you.
              We caution customers against sharing any personal, payment or
              sensitive information with unknown persons claiming to be from
              Dendelion as such sharing may lead to unauthorized use and/or
              fraud and consequent financial or other losses.{" "}
            </p>
          </div>

          <div className={styles.clientserviceparent}>
            <h4 className={styles.clientservice}>CLIENT SERVICE</h4>
            <div className={styles.clientphone}>Phone: 022- 48930XXXX</div>
            <div className={styles.clienttiming}>
              Monday to Saturday 10 AM to 7 PM. Non-Operational on Public
              Holidays
            </div>
            <div className={styles.clientmail}>
              E-mail: vermauttam104@gmail.com
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Help;
