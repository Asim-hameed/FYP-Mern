import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const [user, setUser] = useState({
    users: [
      {
        _id: "",
        fname: "",
      },
    ],
  });
let result1 = null;
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const collectData= async ()=>{

    
  
  /////get user
  result1 =await fetch('/getUser',{
    method:'GET',
    headers:{
      'Content-Type':'application/json'
    },
  });
  result1=await result1.json();
  // window.alert(result1.users.);
  console.warn(result1.users[0].fname);
  setUser(result1);
  // console.log(result1);
  // result1.users.map((users) => {

  // })
  setData(result1.users);
  /////////
  }
  // collectData();
  
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "fname",
      headerName: "First Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {/* <img className="userListImg" src={params.row.avatar} alt="" /> */}
            {params.row.fname}
          </div>
        );
      },
    },
    
    { field: "lname", headerName: "Last Name", width: 200 },
    { field: "Phone", headerName: "Phone", width: 200 },
    { field: "Address", headerName: "Address", width: 200 },
    { field: "Role", headerName: "Role", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 120,
    // },
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
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
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        getRowId={(row) => row._id}
        // checkboxSelection
      />
      {/* {user.users.map((users) => {
        return(
          <sx>{users.fname}</sx>
        );
      })} */}
    </div>
  );
}
