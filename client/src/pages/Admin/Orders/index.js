import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import RuleIcon from "@mui/icons-material/Rule";
import { fetchOrders, removeOrder } from "../../../Api";
import { Tooltip, Whisper } from "rsuite";
import { overflow } from "ui-box";

function Orders() {
  const [orders, setOrders] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      setOrders(await fetchOrders());
    })();
  }, []);
  const completed = (item) => {
    return (
      <div style={{ color: "green" }}>
        <Button
          size="small"
          variant="inherit"
          startIcon={<DoneAllIcon />}
          onClick={async () => {
            await removeOrder(item._id);
            setOrders(await fetchOrders());
          }}
        >
          ORDER SENDED
        </Button>
      </div>
    );
  };

  const items = (item) => {
    let quantity = item.quantity.substr(1).slice(0, -1).split(",");
    const tooltip = (
      <Tooltip>
        {item.items.map((order, key) => {
          return (
            <div key={key}>
              <div style={{ padding: 10 }}>
                <b>{quantity[key]} x </b> <i> {order.title}</i>
              </div>
            </div>
          );
        })}
      </Tooltip>
    );
    return (
      <div>
        <Whisper
          placement="bottom"
          controlId="control-id-click"
          trigger="click"
          speaker={tooltip}
        >
          <Button style={{ color: "#bfbf00" }} startIcon={<RuleIcon />}>
            CHECK ORDER
          </Button>
        </Whisper>
      </div>
    );
  };
 
  return (
    <div>
      <div className="card">
        <DataTable value={orders} stripedRows responsiveLayout="scroll" scrollable scrollHeight="600px" scrollDirection="horizontal"   >
          <Column field="name" header="NAME"></Column>
          <Column field="email" header="E-MAIL"></Column>
          <Column field="address" header="ADDRESS" style={{maxWidth:200, maxHeight:'50', overflowX:'auto', overflowY:'auto' }}></Column>
          <Column header="ORDERS" body={(item) => items(item)}></Column>
          <Column
            headerStyle={{ width: "4rem", textAlign: "center" }}
            header="ACTION"
            body={(item) => completed(item)}
          />
        </DataTable>
      </div>
    </div>
  );
}

export default Orders;
