import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useAuth } from "../../context/AuthContext";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import LoginIcon from "@mui/icons-material/Login";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Popover from "@mui/material/Popover";
import Typography from '@mui/material/Typography';
import { useCart } from "../../context/CartContext";

function Navi() {
  const { loggedIn } = useAuth();
  const { cart } = useCart();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
 
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>eCommerce</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/" style={{ color: "black" }}>
                <Fab variant="extended" size="medium">
                  <CategoryIcon sx={{ mr: 1 }} /> Products{" "}
                </Fab>
              </LinkContainer>
            </Nav>
            <Nav>
              {loggedIn ? (
                <div
                  style={{
                    minWidth: 250,
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                    { cart.length>0  &&
                    <Fab variant="extended" size="medium" onClick={handleClick}>
                      <ShoppingBasketIcon sx={{ mr: 1 }} />
                      CART {cart.length}
                    </Fab>}
                  <LinkContainer to="/profile" style={{ color: "black" }}>
                    <Fab variant="extended" size="medium">
                      <AccountCircleIcon sx={{ mr: 1 }} /> Profile
                    </Fab>
                  </LinkContainer>
                  
                  
                  
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                  >
                    <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                  </Popover>
                </div>
              ) : (
                <>
                  <LinkContainer to="/signin" style={{ color: "black" }}>
                    <Fab variant="extended" size="medium">
                      <LoginIcon sx={{ mr: 1 }} /> Login{" "}
                    </Fab>
                  </LinkContainer>
                  <LinkContainer to="/signup" style={{ color: "black" }}>
                    <Fab variant="extended" size="medium">
                      <AddIcon sx={{ mr: 1 }} />
                      Register
                    </Fab>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navi;
