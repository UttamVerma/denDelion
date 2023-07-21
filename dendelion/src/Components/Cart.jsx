import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "./AuthContextProvider";
const Cart = () => {
  let {isLogin,loginEmail}=useContext(AuthContext)
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true); // State to track loading status

  let CheckoutNavigator = () => {
    Navigate("/Checkout");
  };

  let home = () => {
    Navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dendelion-54b09-default-rtdb.firebaseio.com/cart.json"
        );
        const jsonData = await response.json();
        if (jsonData) {
          const formattedData = Object.keys(jsonData)
            .map((key) => ({
              id: key,
              ...jsonData[key],
              quantity: 1,
            }))
            .filter((item) => item.image !== "dummy" && item.Email===loginEmail);
          setData(formattedData);
          setLoading(false); // Set loading to false when the data is fetched
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData();
  }, []);

  const handleAdd = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[index].quantity += 1;

      const formattedPrice = extractPrice(newData[index].price);
      newData[index].price = formattedPrice;

      return newData;
    });
    swal("Item Quantity Increased Successfully", "", "success");
  };

  const handleSubtract = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      if (newData[index].quantity > 1) {
        newData[index].quantity -= 1;
      }
      return newData;
    });
    swal("Item Quantity Decreased Successfully", "", "success");
  };

  const handleRemove = async (index) => {
    const itemId = data[index].id;
    try {
      await fetch(
        `https://dendelion-54b09-default-rtdb.firebaseio.com/cart/${itemId}.json`,
        {
          method: "DELETE",
        }
      );
      setData((prevData) => {
        const newData = [...prevData];
        newData.splice(index, 1);
        return newData;
      });
    } catch (error) {
      console.error("Error deleting data:", error);
    }
    swal("Item Removed from Cart Successfully", "", "success");
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      const totalPrice = data.reduce((acc, item) => {
        const price = parseFloat(extractPrice(item.price));
        const quantity = item.quantity;
        return acc + price * quantity;
      }, 0);
      setTotalPrice(totalPrice);
    };

    calculateTotalPrice();
  }, [data]);

  const extractPrice = (price) => {
    console.log("Price:", price); // Check the value of price

    if (!price) {
      console.log("Price is undefined or null");
      return ""; // Return an empty string or handle the case when price is undefined or null
    }

    // Remove ₹ and (40% OFF) from the price string
    const extracted = price.replace(/₹|(\([^)]+\))/g, "");

    console.log("Extracted:", extracted); // Check the extracted value

    // Remove commas and leading/trailing whitespaces
    const cleaned = extracted.replace(/,/g, "").trim();

    console.log("Cleaned:", cleaned); // Check the cleaned value

    // Split the price by space
    const parts = cleaned.split(" ");

    // Check the parts array

    // Return the first part which contains the desired price format
    return parts[0];
  };

  return (
    <>
      <Navbar />
      <h1 className={styles.carttitle}>YOUR CART</h1>
      <div className={styles.main}>
        {loading ? (
          <div className={styles.loadingText}>
            <img
              src="https://media2.giphy.com/media/xT9DPldJHzZKtOnEn6/200w.webp?cid=ecf05e47yjbr7ay23k1r38hk0j4ztk7tkzro9u1luo1r9f06&ep=v1_gifs_search&rid=200w.webp&ct=g"
              alt=""
            />
          </div>
        ) : data.length !== 0 && isLogin ? (
          <div className={styles.parent}>
            {data.map((item, index) => {
              const formattedPrice = extractPrice(item.price);
              return (
                <div className={styles.detailsDiv} key={item.id}>
                  <img
                    src={item.image}
                    className={styles.image}
                    alt="Product"
                  />
                  <div className={styles.name}><b>{item.item}</b></div>
                 
                  <button
                    className={styles.subtractbutton}
                    disabled={item.quantity === 1}
                    onClick={() => handleSubtract(index)}
                  >
                    -
                  </button>{" "}
                  {/* Subtract button */}
                  <p className={styles.quantity}> {item.quantity}</p> {/* Display quantity */}
                  <button
                    className={styles.addbutton}
                    onClick={() => handleAdd(index)}
                  >
                    +
                  </button>{" "}
                  {/* Add button */}
                  <img
                    className={styles.deleteimage}
                    onClick={() => handleRemove(index)}
                    src="data:image/webp;base64,UklGRroAAABXRUJQVlA4WAoAAAAQAAAAHwAAHwAAQUxQSG4AAAABcFzbtpqcYVZ6wKUJaMK5WAVQzaMGhzErzUE8wWUWERNAakk5C+SWn7N/CzI/kiQtzczzvcz+2cwWkuTfHUA+N/X7pL6KVQ2Yj4Gm3cbvA6cdIP8/d+0AhzUwvNym7QC1CuC2bpP/sXTTbDdOAFZQOCAmAAAA0AIAnQEqIAAgAD4xGIpDoiGhFAQAIAMEtIAAHtHQAAD+/nyUAAA="
                    alt="Remove"
                  />
                  {/* Remove button */}
                  <p className={styles.price}>₹{formattedPrice}</p>
                </div>
              );
            })}
            <div className={styles.rideSideDiv}></div>
          </div>
        ) : (
          <>
            <h5 className={styles.emptycart}>YOUR SHOPPING CART IS EMPTY</h5>
            <button className={styles.backshop} onClick={home}>
              BACK TO SHOPPING
            </button>
          </>
        )}

        {loading ? (
          ""
        ) : data.length !== 0 && isLogin ? (
          <div className={styles.movetocheck}>
            <h4 className={styles.total}>Total: ₹{totalPrice}</h4>
            <p className={styles.totalcontent}>
              Cash on Delivery applicable only on orders below ₹20000
            </p>
            <button
              className={styles.thecheckoutbutton}
              onClick={CheckoutNavigator}
            >
              Checkout
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
