import styles from "./Indivisual.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

let ManIndivisual = () => {
  let { Name } = useParams();
  let [singleData, setSingleData] = useState({});
  
  useEffect(() => {
    fetch("https://dendelion-54b09-default-rtdb.firebaseio.com/man.json")
      .then((res) => res.json())
      .then((data) => {
        let ManIndividualData = Object.values(data).filter((item) => {
          return item.name === Name;
        });
        setSingleData(ManIndividualData[0]);
      });
  }, [Name]);
  
  return (
    <>
      <Navbar />
      
      <div className={styles.parentdivofimage}>
        <div className={styles.divofimage}>
           <img className={styles.theimage} src={singleData.image} alt="" />
        </div>
        <div className={styles.parentdivofcontent}>
            <h1 className={styles.divofcontent}>{singleData.name} </h1>
            <p className={styles.price}>MRP {singleData.price}</p>
            <p className={styles.taxline}>Price inclusive of all taxes</p>
            <button>add to cart</button>
            <button>add to favaorite</button>
        </div>
        <div>
        
        </div>
       
      </div>
     
      <Footer />
    </>
  );
};

export default ManIndivisual;
