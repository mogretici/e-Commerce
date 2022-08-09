import React from "react";
import Cards from "../../components/Cards";
import Grid from "@mui/material/Grid";
import axios from "axios";
// import Slide from "../../components/Slide";
import 'react-carousel-responsive/dist/styles.css';
import SlideShow from "../../components/SlideShow";



function Products() {
const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:4000/product")
      .then((res) => {
        setProducts(res.data);
      }
      );
  }, []);

  return (
    <div >
      <hr />
      <SlideShow product={products}/>
      <hr />
      {/* <Slide /> */}
      <Grid style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}
        container
        spacing={4}
        sx={{ flexGrow: 1, overflow: "hidden", px: 0 }}
      >
        {products.map((item, key) => (
          <Grid item xs="auto" key={key}>
            <Cards item={item} />
          </Grid>
        ))}        
      </Grid>
    </div>
  );
}

export default Products;
