import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";
import Card from "react-bootstrap/Card";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {CardActions} from "@mui/material";
import currencyFormat from "../currencyFormat";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";





function Description({ item, photos }) {
  const handleDragStart = (e) => e.preventDefault();
  const {addToCart} = useCart();
  const { loggedIn } = useAuth();

  return (
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
          <CardActions style={{ justifyContent: "space-between", flexDirection: "column", }}>
          <h4>{currencyFormat(item.price)}₺</h4>
          

          <Button
            size="small"
            variant="outlined"
            startIcon={<AddShoppingCartIcon />}
            color="success"
            onClick={()=>{
              loggedIn 
              ? 
              addToCart(item)
              :
              <Navigate to="/" /> 
            }}
          >
            ADD TO CART
          </Button>
        </CardActions>
        </Card.Body>
      </Card>
      {/* <Card
        sx={{ maxWidth: 420, minHeight: 650 }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
          
      </Card> */}
    </div>
  );
}

export default Description;
