import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

const Contact = () => {
  const containerStyle = {
    marginTop: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "20px",
    fontWeight: "bold",
    fontSize: "2.5rem",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "400px",
  };

  const textFieldStyle = {
    marginBottom: "20px",
  };

  const buttonStyle = {
    marginTop: "20px",
    fontWeight: "bold",
  };

  return (
    <Container style={containerStyle}>
      <Typography variant="h2" gutterBottom style={titleStyle}>
        Contact Us
      </Typography>
      <form style={formStyle}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          style={textFieldStyle}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          style={textFieldStyle}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          style={textFieldStyle}
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          style={textFieldStyle}
        />
        <Box>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={buttonStyle}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Contact;
