import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import women_banner from "./Components/Assets/banner_women.png";
import men_banner from "./Components/Assets/banner_mens.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import LoginSignup from "./Pages/LoginSignup";
import "bootstrap/dist/css/bootstrap.min.css";
import IntroAnimation from './Components/IntroAnimation'; // Correct path

export const backend_url = 'http://localhost:4000';
export const currency = '₹';

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Set animationComplete to true after the animation duration (2 seconds)
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000); // Adjusted to 2 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div>
      {!animationComplete ? (
        <IntroAnimation />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop gender="all" />} />
            <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
            <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
            <Route path='/product' element={<Product />}>
              <Route path=':productId' element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
