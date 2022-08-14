import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import currencyFormat from "../currencyFormat";
import CloseIcon from "@rsuite/icons/Close";
import { useCart } from "../../context/CartContext";
import { FlexboxGrid, Col } from "rsuite";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Button } from "@mui/material";
import { InputText } from "primereact/inputtext";
import { postOrder } from "../../Api";
import { toaster } from "evergreen-ui";
import { InputTextarea } from "primereact/inputtextarea";
import { useAuth } from "../../context/AuthContext";

//sepeti boşalt order penceresini kapat backende adet bilgisi gönder

function CompleteOrder({ cart }) {
  const { removeFromCart, setCart } = useCart();
  const { user } = useAuth();

  const handleSubmitForm = async () => {
    const itemIDs = cart.map((item) => item._id);
    const itemQuantities = cart.map((item) => item.quantity);
    const input = {
      address,
      items: JSON.stringify(itemIDs),
      quantity: JSON.stringify(itemQuantities),
      name,
      email,
    };

    const response = await postOrder(input);
    console.log(response);
    toaster.success(
      "Your order has been sent. We will contact you soon (maybe).Thank you."
    );
  };
  const [address, setAdress] = React.useState(user.address ? user.address : "");
  const [name, setName] = React.useState(user.name ? user.name : "");
  const [email, setEmail] = React.useState(user.email ? user.email : "");
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  return (
    <>
      <FlexboxGrid justify="space-around">
        <FlexboxGrid.Item as={Col} colspan={24} md={9}>
          <FlexboxGrid justify="space-around">
            <FlexboxGrid.Item colspan={24} md={9}>
              <h4> ORDER LIST </h4>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item
              colspan={24}
              md={9}
              style={{ overflowY: "auto", maxHeight: "500px" }}
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
            </FlexboxGrid.Item>
            <FlexboxGrid.Item
              style={{ display: "flex", justifyContent: "start" }}
            >
              <Button
                size="medium"
                variant="contained"
                startIcon={<RemoveShoppingCartIcon />}
                color="error"
                onClick={() => {
                  setCart([]);
                  toaster.warning("Your order list is empty now.");
                }}
              >
                CLEAR CART
              </Button>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </FlexboxGrid.Item>

        <FlexboxGrid.Item as={Col} colspan={24} md={6}>
          <FlexboxGrid justify="space-around">
            <FlexboxGrid.Item colspan={24} md={9}>
              <h4 style={{ paddingBottom: 40 }}>
                {" "}
                PAYMENT & ADDRESS INFORMATION{" "}
              </h4>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item
              colspan={24}
              md={9}
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
                height: "20vh",
              }}
            >
              {/* FORM */}
              <FlexboxGrid.Item
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <span className="p-float-label">
                  <InputText
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="name">Name </label>
                </span>
                <span className="p-float-label">
                  <InputText
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="email">E-Mail</label>
                </span>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item
                style={{
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: "row",
                }}
              >
                <span className="p-float-label">
                  <InputTextarea
                    id="address"
                    value={address}
                    type="textarea"
                    width="100%"
                    cols={57}
                    onChange={(e) => setAdress(e.target.value)}
                  />
                  <label htmlFor="address">Address</label>
                </span>
              </FlexboxGrid.Item>

              {/* FORM */}
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={24} md={9} style={{ paddingTop: 40 }}>
              <Button
                size="medium"
                variant="contained"
                startIcon={<ShoppingCartCheckoutIcon />}
                color="success"
                onClick={() => {
                  !isValidEmail(email)
                    ? toaster.warning(
                        "Your e-mail is invalid. Please check it."
                      )
                    : handleSubmitForm();
                }}
              >
                CONFIRM ORDER
              </Button>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
}

export default CompleteOrder;
