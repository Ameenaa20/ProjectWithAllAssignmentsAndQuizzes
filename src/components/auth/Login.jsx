import React from "react"; // react in scope
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import userService from "../../services/UserService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from '@mui/material';

const Login = (props) => {
    const [email,setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
       return (
        <Grid container spacing={3}> 
        <Grid item xs= {12} >
        < h1 style = {{textAlign: "center"}}> Login</h1>
           </Grid> 
            <Grid item xs={3}> </Grid>     
            <Grid item xs={6}> 
       <TextField label="email" fullWidth value = {email}
       onChange = {e=>{
           setEmail(e.target.value);
           // setting email 
       }}/> 
       <br/>
       <TextField
          label="password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br />
       </Grid>  
            <Grid item xs={3}> </Grid>
            <Grid item xs={3}>  </Grid>   
            <Grid item xs = {9}> 
       <Button variant = "contanied" color="primary"
       onClick={e=>{
           userService
           .login(email,password)
           .then((data) => {
           console.log(data);
           window.location.href ="/";
           })
           .catch((err) =>
           {
             console.log(err);
             toast.error(err.response.data, {
                position: toast.POSITION.TOP_LEFT,
              });
           })

       }}>
        Login
       </Button>
       </Grid>
       </Grid>

    
     );
}
 //  use this because hyperlink by default reloads page
export default Login;