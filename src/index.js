import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


//
// import NewUser from './pages/newUser/NewUser';
// const express = require('express');
// require('./backend/db/config');
// const User=require("./backend/db/user");
// const app= express();

// app.use(express.json());
// app.post("/registerUser", async(req,resp)=>
// {
//   const user=new User(req.body);
//   let result =user.save();
//   resp.send(result);


// })
// const connectDB= async()=>{

//   mongoose.connect('mongodb://localhost:27017/e-com');
//   const prodSchema = new mongoose.Schema({});
//   const product = mongoose.model('product',prodSchema);
//   const data =await product.find();
//   console.warn(data);
// }

// connectDB();

//app.listen(3000);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
