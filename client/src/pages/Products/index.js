import React from "react";
import axios from "axios";
import "react-carousel-responsive/dist/styles.css";
import SlideShow from "../../components/SlideShow";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import Divider from "@mui/material/Divider";
import useWindowSize from "../../useWindowSize.js";
import ProductList from "./productList";


function Products() {
  const size = useWindowSize();

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:4000/product").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div>
      {size.width >= 500 && (
        <MDBCard>
          <MDBCardBody>
            <SlideShow product={products} />
          </MDBCardBody>
        </MDBCard>
      )}

      <Divider>Product List</Divider>
      <br />
      <ProductList products={products} />
    </div>
  );
}

export default Products;
