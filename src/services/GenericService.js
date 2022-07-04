import axios from "axios"; 
axios.defaults.baseURL = "http://localhost:4000/api/";// a base url
axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");
class GenericService{ // a generic class
    constructor()
    {

    }
    get = (url) =>
     new Promise // created a custom promise resolve data from person so resolve will extraxt data 
    ((resolve,reject) =>{ // promise takes a function
        axios.get(url)
        .then((res)=>
        {
            resolve(res.data); // sends response data
        })
        .catch((err) => {
         reject(err);
        });
    });
    post = (url,data) => new Promise // created a custom promise resolve data from person so resolve will extraxt data 
    // post needs url and data both
    ((resolve,reject) =>{
        axios
        
        .post(url, data)
        .then((res)=>
        {
            resolve(res.data);
        })
        .catch((err) => {
         reject(err);
        });
    });
    delete = (url) => new Promise // created a custom promise resolve data from person so resolve will extraxt data 
    ((resolve,reject) =>{
        axios.delete(url)
        .then((res)=>
        {
            resolve(res.data);
        })
        .catch((err) => {
         reject(err);
        });
    });
    put = (url,data) => new Promise // created a custom promise resolve data from person so resolve will extraxt data 
    ((resolve,reject) =>{
        axios.put(url, data)
        .then((res)=>
        {
            resolve(res.data);
        })
        .catch((err) => {
         reject(err);
        });
    });

}

export default GenericService