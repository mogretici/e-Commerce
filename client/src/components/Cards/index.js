import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Alert,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { LinkContainer } from "react-router-bootstrap";

function Cards({ item }) {
  return (
    <div>
      <Card sx={{ maxWidth: 420, minHeight:650,  }} style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}} >
        <LinkContainer to="/signin" style={{ color: "black" }}>
          <CardActionArea sx={{ maxWidth: 420, minHeight:600,  }} >
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
        </LinkContainer>

        <CardActions style={{ justifyContent: "space-between" }}>
          {/* <Button size="small" variant="outlined" disabled>{item.price}₺</Button> */}
          <Alert variant="filled">{item.price}₺</Alert>

          <Button
            size="small"
            variant="outlined"
            startIcon={<AddShoppingCartIcon />}
            color="success"
          >
            ADD TO CART
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cards;
