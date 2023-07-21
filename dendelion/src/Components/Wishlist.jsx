import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import styles from "./Wishlist.module.css";
import Slider from "./SliderNavbar";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import swal from "sweetalert";
import { AuthContext } from "./AuthContextProvider";

const Wishlist = () => {
  let {isLogin,loginEmail}=useContext(AuthContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  let navigate = useNavigate();

  let home = () => {
    navigate("/");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://dendelion-54b09-default-rtdb.firebaseio.com/favourite.json"
      );
      const jsonData = await response.json();

      // Extracting price from the received data
      const extractedData = Object.entries(jsonData)
        .map(([key, value]) => ({
          id: key,
          ...value,
          price: extractPrice(value.price),
        }))
        .filter((item) => item.image !== "" && item.Email===loginEmail);

      setData(extractedData);
      setIsLoading(false); // Set loading status to false after data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false); // Set loading status to false even if there's an error
    }
  };

  const extractPrice = (price) => {
    // Remove ₹ and (40% OFF) from the price string
    const extracted = price.replace(/₹|(\([^)]+\))/g, "");

    // Remove commas and leading/trailing whitespaces
    const cleaned = extracted.replace(/,/g, "").trim();

    // Split the price by space
    const parts = cleaned.split(" ");

    // Return the first part which contains the desired price format
    return parts[0];
  };

  const handleAddToBag = async (item) => {
    try {
      const response = await fetch(
        "https://dendelion-54b09-default-rtdb.firebaseio.com/cart.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        }
      );
      if (response.ok) {
        // Delete the item from the favourite collection
        await handleRemove(item.id);
      } else {
        console.error("Failed to add item to bag.");
      }
    } catch (error) {
      console.error("Error adding item to bag:", error);
    }
    swal("Item Added to Bag Successfully", "", "success");
  };

  const handleRemove = async (itemId) => {
    try {
      await fetch(
        `https://dendelion-54b09-default-rtdb.firebaseio.com/favourite/${itemId}.json`,
        {
          method: "DELETE",
        }
      );

      // Update the state to remove the item from the data array
      setData((prevData) =>
        prevData.filter((dataItem) => dataItem.id !== itemId)
      );
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    swal("Item Removed from Wishlist Successfully", "", "success");
  };

  return (
    <>
      <Slider />
      <Navbar />
      <div>
        <h4 className={styles.headingman}>WISHLIST</h4>
      </div>
      {isLoading ? ( // Check if data is still loading
        <img src="https://media2.giphy.com/media/xT9DPldJHzZKtOnEn6/200w.webp?cid=ecf05e47yjbr7ay23k1r38hk0j4ztk7tkzro9u1luo1r9f06&ep=v1_gifs_search&rid=200w.webp&ct=g"/> // Show the loading text
      ) : data.length !== 0 && isLogin ? (
        <div className={styles.cardman}>
          {data.map((item, index) => (
            <div key={index}>
              <img
                className={styles.imageman}
                src={item.image}
                alt={item.title}
              />
              <div className={styles.nameofitem}>{item.item}</div>
              <div className={styles.priceofitem}>
                <b> MRP:₹{item.price}</b>
              </div>
              <button
                className={styles.thebuttonfav}
                onClick={() => handleAddToBag(item)}
              >
                ADD TO BAG
              </button>
              <p
                className={styles.removefav}
                onClick={() => handleRemove(item.id)}
              >
                X REMOVE
              </p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <h4 className={styles.emptywish}>YOUR WISHLIST IS EMPTY</h4>
          <button className={styles.startshop} onClick={home}>
            START SHOPPING
          </button>
        </>
      )}
      <Footer />
    </>
  );
};

export default Wishlist;
