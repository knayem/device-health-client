import React, { useState } from "react";
import './DashboardHeader.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faSignOutAlt, faCartPlus, faHome, faShoppingBag, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";

import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from "react-pro-sidebar";

const DashboardHeader = () => {

    const [menuCollapse, setMenuCollapse] = useState(false)

    
  const menuIconClick = () => {
   
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
    return (
    
        <div id="header">
            
          <ProSidebar collapsed={menuCollapse}>
            <SidebarHeader>
            <div className="logotext">
                
                <p>{menuCollapse ? "Logo" : "User"}</p>
              </div>
              <div className="closemenu" onClick={menuIconClick}>
                  
                {menuCollapse ? (
                  <FiArrowRightCircle/>
                ) : (
                  <FiArrowLeftCircle/>
                )}
              </div>
            </SidebarHeader>
            <SidebarContent>
              <Menu iconShape="square">
                <MenuItem active={true} icon={<FiHome />}>
                <Link to="/home" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span style={{ color: 'black' }}>Home</span>
                    </Link>
                </MenuItem>
                {/* <MenuItem icon={<FaList />}>

                <Link to="/dashboard/book" className="text-white">
                        <FontAwesomeIcon icon={faCartPlus} /><span style={{ color: 'black' }}>Book</span>
                        </Link>
                </MenuItem> */}
                <MenuItem icon={<FaRegHeart />}>
                <Link to="/dashboard/bookList" className="text-white" >
                            <FontAwesomeIcon icon={faShoppingBag} /> <span style={{ color: 'black' }}>Book List</span>
                        </Link>
                </MenuItem>
                <MenuItem icon={<RiPencilLine />}>
                <Link to="/dashboard/review" className="text-white" >
                            <FontAwesomeIcon icon={faCommentDots} /> <span style={{ color: 'black' }}>Review</span>
                        </Link>
                </MenuItem>
                
              </Menu>
            </SidebarContent>
            
          </ProSidebar>
        </div>
    );
};

export default DashboardHeader;