import React from "react";
import { Pane, Popover } from "evergreen-ui";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Fab from "@mui/material/Fab";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { useCart } from "../../context/CartContext";
import currencyFormat from "../currencyFormat";
import { Button } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Grid from "@mui/material/Grid";
import CloseIcon from "@rsuite/icons/Close";
import CompleteOrder from "./completeOrder";
import { Drawer } from 'rsuite';

function NaviCart({ cart }) {
  const { removeFromCart } = useCart();
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleOpen = key => {
    setOpen(true);
    setPlacement(key);
  };

  return (
    <div>
      <Popover
       
        content={({ close }) => (
          <Pane
            width={700}
            height="auto"
            style={{ overflowY: 'auto', maxHeight: '500px' }}
            paddingX={40}
            paddingY={20}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            {cart.map((item, key) => (
              <ListItem
                key={key}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      removeFromCart(item._id, item.quantity);
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <Avatar alt={item.title} src={item.photos[0]} />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary={`${item.quantity} x ${item.title}`}
                  secondary={`Item Price: ${item.quantity} x ${currencyFormat(
                    item.price
                  )} ₺  = ${currencyFormat(item.price * item.quantity)} ₺  `}
                />
              </ListItem>
            ))}
            <Grid container spacing={1} justifyContent="space-between">
              <Grid item>
                <Button
                  size="small"
                  variant="text"
                  startIcon={<PaidIcon />}
                  color="success"
                  disabled
                >
                  Total Price
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
                    handleOpen('bottom')
                  }}
                >
                  COMPLETE ORDER
                </Button>
              </Grid>
            </Grid>
          </Pane>
        )}
      >
        <Fab variant="extended" size="medium" onClick={() => {}}>
          <ShoppingBasketIcon sx={{ mr: 1 }} />
          CART {cart.length}
        </Fab>
      </Popover>
      <Drawer placement={placement} open={open} onClose={() => setOpen(false)} size='full'>
        <Drawer.Header>
          <Drawer.Title>ORDER REVIEW</Drawer.Title>
          <Drawer.Actions>
            <Button
                  size="medium"
                  variant="contained"
                  startIcon={<ShoppingCartCheckoutIcon />}
                  color="success"
                  onClick={() => {
                    setOpen(false)}
                  }
                >
                  CONFIRM ORDER
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
