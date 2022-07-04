import React from "react"; // react in 
import thankyou from "./../Images/thankyou.jpg"
import { Container, Link } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
const ContactUs = () => {
const mystyle1 = {
    padding :"20px",
}
    return ( 
        <div>
            <h1>In case of queries contact us on: +92 12345678910</h1>
            <h1> Our email addres is: moralstories@gmail.com</h1>
            <h1> Feel free to ask any question anytime </h1>
            <h1> Thank you for visiting site</h1>
            <div>
        <img src={thankyou} style ={{
         display: "block",
         marginLeft: "auto",
         marginRight: "auto",
         width: "30%"


        }}  alt="thankyou" />
        </div>
          </div>
     );
    }
export default ContactUs;