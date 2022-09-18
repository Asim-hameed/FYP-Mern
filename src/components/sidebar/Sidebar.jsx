import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  // AttachMoney,
  BarChart,
  // MailOutline,
  // DynamicFeed,
  // ChatBubbleOutline,
  WorkOutline,
  // Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
// import Login from "../../pages/login/login";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Sales Manager
              </li>
            </Link>
            {/* <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li> */}
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Session</h3>
          <ul className="sidebarList">


        
            <Link to="/login" className="link">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Login
            </li>
            </Link>

          </ul>
        </div>
      </div>
    </div>
  );
}
