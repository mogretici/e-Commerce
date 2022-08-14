import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";
import Card from "react-bootstrap/Card";
import { Button, Alert } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {CardActions} from "@mui/material";
import currencyFormat from "../currencyFormat";
import { useCart } from "../../context/CartContext";
import { toaster } from "evergreen-ui";
import { useAuth } from "../../context/AuthContext";


function Description({ item, photos }) {
  const handleDragStart = (e) => e.preventDefault();
  const {addToCart} = useCart();
  const {loggedIn} = useAuth();
  const [buttonText, setButtonText] = React.useState("ADD TO CART");

  return (
    <div>
    <div style={{ display: "flex", justifyContent: "normal" }}>
      <Card style={{ width: "100rem" }}>
        <Card.Body>
          <MDBCarousel showControls showIndicators dark fade>
            <MDBCarouselInner>
              <MDBCarouselItem className="active">
                <MDBCarouselElement src={photos[0]} alt="..." />
              </MDBCarouselItem>
              {photos.map((photo, key) => (
                <MDBCarouselItem key={key}>
                  <MDBCarouselElement
                    onDragStart={handleDragStart}
                    src={photo}
                    alt="..."
                  />
                </MDBCarouselItem>
              ))}
            </MDBCarouselInner>
          </MDBCarousel>
        </Card.Body>
      </Card>
      <Card
        sx={{ maxWidth: 420, minHeight: 650 }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
         <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
      </Card>
      </div>
      <Card
        sx={{ maxWidth: 420, minHeight: 650 }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
          <CardActions style={{ justifyContent: "space-between" }}>
          <Alert variant="filled">{currencyFormat(item.price)} ₺</Alert>

          <Button
            size="large"
            variant="outlined"
            startIcon={<AddShoppingCartIcon />}
            color="success"
            onClick={()=>{
              // toaster.warning("Please login or register for add to cart");
             loggedIn ? addToCart(item) : setButtonText("Please login or register for add to cart"); 

            }}
          >
            {buttonText}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Description;
