import React from "react"; // react in scope
import { Grid } from '@mui/material';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';

//import { makeStyles } from "@mui/material";
//import {  makeStyles, Theme } from '@material-ui/core/styles';
//import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography } from "@mui/material";
import userService from "../services/UserService";

/*const useStyles = makeStyles((theme) => ({ // writing css in json form makestyle is a hook
   
    link: {
        color: "white"
    },
})); */


  
const TopMenu  = () => {
  //const classes = useStyles();
    return (
        <Grid item xs = {3} sm={3} md={3} lg={3}>
        <AppBar style ={{position: "static", backgroundColor: "Green"}} >
            <Toolbar> 
                
                <Typography variant ="h5"> 
                    <Link style ={{color: "white", textDecoration: "none" }}  to ="/" >
                         Home</Link>
                </Typography>

                <Typography variant ="h5" > 
                    <Link style ={{padding: "50px", color: "white", textDecoration: "none"}}  to ="/products" >
                         Stories</Link>
                </Typography>
                <Typography variant ="h5" > 
                    <Link style ={{padding: "20px", color: "white", textDecoration: "none"}}  to ="/products/new" >
                         Add New</Link>
                </Typography>
                <Typography variant ="h5" > 
                    <Link style ={{ padding: "20px", color: "white", textDecoration: "none"}}  to ="/contact-us" >
                         Contact Us</Link>
               </Typography>
                  {!userService.isLoggedIn() ? <>
                  
                  <Typography variant ="h5" > 
                  <Link style ={{ padding: "50px" , color: "white", textDecoration: "none"}}  to ="/login" >
                       Login</Link>
              </Typography>
              <Typography variant ="h5" > 
                  <Link style ={{padding: "50px",  color: "white", textDecoration: "none"}}  to ="/register" >
                       Register</Link>
              </Typography>
              </> :
              <Button variant = "contained"
              color="primary"
              style ={{marginLeft: "60%"}}
              onClick = {(e) =>{
                  userService.logout();
                  window.location.reload();
                  // here we are reloading
              }}
              > 
                  LogOut  {userService.getLoggedInUser().name 
                  // userService.getLoggedInUser().role
                  }
              </Button>
                } 
            
              
                   
               
            </Toolbar>
        </AppBar>
        </Grid>
     );
};

 
export default TopMenu ;