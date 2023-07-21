import styles from "./Indivisual.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Slider from "./SliderNavbar.jsx";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import { AuthContext } from "./AuthContextProvider";

const ManIndivisual = () => {
  let {isLogin,loginEmail}=useContext(AuthContext);
  let { Name } = useParams();
  let [singleData, setSingleData] = useState({});
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToFavourite, setIsAddedToFavourite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  
  // const addToFavorite = () => {
  //   if (!isLogin) { // <-- If the user is not logged in
  //     swal("Login Required", "Login first to add into Favourite", "error");
  //     return;
  //   }
  // }
   

  const addToCart = () => {
    if(!isLogin){
      swal("Login Pending","Login first to add into Cart","error");
      return ;
    }
    const cartData = {
      image: singleData.image,
      item: singleData.name,
      price: singleData.price,
      Email:loginEmail
      // Include any other relevant data
    };

    fetch("https://dendelion-54b09-default-rtdb.firebaseio.com/cart.json", {
      method: "POST",
      body: JSON.stringify(cartData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setIsAddedToCart(true);
        localStorage.setItem("isAddedToCart", "true"); // Store cart status in localStorage
        swal("Item Added To Cart", "", "success");
      })
      .catch((error) => {
        // Handle error
      });
  };

  const addToFavorite = () => {
    if(!isLogin){
      swal("Login Pending","Login first to add into Favourite","error");
      return ;
    }
    const favoriteData = {
      image: singleData.image,
      item: singleData.name,
      price: singleData.price,
      Email:loginEmail
      // Include any other relevant data
    };

    fetch(
      "https://dendelion-54b09-default-rtdb.firebaseio.com/favourite.json",
      {
        method: "POST",
        body: JSON.stringify(favoriteData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setIsAddedToFavourite(true);
        localStorage.setItem("isAddedToFavourite", "true"); // Store favourite status in localStorage
        swal("Item Added To Favourites", "", "success");
      })
      .catch((error) => {
        // Handle error
      });
  };

  useEffect(() => {
    setIsLoading(true)
    fetch("https://dendelion-54b09-default-rtdb.firebaseio.com/man.json")
      .then((res) => res.json())
      .then((data) => {
        let ManIndividualData = Object.values(data).filter((item) => {
          return item.name === Name;
        });
        
        setSingleData(ManIndividualData[0]);
        setIsLoading(false)
      });

    // Load the cart and favourite status from localStorage
    const cartStatus = localStorage.getItem("isAddedToCart");
    const favStatus = localStorage.getItem("isAddedToFavourite");

    setIsAddedToCart(cartStatus === "true");
    setIsAddedToFavourite(favStatus === "true");
  }, [Name]);

  useEffect(() => {
    return () => {
      // Reset the localStorage values when the component unmounts
      localStorage.removeItem("isAddedToCart");
      localStorage.removeItem("isAddedToFavourite");
    };
  }, []);

  return (
    <>
      <Slider />
      <Navbar />
{
  !isLoading ? 
      <div className={styles.parentdivofimage}>
        <div className={styles.divofImage}>
          {singleData.image && (
            <img className={styles.theimage} src={singleData.image} alt="" />
          )}
        </div>
        <div className={styles.parentdivofcontent}>
          <h1 className={styles.divofcontent}>{singleData.name} </h1>
          <p className={styles.price}>MRP {singleData.price}</p>
          <p className={styles.taxline}>Price inclusive of all taxes</p>
          <button
            className={styles.addcart}
            onClick={addToCart}
            disabled={isAddedToCart}
          >
            {isAddedToCart ? "ADDED TO CART" : "ADD TO CART"}
          </button>

          <div>
            <button
              className={styles.addfav}
              onClick={addToFavorite}
              disabled={isAddedToFavourite}
            >
              {isAddedToFavourite ? "ADDED TO FAVOURITE" : "ADD TO FAVOURITE"}
            </button>
          </div>
          <p className={styles.discrip}>DESCRIPTION </p>
          <p className={styles.discripcontent}>{singleData.discription}</p>
        </div>
      </div> :  <img className={styles.loadinggif} src="https://media2.giphy.com/media/xT9DPldJHzZKtOnEn6/200w.webp?cid=ecf05e47yjbr7ay23k1r38hk0j4ztk7tkzro9u1luo1r9f06&ep=v1_gifs_search&rid=200w.webp&ct=g"/>
      }

      <Footer />
    </>
  );
};

export default ManIndivisual;
