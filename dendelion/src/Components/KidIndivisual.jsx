import styles from "./Indivisual.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Slider from "./SliderNavbar.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

let KidIndivisual = () => {
  let { KidName } = useParams();
  let [singleData, setSingleData] = useState({});

  const addToCart = () => {
    // Prepare the data to be sent
    const cartData = {
      image: singleData.image,
      item: singleData.name,
      price: singleData.price,
      // Include any other relevant data
    };

    // Send the data to the specified URL
    fetch("https://dendelion-54b09-default-rtdb.firebaseio.com/cart.json", {
      method: "POST",
      body: JSON.stringify(cartData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Item added to cart:", data);
        // Handle success or show a success message
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
        // Handle error or show an error message
      });
  };

  const addToFavorite = () => {
    // Prepare the data to be sent
    const favoriteData = {
      image: singleData.image,
      item: singleData.name,
      price: singleData.price,
      // Include any other relevant data
    };

    // Send the data to the specified URL
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
        console.log("Item added to favorite:", data);
        // Handle success or show a success message
      })
      .catch((error) => {
        console.error("Error adding item to favorite:", error);
        // Handle error or show an error message
      });
  };

  useEffect(() => {
    fetch("https://dendelion-54b09-default-rtdb.firebaseio.com/kid.json")
      .then((res) => {
        if (!res.ok) {
            console.log("error");
          throw new Error("Error retrieving data");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        let KidIndividualData = Object.values(data).filter((item) => {
          return item.name == KidName;
        });
        console.log("Filtered data:", KidIndividualData);
        setSingleData(KidIndividualData);
      })
      .catch((error) => {
        console.error("Error retrieving data:", error);
        // Handle error or show an error message
      });
  }, []);

  return (
    <>
      <Slider />
      <Navbar />

      <div className={styles.parentdivofimage}>
        <div className={styles.divofImage}>
          {singleData && singleData.image && (
            <img className={styles.theimage} src={singleData.image} alt="" />
          )}
        </div>
        <div className={styles.parentdivofcontent}>
          {singleData && singleData.name && (
            <h1 className={styles.divofcontent}>{singleData.name} </h1>
          )}
          {singleData && singleData.price && (
            <p className={styles.price}>MRP {singleData.price}</p>
          )}
          <p className={styles.taxline}>Price inclusive of all taxes</p>
          <button className={styles.addcart} onClick={addToCart}>
            ADD TO CART
          </button>

          <div>
            <button className={styles.addfav} onClick={addToFavorite}>
              ADD TO FAVOURITE
            </button>
          </div>
          <p className={styles.discrip}>DESCRIPTION </p>
          <p className={styles.discripcontent}>{singleData.description}</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default KidIndivisual;
