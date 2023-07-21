import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./dendelion_logo(new).png";
import profile from "./profile.png";
import search from "./search.png";
import question from "./question.png";
import heart from "./heart.png";
import shoppingbag from "./shopping-bag.png";
import { useNavigate, useLocation } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "./AuthContextProvider";

const Navbar = () => {
  let {isLogin,loginEmail}=useContext(AuthContext);
  const [menData, setMenData] = useState([]);
  const [womenData, setWomenData] = useState([]);
  const [kidData, setKidData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showInput, setShowInput] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    fetch("https://dendelion-54b09-default-rtdb.firebaseio.com/women.json")
      .then((res) => res.json())
      .then((data) => {
        const womenProducts = data ? Object.values(data) : [];
        setWomenData(womenProducts);
      });
  }, []);

  useEffect(() => {
    fetch("https://dendelion-54b09-default-rtdb.firebaseio.com/men.json")
      .then((res) => res.json())
      .then((data) => {
        const menProducts = data ? Object.values(data) : [];
        setMenData(menProducts);
      });
  }, []);

  useEffect(() => {
    fetch("https://dendelion-54b09-default-rtdb.firebaseio.com/kid.json")
      .then((res) => res.json())
      .then((data) => {
        const kidProducts = data ? Object.values(data) : [];
        setKidData(kidProducts);
      });
  }, []);

  const [loading, setLoading] = useState(false); 

  const navigate = useNavigate();
  const location = useLocation();

  const fetchFilteredProducts = () => {
    setLoading(true); // Start loading
    const searchQuery = searchInput.toLowerCase();
    const filteredProducts = [
      ...menData.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
      ),
      ...womenData.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
      ),
      ...kidData.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
      ),
    ];
    setFilteredProducts(filteredProducts);
    setLoading(false); // Stop loading
  };

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchFilteredProducts();
  };

  const home = () => {
    navigate("/");
  };

  const inputHandler = () => {
    setShowInput(true);
  };

  const helpNavigator = () => {
    navigate("/help");
  };

  const manNavigator = () => {
    navigate("/Man", { filteredProducts: menData });
  };

  const womanNavigator = () => {
    navigate("/Woman", { filteredProducts: womenData });
  };

  const kidNavigator = () => {
    navigate("/Kid", { filteredProducts: kidData });
  };

  const signupNavigator = () => {
    navigate("/signup");
  };

  const cartNavigator = () => {
    navigate("/Cart");
  };

  const wishlistNavigator = () => {
    navigate("/Wishlist");
  };

  const handleAddToCart = (item) => {
    if(!isLogin){
      swal("Login Pending","Login first to add into cart","error");
      return ;
    }
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      // Item is not already in cart, add it
      setCartItems((prevCartItems) => [...prevCartItems, item]);
    }

    const cartItemData = {
      price: item.price,
      image: item.image,
      item: item.name,
      Email:loginEmail
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
      })
      .catch((error) => {
        console.error(error);
      });
      swal("Item Added to Cart Successfully","","success")
  };

  const handleAddToWishlist = (item) => {
    if(!isLogin){
      swal("Login Pending","Login first to add into Favourite","error");
      return ;
    }
    const isItemInWishlist = wishlistItems.some(
      (wishlistItem) => wishlistItem.id === item.id
    );

    if (!isItemInWishlist) {
      // Item is not already in wishlist, add it
      setWishlistItems((prevWishlistItems) => [...prevWishlistItems, item]);
    }

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
      })
      .catch((error) => {
        console.error(error);
      });
      swal(" Wishlist Added Successfully","","success")
  };

  return (
    <>
    {loading && <div className="loadingText"><img src="https://media2.giphy.com/media/xT9DPldJHzZKtOnEn6/200w.webp?cid=ecf05e47yjbr7ay23k1r38hk0j4ztk7tkzro9u1luo1r9f06&ep=v1_gifs_search&rid=200w.webp&ct=g" alt="" /></div>}
      {showInput && (
        <div className="parentsearchinput">
          <form onSubmit={handleSearchSubmit} className="formparent">
            <input
              className="searchinput"
              value={searchInput}
              onChange={handleSearch}
              type="text"
              placeholder="What are you looking for?"
            />
            <button className="searchbutton" type="submit">
              Search
            </button>
          </form>
          <p className="cancel" onClick={() => setShowInput(false)}>
            X
          </p>
        </div>
      )}
      <nav className="navbar">
        <div className="typeofperson">
          <a className="man" href="#" onClick={manNavigator}>
            MAN
          </a>
          <a className="woman" href="#" onClick={womanNavigator}>
            WOMAN
          </a>
          <a className="kid" href="#" onClick={kidNavigator}>
            KID
          </a>
        </div>
        <div className="logodiv">
          <img className="logo" src={logo} alt="" onClick={home} />
        </div>

        <div className="profilediv">
          <img
            className="profileicon"
            src={profile}
            alt=""
            onClick={signupNavigator}
          />
          <img
            className="searchicon"
            src={search}
            alt=""
            onClick={inputHandler}
          />
          <img
            className="questionicon"
            src={question}
            alt=""
            onClick={helpNavigator}
          />
          <img
            className="hearticon"
            src={heart}
            alt=""
            onClick={wishlistNavigator}
          />
          <img
            className="shoppingbagicon"
            src={shoppingbag}
            alt=""
            onClick={cartNavigator}
          />
        </div>
      </nav>
      <div className="cardman">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <img className="imageman" src={product.image} alt="" />
            <div className="nameofitem">{product.name}</div>
            <div className="priceofitem">
              <b>{product.price}</b>
            </div>
            <button
              className="addtocartbutton"
              onClick={() => handleAddToCart(product)}
              disabled={cartItems.some((item) => item.id === product.id)}
            >
              {cartItems.some((item) => item.id === product.id)
                ? "Added to Cart"
                : "Add to Cart"}
            </button>
            <button
             className="addtowishlbutton" onClick={() => handleAddToWishlist(product)}
              disabled={wishlistItems.some((item) => item.id === product.id) }
            >
              {wishlistItems.some((item) => item.id === product.id )
                ? "Added to Wishlist"
                : "Add to Wishlist"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
