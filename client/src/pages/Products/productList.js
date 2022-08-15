import React from "react";
import Cards from "../../components/Cards";
import Grid from "@mui/material/Grid";

function ProductList({ products }) {
  return (
    <div>
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

export default ProductList;
