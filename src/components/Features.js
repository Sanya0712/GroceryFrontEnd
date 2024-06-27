import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const Feature = ({ name, image, description }) => {
  return (
    <Grid item xs={12} sm={4} sx={{ marginBottom: "80px" }}>
      <Card
        sx={{
          height: "100%",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
        <CardContent>
          <Typography
            variant="h5"
            sx={{ marginBottom: "1rem", fontWeight: "bold" }}
          >
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(0, 0, 0, 0.7)" }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const Features = () => {
  const features = [
    {
      name: "Fresh And Organic",
      image: "/images/1.png",
      description:
        "Discover the essence of purity with our fresh and organic selection. Handpicked for quality and sustainability, our products promise a taste of nature's best, free from artificial additives. Embrace a healthier lifestyle with the goodness of freshness and organic goodness at your fingertips.",
    },
    {
      name: "Easy Payment",
      image: "/images/2.png",
      description:
        "Simplify your transactions with our easy payment system. Enjoy seamless and secure payments for a hassle-free shopping experience. From credit cards to digital wallets, we've got your convenience covered, ensuring a quick and effortless checkout process.",
    },
    {
      name: "Free Delivery",
      image: "/images/3.png",
      description:
        "Experience the joy of doorstep convenience with our free delivery service. Enjoy the luxury of having your favorite products brought to you at no extra cost. Elevate your shopping experience with the ease and affordability of our complimentary delivery service.",
    },
  ];

  return (
    <Container>
      <Typography
        variant="h2"
        gutterBottom
        sx={{ textAlign: "center", marginTop: "2rem", fontWeight: "bold" }}
      >
        Features
      </Typography>
      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </Grid>
    </Container>
  );
};

export default Features;
