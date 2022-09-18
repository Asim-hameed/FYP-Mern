import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

export default function ProductList() {
  const [data, setData] = useState(productRows);
  const [prod, setProd] = useState({
    prod: [
      { 
        _id: "",
        Pname: "",
      },
    ],
  });
let result1=null;

const handleDelete = (id) => {
  setData(data.filter((item) => item.id !== id));
};
  const collectData= async ()=>{

    
  
    /////get user
    result1 =await fetch('/getProd',{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      },
    });
    result1=await result1.json();
    console.log(result1);
    // window.alert(result1.users.);
    console.warn(result1.prod[0].Pname);
    setProd(result1);
    // console.log(result1);
    // result1.users.map((users) => {
  
    // })
    setData(result1.prod);
    /////////
    }
    // collectData();


  

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "Pname",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.Pname}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    { field: "Category", headerName: "Category", width: 200 },
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  useEffect (() => {
    collectData();
  }, [])
  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        getRowId={(row) => row._id}
        //checkboxSelection
      />
    </div>
  );
}
