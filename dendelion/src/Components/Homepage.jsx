import styles from "./Homepage.module.css";
import Navbar from "./Navbar";
import homepageimage from "./hpageimage.gif";
import Slider from "./SliderNavbar";

let Homepage = () => {
  return (
    <>
      <Slider />
      <Navbar />

      <div className={styles.homepagegif}>
        <img className={styles.homepageiamge} src={homepageimage} alt="" />
        <div className={styles.buttoncontainer}>
          <a className={styles.imagebutton}>SHOP MAN</a>
          <a className={styles.imagebutton1}>SHOP WOMAN</a>
        </div>
      </div>

      <div className={styles.fyf}>
        <div>
          <h2 className={styles.headingtext}>FIND YOUR FIT</h2>
          <a href="#" id={styles.man}>
            <u>MAN</u> <span id={styles.midman}>|</span>{" "}
            <span id={styles.woman}>WOMAN</span>
          </a>
          <div class={styles.deskpara}>
            <p>
              Find your next denim among a wide range of timeless denim washes,
              icons of low impact style, better for people and the planet.
            </p>
          </div>
        </div>
        <div className={styles.fyf2}>
          <div classname={styles.tapered}>
            {" "}
            <img
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/banner/1681109346Diesel_resizing_-12.webp?compress=true&q=70"
              alt=""
              className={styles.image}
            />
             <h2 id={styles.fittypes}>TAPERED</h2>
          </div>
          <div classname={styles.tapered}>
            {" "}
            <img
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/banner/1681109489Diesel_resizing_-10.webp?compress=true&q=70"
              alt=""
              className={styles.image}
            />
            <h2 id={styles.fittypes}>STRAIGHT</h2>
          </div>
          <div classname={styles.tapered}>
            {" "}
            <img
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/banner/1681109657Diesel_resizing_-09.webp?compress=true&q=70"
              alt=""
              className={styles.image}
            />
            <h2 id={styles.fittypes}>SLIM</h2>
          </div>
          <div classname={styles.tapered}>
            {" "}
            <img
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/banner/1681109806Diesel_resizing_-14.webp?compress=true&q=70"
              alt=""
              className={styles.image}
            />
            <h2 id={styles.fittypes}>BOOTCUT</h2>
          </div>
          <div classname={styles.tapered}>
            {" "}
            <img
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/banner/1681109711Diesel_resizing_-11.webp?compress=true&q=70"
              alt=""
              className={styles.image}
            />
            <h2 id={styles.fittypes}>SKINNY</h2>
          </div>
        </div>
      </div>

      <div className={styles.diesellib}>
        <img className={styles.diesellibimage} src="https://dibackend.dieselindia.com/cms_images/1682423620Desktop.webp" alt="" />
        <div id={styles.backrgroundcolor}><a className={styles.showresponse} href="#">SHOW RESPONSIBLE COLLECTION</a></div>
      </div>

    </>
  );
};
export default Homepage;
