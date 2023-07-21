import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Man.module.css";
import swal from "sweetalert";

const Man = () => {
  const navigate = useNavigate();

  const manindivisual = (name) => {
    navigate(`/${encodeURIComponent(name)}`);
  };

  let [totalp, setTotalp] = useState(null);
  let [data, setData] = useState([]);
  let [sortOption, setSortOption] = useState("");
  let [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    fetch("https://dendelion-54b09-default-rtdb.firebaseio.com/man.json")
      .then((res) => res.json())
      .then((data) => {
        const dataArray = Object.values(data); // Convert the response object to an array
        setData(dataArray);
        setSortedData(sortData(dataArray, sortOption));
        setTotalp(dataArray.length);
      });
  }, [sortOption]);

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

  return (
    <>
      <Navbar />
      <div>
        <h5 className={styles.headingman}>MAN</h5>
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
            <div key={item.id} onClick={() => manindivisual(item.name)}>
              <img className={styles.imageman} src={item.image} alt="" />
              <div className={styles.priceofitem}>
                <b>{item.price}</b>
              </div>
              <div className={styles.nameofitem}>{item.name}</div>
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

export default Man;
