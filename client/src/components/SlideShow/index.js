import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  850: { items: 3 },
  1280: { items: 4 },
  1750: { items: 5 },
};
const handleDragStart = (e) => e.preventDefault();

const SlideShow = ({ product }) => {
   const items = product.map((product, key) => (

    <Card sx={{ maxWidth: 345, minHeight:500 }}>
    <CardActionArea sx={{ maxWidth: 345, minHeight:500 }}>
      <CardMedia
        component="img"
        onDragStart={handleDragStart}
        image={product.photos[0]}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h10" component="div">
        
          {product.title}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

//     <img
//     src={product.photos[0]}
//     onDragStart={handleDragStart}
//     role="presentation"
//     alt=""
//     key={key}
//   />
      ));
  const [activeIndex, setActiveIndex] = useState(0);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AliceCarousel
          
          mouseTracking
          animationType="fadeout"
          items={items}
          infinite
          autoPlayStrategy="all "
          disableButtonsControls
          autoPlay="true"
          responsive={responsive}
          controlsStrategy="responsive"
          paddingLeft={20}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          autoPlayInterval={10000}
        />
      </div>
    </div>
  );
};
export default SlideShow;
