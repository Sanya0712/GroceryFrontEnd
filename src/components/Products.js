import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  IconButton,
  Badge,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import ProductCatalog from "./ProductCatalog";

const Products = ({ addToCart }) => {
  const [currentCatalog, setCurrentCatalog] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const fruitNames = [
    "Apple",
    "Banana",
    "Guava",
    "Kiwi",
    "Orange",
    "Grapes",
    "Anar",
    "Strawvberry",
    "Watermelon",
  ];

  const vegetableNames = [
    "Chilli",
    "Ladyfinger",
    "Guava",
    "Carrot",
    "Cumcumber",
    "Onion",
    "Potato",
    "Tomato",
    "Capsicum",
  ];

  const diaryProducts = [
    "Curd",
    "Bread",
    "CornFlakes",
    "Yoghurt",
    "Chocos",
    "Cheese",
    "Butter",
    "Milk",
    "Mayonnaise",
  ];

  const products = [
    {
      name: "Vegetables",
      image: "/images/vegetables.webp",
      catalog: generateCatalog("Vegetable"),
    },
    {
      name: "Fruits",
      image: "/images/fruits.jpg",
      catalog: generateCatalog("Fruit"),
    },
    {
      name: "Dairy Products",
      image: "/images/dairyproducts.jpg",
      catalog: generateCatalog("Dairy"),
    },
  ];

  function generateCatalog(type) {
    const catalogItems = [];
    let names = [];

    switch (type.toLowerCase()) {
      case "vegetable":
        names = vegetableNames;
        break;
      case "fruit":
        names = fruitNames;
        break;
      case "dairy":
        names = diaryProducts;
        break;
      default:
        names = [];
    }

    for (let i = 1; i <= 9; i++) {
      const name = names[i - 1];
      catalogItems.push({
        name: `${name}`,
        image: `/images/${type.toLowerCase()}${i}.jpg`,
        price: getRandomPrice(),
      });
    }

    return catalogItems;
  }

  function getRandomPrice() {
    return parseFloat((Math.random() * (20 - 5) + 5).toFixed(2));
  }

  const handleExploreClick = (catalog) => {
    setCurrentCatalog(catalog);
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    setCart([...cart, item]);
    setCartQuantity(cartQuantity + item.quantity);
  };

  const handleCloseCatalog = () => {
    setCurrentCatalog(null);
  };

  return (
    <Container>
      <Typography
        variant="h2"
        gutterBottom
        style={{ margin: "50px 0", fontSize: "2.5rem", fontWeight: "bold" }}
      >
        Our Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <ProductCatalog
              {...product}
              onExploreClick={() => handleExploreClick(product.catalog)}
            />
          </Grid>
        ))}
      </Grid>

      {currentCatalog && (
        <ProductCatalogGrid
          catalog={currentCatalog}
          addToCart={handleAddToCart}
          onClose={handleCloseCatalog}
        />
      )}

      <Link
        to="/shopping-cart"
        style={{
          textDecoration: "none",
          position: "fixed",
          top: "80px",
          right: "40px",
        }}
      >
        <IconButton color="primary">
          <Badge badgeContent={cartQuantity} color="error">
            <ShoppingCartIcon sx={{ height: "100%" }} />
          </Badge>
        </IconButton>
      </Link>
    </Container>
  );
};

const ProductCatalogGrid = ({ catalog, addToCart, onClose }) => {
  return (
    <Grid container spacing={3} style={{ marginTop: "20px" }}>
      {catalog.map((item, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <ProductCatalogItem {...item} addToCart={addToCart} />
        </Grid>
      ))}
    </Grid>
  );
};

const ProductCatalogItem = ({ name, image, addToCart, price }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ name, quantity, price });
    setQuantity(1);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt={name}
        style={{
          objectFit: "cover",
          display: "block",
          margin: "2px auto",
        }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="subtitle1" style={{ marginBottom: "10px" }}>
          Price: ₹{price.toFixed(2)}
        </Typography>
        <TextField
          type="number"
          label="Quantity"
          value={quantity}
          onChange={(e) =>
            setQuantity(Math.max(1, parseInt(e.target.value, 10)))
          }
          variant="outlined"
          fullWidth
          style={{ marginBottom: "10px" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToCart}
          fullWidth
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default Products;
