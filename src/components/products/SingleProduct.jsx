
import React from 'react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import productService from '../../services/ProductsService';
 import {withRouter}  from "react-router";
 import userService from '../../services/UserService';
const  SingleProduct = (props) => {
    const {product, onDelete, history} = props; // grid system 3 pey 4 
  
    console.log(props);
    return ( 
        <Grid item xs={4}>  
    
            <h2>
                {product.name}
                {""}
                {userService.isAdmin() && (
               <>
            <Button
             variant = "contained" 
             color = "secondary" 
            onClick = {e => {
             console.log("navigate to update");
             history.push("/products/update/"+product._id)
            // on update click it go on update page 
            
            }}
            >
            Update
            </Button>
            {""}
            <Button variant = "contained" color = "primary" style = {{color: "Black"}}
             onClick={(e) => {
                productService
                  .deleteProduct(product._id)
                  .then((data) => {
                    console.log(data);
                    onDelete();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
            Delete
            </Button>   
            </>
                )}
    
            </h2>
            <p>{product.story}</p>
            <hr /> 
           </Grid>
     );
};
 
export default  withRouter (SingleProduct);
// wrapping componenet
// out 12 3 products will be shown