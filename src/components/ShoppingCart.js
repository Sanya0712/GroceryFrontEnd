import React, { useState } from "react";
import {
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Paper,
  Modal,
  Box,
  Backdrop,
  Fade,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ShoppingCart = ({ cart, removeFromCart }) => {
  const [openModal, setOpenModal] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    setOpenModal(true);
  };

  const handlePayment = () => {
    // Simulate payment processing logic here
    // For simplicity, we'll assume payment is successful
    setOrderPlaced(true);

    setTimeout(() => {
      setOpenModal(false);
      setOrderPlaced(false);
      alert("Payment successful! Order placed.");
    }, 2000);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.quantity * item.price, 0)
      .toFixed(2);
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: "20px",
        marginTop: "20px",
        maxWidth: "980px",
        margin: "auto",
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Shopping Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body2" style={{ textAlign: "center" }}>
          Your shopping cart is empty.
        </Typography>
      ) : (
        <>
          <List>
            {cart.map((item, index) => (
              <ListItem key={index} style={{ borderBottom: "1px solid #ddd" }}>
                <ListItemText
                  primary={item.name}
                  secondary={`Quantity: ${
                    item.quantity
                  } x ₹${item.price.toFixed(2)}`}
                  style={{ fontSize: "1.2rem" }}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => removeFromCart(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>

          <Typography
            variant="h6"
            style={{ marginTop: "20px", fontWeight: "bold" }}
          >
            Total: ₹{getTotalPrice()}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
            onClick={handleCheckout}
          >
            Checkout
          </Button>
        </>
      )}

      {/* Payment Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              borderRadius: "8px",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6" gutterBottom>
              {orderPlaced ? "Order Placed!" : "Total Bill"}
            </Typography>
            {orderPlaced ? (
              <Typography
                variant="body1"
                style={{ marginTop: "20px", textAlign: "center" }}
              >
                Your order has been placed. Thank you for shopping with us!
              </Typography>
            ) : (
              <>
                <Typography
                  variant="h6"
                  style={{ marginTop: "20px", fontWeight: "bold" }}
                >
                  Total: ₹{getTotalPrice()}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "20px" }}
                  onClick={handlePayment}
                >
                  Pay Now
                </Button>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Paper>
  );
};

export default ShoppingCart;
