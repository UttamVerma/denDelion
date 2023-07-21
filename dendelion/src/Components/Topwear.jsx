import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Man.module.css";
import swal from "sweetalert";
import { AuthContext } from "./AuthContextProvider";

const Topwear = () => {
  let [totalp, setTotalp] = useState(null);
  let {isLogin,loginEmail}=useContext(AuthContext);
  let [data, setData] = useState([]);
  let [sortOption, setSortOption] = useState("");
  let [sortedData, setSortedData] = useState([]);
  let [hoveredItemId, setHoveredItemId] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    // Retrieve cartItems and wishlistItems from local storage
    const cartItemsFromStorage = localStorage.getItem("cartItems");
    const wishlistItemsFromStorage = localStorage.getItem("wishlistItems");

    if (cartItemsFromStorage) {
      setCartItems(JSON.parse(cartItemsFromStorage));
    }

    if (wishlistItemsFromStorage) {
      setWishlistItems(JSON.parse(wishlistItemsFromStorage));
    }

    // Fetch data and set other states
    fetch("https://dendelion-54b09-default-rtdb.firebaseio.com/topwear.json")
      .then((res) => res.json())
      .then((data) => {
        const dataArray = Object.values(data);
        setData(dataArray);
        setSortedData(sortData(dataArray, sortOption));
        setTotalp(dataArray.length);
      });
  }, [sortOption]);

  useEffect(() => {
    // Save cartItems and wishlistItems to local storage when they change
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [cartItems, wishlistItems]);

  const sortData = (data, sortOption) => {
    if (sortOption === "priceHighToLow") {
      return [...data].sort(
        (a, b) => convertPrice(b.price) - convertPrice(a.price)
      );
    } else if (sortOption === "priceLowToHigh") {
      return [...data].sort(
        (a, b) => convertPrice(a.price) - convertPrice(b.price)
      );
    } else {
      return data;
    }
  };

  const convertPrice = (price) => {
    const formattedPrice = price
      .split(" ")[0]
      .replace("₹", "")
      .replace(",", "");
    return parseFloat(formattedPrice);
  };

  const handleAddToCart = (item) => {
    // Prepare the data to be sent in the POST request
    const cartItemData = {
      price: item.price,
      image: item.image,
      Email:loginEmail,
      item: item.name,
    };

    fetch("https://dendelion-54b09-default-rtdb.firebaseio.com/cart.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItemData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add item to cart.");
        }
        // Update the state to mark the item as added to the cart
        setCartItems((prevItems) => [...prevItems, item.id]);
      })
      .catch((error) => {
        console.error(error);
      });
      swal("Item Added to Cart Successfully","","success")
  };

  const handleAddToWishlist = (item) => {
    const wishItemData = {
      price: item.price,
      image: item.image,
      item: item.name,
      Email:loginEmail
    };

    fetch("https://dendelion-54b09-default-rtdb.firebaseio.com/favourite.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wishItemData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add item to wishlist.");
        }
        // Update the state to mark the item as added to the wishlist
        setWishlistItems((prevItems) => [...prevItems, item.id]);
      })
      .catch((error) => {
        console.error(error);
      });
      swal(" Wishlist Added Successfully","","success")
  };

  const handleCardHover = (itemId) => {
    setHoveredItemId(itemId);
  };

  return (
    <>
      <Navbar />
      <div>
        <h5 className={styles.headingman}>TOPWEAR</h5>
      </div>
      <div className={styles.arrowdown}></div>
      <div className={styles.parent}>
        <div className={styles.totalproducts}>Showing: {totalp} Product(s)</div>
        <div className={styles.sort}>
          <select
            id={styles.sortby}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">SORT BY</option>
            <option value="priceHighToLow">Price High to Low</option>
            <option value="priceLowToHigh">Price Low To High</option>
          </select>
        </div>
      </div>

      <div className={styles.cardman}>
        {sortedData.length > 0 ? (
          sortedData.map((item) => (
            <div
              key={item.id}
              className={`${styles.card} ${
                hoveredItemId === item.id ? styles.hovered : ""
              }`}
              onMouseEnter={() => handleCardHover(item.id)}
              onMouseLeave={() => handleCardHover(null)}
            >
              <img className={styles.imageman} src={item.image} alt="" />
              <div>
                <b>{item.price}</b>
              </div>
              <div>{item.name}</div>
              {hoveredItemId === item.id && (
                <div className={styles.buttonsContainer}>
                  {cartItems.includes(item.id) ? (
                    <button className={styles.addedButton}>Added to Cart</button>
                  ) : (
                    <button
                      className={styles.addToCartButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(item);
                      }}
                    >
                      Add to Cart
                    </button>
                  )}
                  {wishlistItems.includes(item.id) ? (
                    <button className={styles.addedButton}>Added to Wishlist</button>
                  ) : (
                    <button
                      className={styles.addToWishlistButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToWishlist(item);
                      }}
                    >
                      Add to Wishlist
                    </button>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
            <img className={styles.loadinggif} src="https://media2.giphy.com/media/xT9DPldJHzZKtOnEn6/200w.webp?cid=ecf05e47yjbr7ay23k1r38hk0j4ztk7tkzro9u1luo1r9f06&ep=v1_gifs_search&rid=200w.webp&ct=g"/>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Topwear;
