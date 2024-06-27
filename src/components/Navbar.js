import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      style={{ top: 0, backgroundColor: "#2c3e50", zIndex: 1000 }}
    >
      <Toolbar
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Link
          to="/"
          style={{
            position: "absolute",
            left: 0,
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src="/images/logo.png"
            alt="MyGroceryStore.com"
            style={{ marginRight: "10px", height: "64px" }}
          />
          <Typography
            variant="h5"
            style={{ fontFamily: "Baloo Bhai, cursive", color: "white" }}
          >
            MyGroceryStore
          </Typography>
        </Link>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <Button
              style={{
                fontFamily: "Baloo Bhai, cursive",
                color: "#ecf0f1",
                fontSize: "1.2rem",
                margin: "0 10px",
              }}
            >
              Home
            </Button>
          </Link>
          <Link to="/products">
            <Button
              style={{
                fontFamily: "Baloo Bhai, cursive",
                color: "#ecf0f1",
                fontSize: "1.2rem",
                margin: "0 10px",
              }}
            >
              Our Products
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              style={{
                fontFamily: "Baloo Bhai, cursive",
                color: "#ecf0f1",
                fontSize: "1.2rem",
                margin: "0 10px",
              }}
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
