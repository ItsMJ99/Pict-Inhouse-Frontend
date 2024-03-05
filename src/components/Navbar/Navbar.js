import 'bootstrap/dist/css/bootstrap.min.css'; 
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SlidebarData } from "./SlidebarData";
import "./Navbar.css";
import img from "../../assets/collegeLogo.jpg";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar-custom">
        <Link to="#" className="nav-menu-bars">
          <FaIcons.FaBars className="bars" onClick={showSidebar} />
        </Link>
        <img src={img} alt="pict-logo" />
        <div className="navbar-content">
          <h2>PICT</h2>
          <p>Committies</p>
        </div>
        <button className="logoutBtn">Logout</button>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SlidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
