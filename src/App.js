import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <Router>
      <div>
        <style>{`
          body {
            margin: 0;
            padding: 0;
          }
        `}</style>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products addToCart={addToCart} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/shopping-cart"
            element={
              <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
