import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import productService from '../../services/ProductsService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const  UpdateProduct = (props) => {
    const [name, setName] = React.useState(""); // var created to control text fields
    //const [price, setPrice] = React.useState(0);
     const [story, setStory] = React.useState("");
    const id = props.match.params.id; // prop jo componenet ko pass kartey id comes in console
    
    React.useEffect(() => {
        productService.getSingleProduct(id).then((data) => {
          setName(data.name);
          setStory(data.story);
        });
      }, []);
    
    return ( 
        <Grid container spacing={3}> 
        <Grid item xs= {12} >
        <h1> Update new product</h1>
           </Grid> 
            <Grid item xs={3}> </Grid>     
            <Grid item xs={6}> 
            
            <TextField label="Name"  fullWidth value ={name}
             onChange = {e=>{setName(e.target.value)}}/> 
            <TextField label="Story"  fullWidth value ={story}
            onChange = {e=>{setStory(e.target.value)}}  />
            </Grid>  
            <Grid item xs={3}> </Grid>
            <Grid item xs={3}>  </Grid>   
            <Grid item xs = {9}> 
            <Button variant= "contained" color = "primary"
            onClick = {(e)=>{
            //console.log("send api call to add");
            productService.updateProduct
            (id, {name,story})
            .then((data)=>{
                console.log(data);
                props.history.push("/products");
            }).catch((err)=>{
                console.log(err);
                toast.error(err.response.data, {
                    position: toast.POSITION.TOP_LEFT,
                  });
                
            });
            }}
            > 
             Update New Product
            </Button>
            </Grid>
           </Grid>
     );
};
 // react concept everything will be controlled by state
export default UpdateProduct;