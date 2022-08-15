import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "@mui/material";
import RuleIcon from "@mui/icons-material/Rule";
import { fetchProducts, removeProduct } from "../../../Api";
import currencyFormat from "../../../components/currencyFormat";
import AddProducts from "./addproducts";
import { Modal } from "rsuite";
import EditProducts from "./editproducts";

function Products() {
  const [products, setProducts] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [openAdd, setOpenAdd] = React.useState(0);
  const [openEdit, setOpenEdit] = React.useState(0);
  const handleOpenEdit = () => setOpenEdit(1);
  const handleCloseEdit = () => setOpenEdit(0);
  const handleOpenAdd = () => setOpenAdd(1);
  const handleCloseAdd = () => setOpenAdd(0);
  const refreshProducts = async () => setProducts(await fetchProducts());

  React.useEffect(() => {
    (async () => {
      setProducts(await fetchProducts());
    })();
  }, []);

  const items = (item) => {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Button
            style={{ color: "#bfbf00" }}
            startIcon={<RuleIcon />}
            onClick={() => {
              setSelectedItem(item);
              handleOpenEdit();
            }}
          >
            EDIT PRODUCT
          </Button>
          <Button
            style={{ color: "red" }}
            startIcon={<RuleIcon />}
            onClick={() => {
              removeProduct(item._id);
              setProducts(
                products.filter((product) => product._id !== item._id)
              );
            }}
          >
            DELETE PRODUCT
          </Button>
        </div>
      </>
    );
  };
  const price = (item) => {
    return currencyFormat(item.price) + "₺";
  };
  const description = (item) => {
    return item.title.substr(0, 20) + "...";
  };
  const title = (item) => {
    return item.title.substr(0, 20) + "...";
  };

  return (
    <div>
      <Modal
        size="lg"
        open={openAdd === 1 ? true : false}
        onClose={handleCloseAdd}
      >
        <Modal.Header>
          <Modal.Title>ADD PRODUCT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddProducts toggle={handleCloseAdd} refreshList={refreshProducts} />
        </Modal.Body>
      </Modal>
      <Modal
        size="lg"
        open={openEdit === 1 ? true : false}
        onClose={handleCloseEdit}
      >
        <Modal.Header>
          <Modal.Title>PRODUCT EDIT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditProducts
            item={selectedItem}
            toggle={handleCloseEdit}
            refreshList={refreshProducts}
          />
        </Modal.Body>
      </Modal>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          style={{ color: "green" }}
          startIcon={<RuleIcon />}
          onClick={handleOpenAdd}
        >
          ADD NEW PRODUCT
        </Button>
      </div>
      <div className="card">
        <DataTable
          value={products}
          stripedRows
          responsiveLayout="scroll"
          scrollable
          scrollHeight="600px"
        >
          <Column body={(item) => title(item)} header="TITLE"></Column>
          <Column
            body={(item) => description(item)}
            header="DESCRIPTION"
          ></Column>
          <Column body={(item) => price(item)} header="PRICE"></Column>
          <Column header="ACTION" body={(item) => items(item)}></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default Products;
