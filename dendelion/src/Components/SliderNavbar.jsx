import { useEffect, useState } from "react";
import "./Navbar.css";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "TRACK YOUR ORDERS & RETURN HERE.",
    "GET ADDITIONAL 10% ON ₹ 18000.T&C APPLY.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 10000); // Adjust the interval to 10 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="main">
      <div className="slider-container">
        <p className="slider-text">{images[currentImage]}</p>
      </div>
    </div>
  );
};

export default Slider;
