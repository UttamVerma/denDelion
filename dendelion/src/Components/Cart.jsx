import styles from "./Cart.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

import React, { useState, useEffect } from "react";

const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dendelion-54b09-default-rtdb.firebaseio.com/cart.json"
        );
        const jsonData = await response.json();
        if (jsonData) {
          const formattedData = Object.keys(jsonData).map((key) => ({
            id: key,
            ...jsonData[key],
            quantity: 1, // Initialize quantity to 1
          }));
          setData(formattedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAdd = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[index].quantity += 1;
      return newData;
    });
  };

  const handleSubtract = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      if (newData[index].quantity > 1) {
        newData[index].quantity -= 1;
      }
      return newData;
    });
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
  };

  return (
    <>
      <Navbar />
      <h1 className={styles.carttitle}>YOUR CART</h1>
      <div className={styles.parent}>
        {data.map((item, index) => {
          return (
            <div className={styles.detailsDiv} key={item.id}>
              <img src={item.image} className={styles.image} alt="Product" />
              <p></p>
              <strong className={styles.name}>{item.item}</strong>
              <button onClick={() => handleSubtract(index)}>-</button>{" "}
              {/* Subtract button */}
              <p> {item.quantity}</p> {/* Display quantity */}
              <button onClick={() => handleAdd(index)}>+</button>{" "}
              {/* Add button */}
              <img className={styles.deleteimage} onClick={() => handleRemove(index)} src="data:image/webp;base64,UklGRroAAABXRUJQVlA4WAoAAAAQAAAAHwAAHwAAQUxQSG4AAAABcFzbtpqcYVZ6wKUJaMK5WAVQzaMGhzErzUE8wWUWERNAakk5C+SWn7N/CzI/kiQtzczzvcz+2cwWkuTfHUA+N/X7pL6KVQ2Yj4Gm3cbvA6cdIP8/d+0AhzUwvNym7QC1CuC2bpP/sXTTbDdOAFZQOCAmAAAA0AIAnQEqIAAgAD4xGIpDoiGhFAQAIAMEtIAAHtHQAAD+/nyUAAA=" />
              {" "}
              {/* Remove button */}
              <p className={styles.price}>{item.price}</p>
              <div className={styles.movetocheck}>
                <h4 className={styles.total}>Total:</h4>
                <p className={styles.totalcontent}>
                  Cash on Delivery applicable only on orders below ₹20000
                </p>
              </div>
            
            </div>
          );
        })}
        <div className={styles.rideSideDiv}></div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
