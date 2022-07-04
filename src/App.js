import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import TopMenu from './components/TopMenu';
import LandingPage from "./components/LandingPage";
import Products from "./components/products/Products";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import NewProduct from "./components/products/NewProduct";
import UpdateProduct from './components/products/UpdateProduct';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import logo from './logo.svg';
//import './App.css';

function App() { // root component of app
  return (
    <Router>
    <div>
      <ToastContainer />
    <TopMenu />
    <div style = {{padding: "10px"}}>
        <Switch> 
        <Route path = "/login" exact component= {Login} />
        <Route path = "/register" exact component= {Register} />
        <Route path = "/contact-us"  exact component= {ContactUs} />
        <Route path = "/products" exact component= {Products} />
        <Route path = "/products/update/:id" exact component= {UpdateProduct} /> 
        <Route path = "/products/new" exact component= {NewProduct} />
        <Route path = "/not-found" exact component= {NotFound} />
        <Route path = "/" exact  component= {LandingPage} />
        <Redirect to = "/not-found"/>
        </Switch> 
        </div>
    </div>
    </Router>
  );
}

export default App;
