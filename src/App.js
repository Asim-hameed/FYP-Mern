import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
//import home from './pages/home/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/login";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        
        <Switch>
        <Route exact path="/">
          <Sidebar />
            <Home />
          </Route>
          <Route path="/users">
          <Sidebar />
            <UserList />
          </Route>
          <Route path="/user/:userId">
          <Sidebar />
            <User />
          </Route>
          <Route path="/newUser">
          <Sidebar />
            <NewUser />
          </Route>
          <Route path="/products">
          <Sidebar />
            <ProductList />
          </Route>
          <Route path="/product/:productId">
          <Sidebar />
            <Product />
          </Route>
          <Route path="/newproduct">
          <Sidebar />
            <NewProduct />
          </Route>
          <Route  path="/login">
            <Login />
          </Route>
        

        </Switch>
      </div>
    </Router>
  );
}

export default App;
