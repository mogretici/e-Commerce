import React from "react";
import { Pane, Popover } from "evergreen-ui";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { useCart } from "../../context/CartContext";
import currencyFormat from "../currencyFormat";
import { Button } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Grid from "@mui/material/Grid";
import CompleteOrder from "./completeOrder";
import { Drawer, IconButton } from "rsuite";
import { toaster } from "evergreen-ui";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import PlusIcon from "@rsuite/icons/Plus";
import MinusIcon from "@rsuite/icons/Minus";

function NaviCart({ cart }) {
  const { removeFromCart, setCart, addToCart } = useCart();
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleOpen = (key) => {
    setOpen(true);
    setPlacement(key);
  };

  const firstFiveWords = [];
  const cartView = [];

  cart.map((item) => {
    firstFiveWords.push(item.title.split(" ", 5));
  });

  firstFiveWords.map((item) => {
    const value =
      item[0] + " " + item[1] + " " + item[2] + " " + item[3] + " " + item[4];
    cartView.push(value);
  });

  return (
    <div>
      <Popover
        content={({ close }) => (
          <Pane
            style={{ maxHeight: "500px" }}
            paddingX={20}
            paddingY={20}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Grid container spacing={1} justifyContent="space-between">
              <h5>
                <u> ORDER LIST </u>
              </h5>
              <Button
                size="small"
                variant="outlined"
                startIcon={<RemoveShoppingCartIcon />}
                color="error"
                onClick={() => {
                  setCart([]);
                  toaster.warning("Your order list is empty now.");
                }}
              >
                CLEAR CART
              </Button>
            </Grid>
            <Grid item style={{ padding: 20, overflowY: "auto" }}>
              {cart.map((item, key) => (
                <div
                  key={key}
                  style={{
                    justifyContent: "start",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <Avatar alt={item.title} src={item.photos[0]} />
                      </Avatar>
                    </ListItemAvatar>

                    <ListItemText
                      style={{ minWidth: "300px" }}
                      primary={`${item.quantity} x ${item.title
                        .split(" ")
                        .slice(0, 5)
                        .join(" ")}`} // first 5 words of title
                      secondary={`Item Price: ${
                        item.quantity
                      } x ${currencyFormat(item.price)} ₺  = ${currencyFormat(
                        item.price * item.quantity
                      )} ₺  `}
                    />
                  </ListItem>
                  <ListItem style={{ justifyContent: "end" }}>
                    <IconButton
                      className="tooltip-button"
                      onClick={() => removeFromCart(item._id, item.quantity)}
                      icon={<MinusIcon />}
                    />
                    <IconButton
                      className="tooltip-button"
                      disabled
                      icon={item.quantity}
                    />
                    <IconButton
                      className="tooltip-button"
                      onClick={() => addToCart(item)}
                      icon={<PlusIcon />}
                    />
                  </ListItem>
                </div>
              ))}
            </Grid>
            <Grid
              container
              spacing={1}
              justifyContent="space-between"
              paddingTop={5}
            >
              <Grid item>
                <Button
                  size="small"
                  variant="text"
                  startIcon={<PaidIcon />}
                  color="success"
                  disabled
                >
                  Total Price:
                  {currencyFormat(
                    cart.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    )
                  )}
                  ₺
                </Button>
              </Grid>

              <Grid item>
                <Button
                  size="medium"
                  variant="outlined"
                  startIcon={<ShoppingCartCheckoutIcon />}
                  color="success"
                  onClick={() => {
                    handleOpen("bottom");
                  }}
                >
                  COMPLETE ORDER
                </Button>
              </Grid>
            </Grid>
          </Pane>
        )}
      >
        <Button
          style={{ color: "white" }}
          size="medium"
          variant="inherit"
          startIcon={<ShoppingBasketIcon />}
        >
          CART {cart.length}
        </Button>
      </Popover>
      <Drawer
        placement={placement}
        open={open}
        onClose={() => setOpen(false)}
        size="full"
      >
        <Drawer.Header>
          <Drawer.Title>ORDER REVIEW</Drawer.Title>
          <Drawer.Actions>
            <Button
              size="medium"
              variant="contained"
              startIcon={<ArrowBackIosIcon />}
              color="inherit"
              onClick={() => {
                setOpen(false);
              }}
            >
              BACK TO PRODUCTS
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          <CompleteOrder cart={cart} />
        </Drawer.Body>
      </Drawer>
    </div>
  );
}

export default NaviCart;
