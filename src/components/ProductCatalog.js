import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const ProductCatalog = ({ name, image, onExploreClick }) => {
  return (
    <Card sx={{ height: "100%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
      />
      <CardContent sx={{ padding: "16px", textAlign: "center" }}>
        <Typography variant="h6" sx={{ marginBottom: "8px" }}>
          {name}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={onExploreClick}
          sx={{ fontWeight: "bold" }}
        >
          Explore
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCatalog;
