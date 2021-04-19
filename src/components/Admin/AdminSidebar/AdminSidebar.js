import React, { useContext, useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faUsers, faTasks, faHome,faLuggageCart, faUserPlus, } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const AdminSidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5055/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: '350px',backgroundColor: '#00CED1' }} >
              <ul >
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
                   
                   {isAdmin && <div>
                   
                    <li>
                        <Link to="/bookList" className="text-white">
                        <FontAwesomeIcon icon={faLuggageCart} /><span>Book List</span>
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

                    <li>
                        <Link to="/reqAppointment" className="text-white" >
                            <FontAwesomeIcon icon={faUsers} /> <span>Appointment Request</span>
                        </Link>
                    </li>

                    </div>}
                   
                    </ul>
        </div>
    );
};

export default AdminSidebar;