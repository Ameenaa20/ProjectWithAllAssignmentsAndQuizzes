import React from 'react';
import SingleProduct from './SingleProduct';
import axios from "axios";
import { Grid, Link } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';
import { ThemeContext } from '@emotion/react';
import productService from '../../services/ProductsService';
import userService from '../../services/UserService';
// it has an array when 

const  Products = (props) => {
    const [products, setProducts] = React.useState([
      
        //{name: "abc", price: 500},
        //{name: "abc", price: 500},
    ]);
   //console.log("inside products component"); // this function is called twice becase running in strict mode when app renders these lines go
    /*const getData = () => {
        productService // generic one using so need to give data or use axios
        .getProducts()
        .then((data)=> {
            setProducts(data);
        }) 
        .catch((err) =>{
            console.log(err);
        });
    }; */
    const getData = () => { // func of products.js
        productService
          .getProducts()
          .then((data) => {
            setProducts(data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      // getData();
    //getData();
    React.useEffect(getData, []); // means call getdata only first mount after that don't call it two time get component printed one when component loaded other then if not used then there are no products will shown
    //console.log("inside products component");
    const handleNewProductClick = () =>
    {
      console.log(props);
      props.history.push("/products/new"); // on button clik it goes to add new product
    } // handler use to capture a event and do something to it passing it below
    
      
    return ( 
        <div>
                <h1>Stories</h1>
                {userService.isLoggedIn() && (
                <Fab 
                color="primary" 
                aria-label="add" 
                style = {{position: "absolute" , right: 10, bottom: 5}} 
                onClick = {handleNewProductClick}>
               <AddIcon />  
                </Fab>
                )}
            {products.length == 0 ? ( // if true no prducts else theer are products
             <p> There are not products</p>
             ) : (
                <Grid container spacing={3}>   
                {products.map((product, index) => (
              <SingleProduct key={index} product={product}
              onDelete = {getData} />  // {products.map((product, index) => (
            
              ))}
        </Grid>
      )}
    </div> // grid is like a row in bootstrap fab floating action button
  );
};;
 // how to fetch api? install axious 
export default Products;