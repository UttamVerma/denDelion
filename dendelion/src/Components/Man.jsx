import styles from "./Man.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Man = () => {
  let navigate=useNavigate();
  let manindivisual=(Name)=>{
    navigate(`/${Name}`)
  }

  let [totalp, setTotalp] = useState(null);
  let [data, setData] = useState([]);
  let [sortOption, setSortOption] = useState("");
  let [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    fetch(
      "https://dendelion-54b09-default-rtdb.firebaseio.com/man.json"
    )
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
            <div key={item.id} onClick={()=> manindivisual(item.name)}>
              <img className={styles.imageman} src={item.image} alt="" />
              <div><b>{item.price}</b></div>
              <div>{item.name}</div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Man;
