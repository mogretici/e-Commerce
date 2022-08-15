import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { LinkContainer } from "react-router-bootstrap";
import { useAuth } from "../../context/AuthContext";
import AddIcon from "@mui/icons-material/Add";
import LoginIcon from "@mui/icons-material/Login";
import CategoryIcon from "@mui/icons-material/Category";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useCart } from "../../context/CartContext";
import NaviCart from "./navicart";
import { Button } from "@mui/material";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { Drawer } from "rsuite";
import Orders from "../../pages/Admin/Orders";
import Products from "../../pages/Admin/Products";

function Navi() {
  const { loggedIn, user } = useAuth();
  const { cart } = useCart();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ color: "#00ebcd" }}
      >
        <Container>
          <Navbar.Brand
            style={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontSize: "2rem",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            eCommerce
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <Button
                  size="medium"
                  variant="inherit"
                  startIcon={<CategoryIcon />}
                >
                  PRODUCTS
                </Button>
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
                  {cart.length > 0 && <NaviCart cart={cart} />}
                  {user && user.role === "admin" && loggedIn && (
                    <Button
                      size="medium"
                      variant="inherit"
                      startIcon={<SettingsSuggestIcon />}
                      onClick={() => {
                        handleOpen();
                        console.log(cart);
                      }}
                    >
                      ADMIN PANEL
                    </Button>
                  )}
                  <LinkContainer
                    to="/profile"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      size="medium"
                      variant="inherit"
                      startIcon={<AccountCircleIcon />}
                    >
                      USER PANEL
                    </Button>
                  </LinkContainer>
                </div>
              ) : (
                <>
                  <LinkContainer
                    to="/signin"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      size="medium"
                      variant="inherit"
                      startIcon={<LoginIcon />}
                    >
                      LOGIN
                    </Button>
                  </LinkContainer>
                  <LinkContainer
                    to="/signup"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      size="medium"
                      variant="inherit"
                      startIcon={<AddIcon />}
                    >
                      REGISTER
                    </Button>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Drawer
        size="full"
        placement="bottom"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header>
          <Drawer.Title>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="ORDERS" value="1" />
                  <Tab label="PRODUCTS" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Orders />
              </TabPanel>
              <TabPanel value="2">
                <Products />
              </TabPanel>
            </TabContext>
          </Drawer.Title>
        </Drawer.Header>
      </Drawer>
    </div>
  );
}

export default Navi;
