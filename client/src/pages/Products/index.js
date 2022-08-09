import React from "react";
import Cards from "../../components/Cards";
import Grid from "@mui/material/Grid";
import axios from "axios";
import "react-carousel-responsive/dist/styles.css";
import SlideShow from "../../components/SlideShow";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import Divider from "@mui/material/Divider";
import useWindowSize from "../../useWindowSize.js";



function Products() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:4000/product").then((res) => {
      setProducts(res.data);
    });
  }, []);
  const size = useWindowSize();
  return (
    <div>
      
      {size.width >= 500 && (
        <MDBCard>
          <MDBCardBody>
            {/* <Slide product={products}/> */}
            <SlideShow product={products}/>
            {/* <SlideHead product={products}/> */}
          </MDBCardBody>
        </MDBCard>
      )}

      <Divider>Product List</Divider>
      <br />

      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
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
