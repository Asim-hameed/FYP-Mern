import "./newProduct.css";
import { useState } from "react";


export default function NewProduct() {
  const[Pname,setPname]=useState("");
  const[stock,setStock]=useState("");
  const[Category,setCategory]=useState("");

  const collectData= async ()=>{

    console.warn(Pname,stock,Category);
    let result =await fetch('/addProduct',{
    method:'POST',
    body:JSON.stringify({Pname,stock,Category}),
    headers:{
      'Content-Type':'application/json'
    },
  });
  
  result=await result.json();
  console.warn(result);
  localStorage.setItem("user",JSON.stringify(result));
  
  /////get user
  
  // let result1 =await fetch('/getUser',{
  //   method:'GET',
  //   headers:{
  //     'Content-Type':'application/json'
  //   },
  // });
  // result1=await result1.json();
  // window.alert(result1);
  // console.warn(result1);
  /////////
  }
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        {/* <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div> */}
        <div className="addProductItem">
          <label>Name</label>
          <input type="text"value={Pname} onChange={(e)=>setPname(e.target.value)} placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="number" value={stock} onChange={(e)=>setStock(e.target.value)} placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Category</label>
          {/* <input type="text" value={Category} onChange={(e)=>setCategory(e.target.value)} placeholder="123" /> */}
          <select name="selectList" id="selectList">
   <option value="option 1">Phone</option>
   <option value="option 2">Laptop</option>
   <option value="option 3">Tablets</option>
   <option value="option 4">Handkerchief</option>
</select>
        </div>
        {/* <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}
        <button onClick={collectData} className="addProductButton">Create</button>
      </form>
    </div>
  );
}
