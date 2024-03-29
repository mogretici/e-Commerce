import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Alert } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { toaster } from "evergreen-ui";

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import Description from "./description";
import currencyFormat from "../currencyFormat";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

function Cards({ item }) {
  const [optModal, setOptModal] = useState(false);
  const { addToCart } = useCart();
  const { loggedIn } = useAuth();

  const toggleShow = () => setOptModal(!optModal);
  return (
    <div>
      <Card
        sx={{ maxWidth: 420, minHeight: 650 }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardActionArea
          onClick={toggleShow}
          sx={{ maxWidth: 350, minHeight: 650 }}
        >
          <CardMedia
            component="img"
            height="200"
            image={item.photos[0]}
            alt={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>

        <MDBModal show={optModal} tabIndex="-1" setShow={setOptModal}>
          <MDBModalDialog size="xl">
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>{item.title}</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleShow}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <Description item={item} photos={item.photos} />
              </MDBModalBody>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>

        <CardActions style={{ justifyContent: "space-between" }}>
          <Alert variant="filled">{currencyFormat(item.price)} ₺</Alert>

          <Button
            size="large"
            variant="outlined"
            startIcon={<AddShoppingCartIcon />}
            color="success"
            onClick={() => {
              loggedIn
                ? addToCart(item)
                : toaster.warning("Please login or register for add to cart");
            }}
          >
            ADD TO CART
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cards;
