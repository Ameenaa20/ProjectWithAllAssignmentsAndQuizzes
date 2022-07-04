import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
class UserService extends GenericService{
    constructor(){
        super(); // calling super
    }
    // post method for login
    login = (email,password) => 
    new Promise ((resolve, reject) =>{
    this.post("users/login", {email, password})
    // post method req
    .then((token)=>{
        localStorage.setItem("token", token);
        // token ko set karwaaye
    resolve(token);
    //then resolve karwayegey
    }) .catch((err)=> {
        reject(err);
        // in case of error
    });
});
  // post method to register

    register = (name,email,password) =>
     this.post("users/register", {name, email, password});
     logout = () => {
         localStorage.removeItem("token"); // to logout 
     };
     isLoggedIn = () =>{
        return localStorage.getItem("token") ? true : false;
     };
     getLoggedInUser = () => {
        try {
          const jwt = localStorage.getItem("token");
          return jwtDecode(jwt);
        } catch (ex) {
          return null;
        }
      };

      isAdmin = () => {
        if (this.isLoggedIn()) {
          if (this.getLoggedInUser().role == "admin") return true;
          else return false;
        } else return false;
      };
   
  }
  
  let userService = new UserService();
  export default userService;