import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faSignOutAlt, faCartPlus, faHome, faShoppingBag, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import  './Sidebar.css';
const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-9 py-5 px-4" style={{ height: "100vh",backgroundColor: '#00CED1' }} >
              <ul className="list-unstyled">
                {/* <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li> */}
                <li>
                    <Link to="/home" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                    </li>
                    <li>
                        <Link to="/prescriptions" className="text-white">
                        <FontAwesomeIcon icon={faCartPlus} /><span>Book</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/setting" className="text-white" >
                            <FontAwesomeIcon icon={faShoppingBag} /> <span>Book List</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/addDoctor" className="text-white" >
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                        </Link>
                    </li>
                   
                    </ul>
        </div>
    );
};

export default Sidebar;