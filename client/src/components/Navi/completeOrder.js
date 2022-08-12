import React from 'react'
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import currencyFormat from "../currencyFormat";
import CloseIcon from "@rsuite/icons/Close";
import { useCart } from "../../context/CartContext";
import { FlexboxGrid, Col } from 'rsuite';
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Button } from "@mui/material";
import { InputText } from 'primereact/inputtext';
import { postOrder } from '../../Api';




function CompleteOrder({ cart }) {
    const { removeFromCart } = useCart();
    
    const handleSubmitForm =  async () => {
        const itemIDs = cart.map(item => item._id);
        const input = {
            address,
            items: JSON.stringify(itemIDs),
        }

        const response =await postOrder(input);
        console.log(response);
        
    }
    const [address, setAdress] = React.useState("");
  return (
    <> 
      <FlexboxGrid justify="space-around">
      <FlexboxGrid.Item as={Col} colspan={24} md={9} >
      <FlexboxGrid justify="space-around"  >
      <FlexboxGrid.Item  colspan={24} md={9}>
       <h4> ORDER LIST </h4>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item  colspan={24} md={9} style={{ overflowY: 'auto', maxHeight: '300px' }}>
      {cart.map((item, key) => (
              <ListItem
                key={key}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      removeFromCart(item._id, item.quantity);
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <Avatar alt={item.title} src={item.photos[0]} />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary={`${item.quantity} x ${item.title}`}
                  secondary={`Item Price: ${item.quantity} x ${currencyFormat(
                    item.price
                  )} ₺  = ${currencyFormat(item.price * item.quantity)} ₺  `}
                />
              </ListItem>
            ))}
      </FlexboxGrid.Item>   
      </FlexboxGrid>
      </FlexboxGrid.Item>

      <FlexboxGrid.Item as={Col} colspan={24} md={9} >
      <FlexboxGrid  justify="space-around"   >
      <FlexboxGrid.Item  colspan={24} md={9}>
      <h4 style={{paddingBottom:40}}> ADDRES INFORMATION </h4>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item  colspan={24} md={9} >
        {/* FORM */}
        <span className="p-float-label" >
                    <InputText id="username" value={address} type="textarea" onChange={(e) => setAdress(e.target.value)} />
                    <label htmlFor="username">Adress</label>
                </span>
               
 
        {/* FORM */}
      </FlexboxGrid.Item>   
      <FlexboxGrid.Item  colspan={24} md={9} style={{paddingTop:40}}>
      <Button
                  
                  size="medium"
                  variant="contained"
                  startIcon={<ShoppingCartCheckoutIcon />}
                  color="success"
                  onClick={() => {
                    handleSubmitForm()
                }
                  }
                >
                  CONFIRM ORDER
                </Button>
      </FlexboxGrid.Item>
      </FlexboxGrid>
  
      </FlexboxGrid.Item>
    
    </FlexboxGrid>
    
    
    </>
  )
}

export default CompleteOrder