import React from "react"; // react in scope
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import userService from "../../services/UserService";
import { toast } from 'react-toastify';
import { Grid } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
const Register = (props) => {
  const [name, setName] = React.useState("");
  const [email,setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

       return (
         <Grid container spacing={3}> 
        <Grid item xs= {12} >
        < h1 style = {{textAlign: "center"}}> Login</h1>
           </Grid> 
            <Grid item xs={3}> </Grid>     
            <Grid item xs={6}> 
    
      <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br />
        <TextField
          label="email"
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
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
       <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            userService
              .register(name, email, password)
              .then((data) => {
                console.log(data);
                props.history.push("/login");
              })
              .catch((err) => {
                console.log(err);
                toast.error(err.response.data, {
                  position: toast.POSITION.TOP_LEFT,
                });
              });
         }}>
        Register
       </Button>
       </Grid>
       </Grid>

    
     );
};
 //  use this because hyperlink by default reloads page
export default Register;