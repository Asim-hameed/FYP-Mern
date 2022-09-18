import "./login.css";
import React, {useState} from 'react';
import image from './logo.jpg'
import Home from '../home/Home';
import { useHistory } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";


export default function Login () {
    const history = useHistory();
    let result = null;
    const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
    const [user, setUser] = useState({
        users: [
          {
            email: "",
            password: "",
          },
        ],
      });
    const collectData= async ()=>{
// window.alert("Inside Login function");
    result =await fetch(`/login/${email}`,{
        method:'GET',
        // body:JSON.stringify({email, password}),
        headers:{
          'Content-Type':'application/json'
        },
      });
      result=await result.json();
      window.alert("API called");
      // window.alert(result1.users.);
    //   console.warn(result1.users[0].fname);
      setUser(result);

    // console.log(result);
    window.alert(result.users[0].email);
    if(result.users[0].password === password)
    {
        // console.log("hello");
        window.alert("Password Correct");
                history.push('/homepage');

        <Home/>
    }
    else
    {
        window.alert("Password Incorrect!");
        // history.push("/login");
    }
    //   window.alert(result.users);
    //   console.log(user);
    //   console.log(result);
      // result1.users.map((users) => {
    
      // })
    //   setData(result.users);
      /////////
      }
    //   collectData();
    return( 
      <div className="main">  	
			<div className="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""></input>
					<input type="password" name="pswd" placeholder="Password" required=""></input>
					<button>Login</button>
				</form>
			</div>
	</div>
  );
  }

// export default Login;