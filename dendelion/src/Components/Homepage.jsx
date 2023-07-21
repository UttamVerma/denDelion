import styles from "./Homepage.module.css";
import Navbar from "./Navbar";
import homepageimage from "./hpageimage.gif";
import Slider from "./SliderNavbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

let Homepage = () => {
  let navigate = useNavigate();

  let manNavigator = () => {
    navigate("/Man");
  };
  let WomanNavigator = () => {
    navigate("/Woman");
  };
  let TopwearNavigator = () => {
    navigate("/Topwear");
  };
  let WatchesNavigator = () => {
    navigate("/Watches");
  };

  return (
    <>
      <Slider />
      <Navbar />

      <div className={styles.homepagegif}>
        <img className={styles.homepageiamge} src={homepageimage} alt="" />
        <div className={styles.buttoncontainer}>
          <a className={styles.imagebutton} onClick={manNavigator}>
            SHOP MAN
          </a>
          <a className={styles.imagebutton1} onClick={WomanNavigator}>
            SHOP WOMAN
          </a>
        </div>
      </div>

      <div className={styles.fyf}>
        <div>
          <h2 className={styles.headingtext}>FIND YOUR FIT</h2>
          <a href="#" id={styles.man}>
            <u>MAN</u> <span id={styles.midman}>|</span>{" "}
            <span id={styles.woman}>WOMAN</span>
          </a>
          <div className={styles.deskpara}>
            <p>
              Find your next denim among a wide range of timeless denim washes,
              icons of low impact style, better for people and the planet.
            </p>
          </div>
        </div>
        <div className={styles.fyf2}>
          <div className={styles.tapered}>
            {" "}
            <img
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/banner/1681109346Diesel_resizing_-12.webp?compress=true&q=70"
              alt=""
              className={styles.image}
            />
            <h2 id={styles.fittypes}>TAPERED</h2>
          </div>
          <div className={styles.tapered}>
            {" "}
            <img
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/banner/1681109489Diesel_resizing_-10.webp?compress=true&q=70"
              alt=""
              className={styles.image}
            />
            <h2 id={styles.fittypes}>STRAIGHT</h2>
          </div>
          <div className={styles.tapered}>
            {" "}
            <img
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/banner/1681109657Diesel_resizing_-09.webp?compress=true&q=70"
              alt=""
              className={styles.image}
            />
            <h2 id={styles.fittypes}>SLIM</h2>
          </div>
          <div className={styles.tapered}>
            {" "}
            <img
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/banner/1681109806Diesel_resizing_-14.webp?compress=true&q=70"
              alt=""
              className={styles.image}
            />
            <h2 id={styles.fittypes}>BOOTCUT</h2>
          </div>
          <div className={styles.tapered}>
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

      <div className={styles.salepic}>
        <div className={styles.first}>
          <h2 className={styles.headingtext}>SALE PICKS</h2>
          <a href="#" id={styles.man}>
            <u>MAN</u> <span id={styles.midman}>|</span>{" "}
            <span id={styles.woman}>WOMAN</span>
          </a>
          <div id={styles.headingtextsale}>
            <p className={styles.headingtextsale1}>2019 D-STRUKT</p>
          </div>
          <div className={styles.salepara}>
            <p>
              Always cool, always in style, the D-STRUKT is an essential denim
              silhouette defined by a{" "}
              <b>slim leg, mid-rise waist and classic fit.</b>
            </p>
            <div>
              <button className={styles.shopBtn}>
                {/* <a id={styles.shopnowbutton} href="#">
                  SHOP NOW
                </a> */}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.salepic1}>
          <div className={styles.automaticimages}>
            {" "}
            <img
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:450)/product/410372457009/300/410372457009_1_2270.webp"
              alt=""
              className={styles.saleimage}
            />
            <p id={styles.saleitemname}>Clean Green Man Slim Jeans</p>
            <h2 id={styles.saleitemprice}>MRP 16,999.00</h2>
          </div>
          <div className={styles.automaticimages}>
            {" "}
            <img
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:450)/product/410372477010/300/410372477010_1_1921.webp"
              alt=""
              className={styles.saleimage}
            />
            <p id={styles.saleitemname}> Clean Blue Man Slim Jeans</p>
            <h2 id={styles.saleitemprice}>MRP 17,999.00</h2>
          </div>
          <div className={styles.automaticimages}>
            {" "}
            <img
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/product/410372739009/300/410372739009_1_8370.webp?compress=true&q=70"
              alt=""
              className={styles.saleimage}
            />
            <p id={styles.saleitemname}>SLIM</p>
            <h2 id={styles.saleitemprice}>MRP 20,999.00</h2>
          </div>
        </div>
      </div>

      <div className={styles.selectcategory}>
        <div className={styles.selectcategoryparentimage}>
          <img
            className={styles.selectcategoryimage}
            src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/banner/1688046019SS23_DROP2_LOOKBOOK___OPC_SELL_OUT_CROPS_REHAB_DENIM_1_1_SS23DROP2-16_2.webp?compress=true&q=70"
            alt=""
          />
          <div id={styles.selectthings}>
            <h2>MENS JEANS</h2>
          </div>
        </div>

        <div className={styles.selectcategoryparentimage}>
          <img
            className={styles.selectcategoryimage}
            src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/banner/1680864326SS23_DROP2_LOOKBOOK___OPC_SELL_OUT_CROPS_FTW__PROTOTYPE_CR_1_1_SS23DROP2-18_2.webp?compress=true&q=70"
            alt=""
          />
          <div id={styles.selectthings}>
            <h2>MENS SHOES</h2>
          </div>
        </div>
        <div className={styles.selectcategoryparentimage}>
          <img
            className={styles.selectcategoryimage}
            src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/banner/1688045447SS23_DROP2_LOOKBOOK___OPC_SELL_OUT_CROPS_TIGER_BREAKS_1_1_SS23DROP2-7_2.webp?compress=true&q=70"
            alt=""
          />
          <div id={styles.selectthings}>
            <h2>WOMENS JEANS</h2>
          </div>
        </div>
        <div className={styles.selectcategoryparentimage}>
          <img
            className={styles.selectcategoryimage}
            src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/banner/1688045313SS23_DROP2_LOOKBOOK___OPC_SELL_OUT_CROPS_PASTEL___NEON_1_1_SS23DROP2-10_2.webp?compress=true&q=70"
            alt=""
          />
          <div id={styles.selectthings}>
            <h2>MENS T-SHIRTS</h2>
          </div>
        </div>
        <div className={styles.selectcategoryparentimage}>
          <img
            className={styles.selectcategoryimage}
            src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/banner/1688045691SS23_DROP3_RUNWAY_SHOW_LOOKBOOK___OPC_SELL_OUT_CROPS_POP_MAIN_STORY_(UX)_1_1_SS23DROP3-12_2.webp?compress=true&q=70"
            alt=""
          />
          <div id={styles.selectthings}>
            <h2>WOMENS BAG</h2>
          </div>
        </div>
      </div>

      <div className={styles.salepic}>
        <div className={styles.first}>
          <h2 className={styles.headingtext}>HIGHLIGHTS</h2>
          <a href="#" id={styles.man}>
            <u>MAN</u> <span id={styles.midman}>|</span>{" "}
            <span id={styles.woman}>WOMAN</span>
          </a>
          <div id={styles.headingtextsale}>
            <p className={styles.headingtextsale1}>2019 D-STRUKT</p>
          </div>
          <div className={styles.salepara}>
            <p>
              A new evolution of the signature Diesel monogram, spelled out and
              applied to <b> Denim, Ready to Wear and Accessories </b>
            </p>
            <div>
              <button className={styles.shopBtn}>
                {/* <a id={styles.shopnowbutton} href="#">
                  SHOP NOW
                </a> */}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.salepic1}>
          <div className={styles.automaticimages}>
            {" "}
            <img
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/product/410345302002/300/410345302002_1_4199.webp?compress=true&q=70"
              alt=""
              className={styles.hieglight}
            />
            <p id={styles.saleitemname}>TAPERED</p>
            <h2 id={styles.saleitemprice}>MRP 20,999.00</h2>
          </div>
          <div className={styles.automaticimages}>
            {" "}
            <img
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/product/410345191010/300/410345191010_1_8976.webp?compress=true&q=70"
              alt=""
              className={styles.hieglight}
            />
            <p id={styles.saleitemname}>STRAIGHT</p>
            <h2 id={styles.saleitemprice}>MRP 20,999.00</h2>
          </div>
          <div className={styles.automaticimages}>
            {" "}
            <img
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:450)/product/410372699009/300/410372699009_1_1405.webp"
              alt=""
              className={styles.hieglight}
            />
            <p id={styles.saleitemname}>MEDIUM TREATED BLUE</p>
            <h2 id={styles.saleitemprice}>MRP 24,999.00</h2>
          </div>
        </div>
      </div>

      <div className={styles.thefourparent}>
        <div className={styles.row}>
          <div className={styles.thefour}>
            <img
              className={styles.thefourimage}
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/cms_images/16891561011676638237SS23_DROP2_LOOKBOOK___OPC_SELL_OUT_CROPS_BIG_D_16_9_300dpi_16-9_300DPI.webp?compress=true&q=70"
              alt=""
            />
            <a onClick={manNavigator}>
              <div className={styles.overlay}>
                <p className={styles.overlayText}>LOGOMANIA</p>
              </div>
            </a>
          </div>
          <div className={styles.thefour}>
            <img
              className={styles.thefourimage}
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/cms_images/16891562501680789845SS23_DROP2_LOOKBOOK___OPC_SELL_OUT_CROPS_PASTEL___NEON_16_9_300dpi_16-9_300dpi.webp?compress=true&q=70"
              alt=""
            />
            <a onClick={TopwearNavigator}>
              {" "}
              <div className={styles.overlay}>
                <p className={styles.overlayText}>TOPWEAR</p>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.thefour}>
            <img
              className={styles.thefourimage}
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/cms_images/16891561971676638471SS23_DROP2_LOOKBOOK___OPC_SELL_OUT_CROPS_LUNAR_NEW_YEAR_OF_THE_RABBIT__16_9_300dpi_DIESEL_OPC_SS23-2_LNY_RABBIT_FULL_UX_02_005_4.webp?compress=true&q=70"
              alt=""
            />
            <a onClick={WomanNavigator}>
              {" "}
              <div className={styles.overlay}>
                <p className={styles.overlayText}> OVAL D COLLECTION</p>
              </div>
            </a>
          </div>
          <div className={styles.thefour}>
            <img
              className={styles.thefourimage}
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/cms_images/16891562851676638608GEN6_GRIFFED_SMARTWATCH_FW22_STILLS_DZT2042_JPEG_GEN6_Still__HO22___DZT2042__16-9.webp?compress=true&q=70"
              alt=""
            />
            <a onClick={WatchesNavigator}>
              {" "}
              <div className={styles.overlay}>
                <p className={styles.overlayText}>WATCHES</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.parenteightimage}>
        <div className={styles.topimages}>
          <div className={styles.eightimage}>
            <img
              className={styles.alleightimage}
              src="https://dibackend.dieselindia.com//cms_images/1671614479icons-01.webp"
              alt=""
            />
            <p className="imagetext">PERSONALISED STYLING</p>
          </div>
          <div className={styles.eightimage}>
            <img
              className={styles.alleightimage}
              src="https://dibackend.dieselindia.com//cms_images/1671614498icons-02.webp"
              alt=""
            />
            <p className="imagetext">30 DAY FREE RETURN</p>
          </div>
          <div className={styles.eightimage}>
            <img
              className={styles.alleightimage}
              src="https://dibackend.dieselindia.com//cms_images/1671614517icons-03.webp"
              alt=""
            />
            <p className="imagetext">AUTHENTIC PRODUCTS</p>
          </div>
          <div className={styles.eightimage}>
            <img
              className={styles.alleightimage}
              src="https://dibackend.dieselindia.com//cms_images/1671614563icons-04.webp"
              alt=""
            />
            <p className="imagetext">FLEXIBLE & SECURE PAYMENTS</p>
          </div>
          <div className={styles.eightimage}>
            <img
              className={styles.alleightimage}
              src="https://dibackend.dieselindia.com//cms_images/1671614575icons-05.webp"
              alt=""
            />
            <p className="imagetext">LIFETIME SUPPORT</p>
          </div>
          {/* <!-- Add four more image containers here --> */}
        </div>
        <div className={styles.bottomimages}>
          <div className={styles.eightimage}>
            <img
              className={styles.parenteightimage}
              src="https://dibackend.dieselindia.com//cms_images/1671614585icons-06.webp"
              alt=""
            />
            <p className="imagetext">PRE - ORDER</p>
          </div>
          <div className={styles.eightimage}>
            <img
              className={styles.alleightimage}
              src="https://dibackend.dieselindia.com//cms_images/1671614595icons-07.webp"
              alt=""
            />
            <p className="imagetext">EXCLUSIVE OFFERS</p>
          </div>
          <div className={styles.eightimage}>
            <img
              className={styles.alleightimage}
              src="https://dibackend.dieselindia.com//cms_images/1671614606icons-08.webp"
              alt=""
            />
            <p className="imagetext">FREE SHIPPING</p>
          </div>
          {/* <!-- Add two more image containers here --> */}
        </div>
      </div>

      <div className={styles.diesellib}>
        <img
          className={styles.diesellibimage}
          src="https://dibackend.dieselindia.com/cms_images/1682423620Desktop.webp"
          alt=""
        />
        <div id={styles.backrgroundcolor}></div>
      </div>
      <Footer />
    </>
  );
};
export default Homepage;
