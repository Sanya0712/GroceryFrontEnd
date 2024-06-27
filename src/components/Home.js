import React from "react";
import { Container, Typography, Button } from "@mui/material";
import Features from "./Features";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const homeStyles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/bg1.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#ffffff",
    minHeight: "100vh",
    minWidth: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    marginBottom: "60px",
  };

  const titleStyles = {
    fontSize: "3.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    lineHeight: 1.2,
  };

  const descriptionStyles = {
    fontSize: "1.5rem",
    fontWeight: "500",
    marginBottom: "2rem",
    lineHeight: 1.6,
  };

  const buttonStyles = {
    width: "200px",
    fontSize: "1.2rem",
    fontWeight: "bold",
  };

  return (
    <>
      <Container style={homeStyles}>
        <Typography sx={titleStyles} variant="h2">
          Fresh And Organic Products For You
        </Typography>
        <Typography sx={descriptionStyles} variant="body1">
          Indulge in a healthful shopping experience with our curated selection
          of fresh and organic products. From crisp fruits and vegetables to
          premium meats and dairy, we offer a thoughtfully sourced range that
          promotes well-being and supports sustainable, organic practices.
          Elevate your lifestyle with the finest, natural ingredients for a
          healthier you.
        </Typography>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <Button sx={buttonStyles} variant="contained" color="primary">
            Shop Now
          </Button>
        </Link>
      </Container>
      <Features />
      <Footer />
    </>
  );
};

export default Home;
