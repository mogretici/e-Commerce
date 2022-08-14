import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "@mui/material";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {fetchOrders, removeOrder} from '../../../Api'

function Orders() {
    const [orders, setOrders] = React.useState([])
    React.useEffect(() => {
        (async () => {
            setOrders(await fetchOrders())
        })()
    } , [])
    const completed = (item) => {
        return (
            <div style={{color:"green"}}>
            <Button
        size="small"
        variant="inherit"
        startIcon={<DoneAllIcon />}
        onClick={async () => {
            await removeOrder(item._id)
            setOrders(await fetchOrders())
        } }
      >
        ORDER SENDED
      </Button>
      </div>);

    }


    const items = () => {
        return (
        <div >
        <Button
        size="small"
        variant="inherit"
        endIcon={<ExpandMoreIcon />}
      >
        CUSTOMER'S ORDERS
      </Button>
      </div>);
    }
  return (
    <div>
    <div className="card">
        <DataTable value={orders} stripedRows responsiveLayout="scroll" > 
        
            <Column field="name" header="NAME"></Column>
            <Column field="email" header="E-MAIL"></Column>
            <Column field="address" header="ADDRESS"></Column>
            <Column header="ORDERS"  body={items}  ></Column>
            <Column headerStyle={{ width: '4rem', textAlign: 'center' }} header="ACTION"  body={item => completed(item)} />
        </DataTable>
    </div>
</div>
  )
}

export default Orders
