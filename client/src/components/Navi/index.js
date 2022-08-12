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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useCart } from "../../context/CartContext";
import NaviCart from "./navicart";
// import NaviCart from "./navicart";

//popover değiştirilecek
function Navi() {
  const { loggedIn } = useAuth();
  const { cart } = useCart();

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
                  <CategoryIcon sx={{ mr: 1 }} /> Products
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
                  {cart.length > 0 && (
                    // <Fab variant="extended" size="medium" onClick={() => {}}>
                    //   <ShoppingBasketIcon sx={{ mr: 1 }} />
                    //   CART {cart.length}
                    // </Fab>
                    <NaviCart cart={cart} />
                         )}
                  <LinkContainer to="/profile" style={{ color: "black" }}>
                    <Fab variant="extended" size="medium">
                      <AccountCircleIcon sx={{ mr: 1 }} /> Profile
                    </Fab>
                  </LinkContainer>
                </div>
              ) : (
                <>
                  <LinkContainer to="/signin" style={{ color: "black" }}>
                    <Fab variant="extended" size="medium">
                      <LoginIcon sx={{ mr: 1 }} /> Login
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
