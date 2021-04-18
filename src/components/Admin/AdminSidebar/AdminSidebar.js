import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faUsers, faTasks, faHome,faLuggageCart, faUserPlus, } from '@fortawesome/free-solid-svg-icons';

const AdminSidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: '300px',backgroundColor: '#00CED1' }} >
              <ul className="list-unstyled">
                {/* <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li> */}



                    <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Review</span>
                    </Link>
                    </li>


                <li>
                    <Link to="/home" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                    </li>
                    <li>
                        <Link to="/orderList" className="text-white">
                        <FontAwesomeIcon icon={faLuggageCart} /><span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-white" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/manageServices" className="text-white" >
                            <FontAwesomeIcon icon={faTasks} /> <span>Manage Services</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/makeAdmin" className="text-white" >
                            <FontAwesomeIcon icon={faUsers} /> <span>Make Admin</span>
                        </Link>
                    </li>
                   
                    </ul>
        </div>
    );
};

export default AdminSidebar;