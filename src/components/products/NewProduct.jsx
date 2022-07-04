import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import productService from "../../services/ProductsService";
//import {useNavigate, Link} from "react-router-dom";
//const multer = require("multer");

const  NewProduct = (props) => {
    const [name, setName] = React.useState(""); // var created to control text fields
    //const [price, setPrice] = React.useState(0);
    const [story, setStory] = React.useState("");
    // two var that will control these textfields
    
    //const [image, setImage] = React.useState("");
   /* const handleUpload = (e) => {
        let fd = new FormData()
        fd.append("image", image)
         const config = {
             headers: {
                 "content-type" : "multipart/form-data"
             }
         }

         axios.post("http://localhost:4000/api/products", fd, config).then((res)=> {
             console.log(res.data)
         }
         ).catch((err) => 
         {
             console.log(err);
         }
         );
         navigate("/product", {replace:true});
    } */
    console.log(props); // prop jo componenet ko pass kartey
    return ( 
        <Grid container spacing={3}> 
        <Grid item xs= {12} >
        < h1 style = {{textAlign: "center"}}> Add new story</h1>
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
            /* on change is a event it takes a function and event info is embeded in var e
            onClick = {(e)=>{

            //console.log("send api call to add");
            productService.addProduct
            ({name,price})
            .then((data)=>{
                console.log(data);
                props.location.push("/products");
                
            }).catch((err)=>{
                console.log(err);
            });
            }} */ 
            onClick={(e) => {
              productService
               // .addProduct({ name, price })
               .addProduct({ name, story })
                .then((data) => {
                  console.log(data);
                  props.history.push("/products");
                  // means server side validation true
                })
                .catch((err) => {
                  console.log(err);
                  toast.error(err.response.data, {
                    position: toast.POSITION.TOP_LEFT,
                  });
                });
            }}
          > 
             Submit
            </Button>

            </Grid>
           </Grid>
     );
};
 // react concept everything will be controlled by state
export default NewProduct; 

