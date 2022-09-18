import "./newUser.css";
//import axios from 'axios';
import React,{ useState } from "react";


// const mongoose= require('mongoose');
// mongoose.connect("mongodb://localhost:27017/FYP");

// const userSchema = new mongoose.Schema({

//     fname:String,
//     // lname:String,
//     // email: String,
//     // password:String,
//     // phone:String,
//     // address:String,
//     // role:String,
// });

//module.exports = mongoose.model("easify",userSchema);

export default function NewUser() {
   const[fname,setFname]=useState("");
  const[lname,setLname]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[Phone,setPhone]=useState("");
  const[Address,setAddress]=useState("");
  const[Role,setRole]=useState("");
 //const[Gender,setGender]=useState("");

const collectData= async ()=>{

  console.warn(fname,lname,email,password,Phone,Address,Role);
  let result =await fetch('/registerUser',{
  method:'POST',
  body:JSON.stringify({fname,lname,email,password,Phone,Address,Role}),
  headers:{
    'Content-Type':'application/json'
  },
});

result=await result.json();
console.warn(result);

/////get user
let result1 =await fetch('/getUser',{
  method:'GET',
  headers:{
    'Content-Type':'application/json'
  },
});
result1=await result1.json();
console.log("Result :- ",result1);
// window.alert(result1);
// console.warn(result1);
/////////
}
// collectData();
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <div className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" value={fname} onChange={(e)=>setFname(e.target.value)} placeholder="john"
           />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" value={lname} onChange={(e)=>setLname(e.target.value)} placeholder="Asim Hameed" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="xyz@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="number" value={Phone} onChange={(e)=>setPhone(e.target.value)} placeholder="+92 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" value={Address} onChange={(e)=>setAddress(e.target.value)} placeholder="Punjab" />
        </div>
        <div className="newUserItem">
          <label>Role</label>
          {/* <input type="text" value={Role} onChange={(e)=>setRole(e.target.value)} placeholder="Manager/Accountant" /> */}
          <select name="selectList" id="userList">
   <option value="option 1">Sales Manager</option>
   <option value="option 2">Accounts Manager</option>
</select>
      
        </div>
        <button onClick={collectData} className="newUserButton">Create</button>
      </div>
    </div>
  );
}
