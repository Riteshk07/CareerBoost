import React from 'react';
import { Link, useNavigate, NavLink} from 'react-router-dom';
// import LogoutButton from './LogoutButton';
import * as Unicons from "@iconscout/react-unicons"

const InstituteSideNavbar = ({ darkMode, sidebarClosed, toggleSidebar , toggleDarkMode, setLoggedIn}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear JWT token from localStorage
        localStorage.removeItem('token'); // Assuming you store the authentication token
        localStorage.removeItem('mode'); // Clear any dark mode setting
        localStorage.removeItem('status'); // Clear any sidebar status setting
        // Update the logged-in state
        setLoggedIn(false);
        // Redirect to sign-in page after logging out
        navigate("/");
        window.location.reload(); // Reload the application
    };

    return (
        <nav className={`nav ${sidebarClosed ? 'close' : ''}`}>
            {/* ... Navbar content ... */}
            <div className="logo-name">
                <div className="">
                <img src="img/auth/CareerBoost (1).png" width={"200rem"} alt="" />
                </div>
            </div>

            <div className="menu-items">
                <ul className="nav-links">
                    <li>
                        <NavLink to="/home" activeClassName="active">
                        {/* <i className="uil uil-home"></i> */}
                        <Unicons.UilHome/>
                            <span className="link-name">Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/jobapplicants" activeClassName="active">
                        {/* <i className="uil uil-home"></i> */}
                        <Unicons.UilBracketsCurly />
                            <span className="link-name">Job Applicants</span>
                        </NavLink>
                    </li>
                    {/* Add other menu items here */}
                    <li>
                        <NavLink to="/newjobs" activeClassName="active">
                        {/* <i className="uil uil-briefcase-alt"></i> */}
                        <Unicons.UilBriefcaseAlt/>
                        <span className="link-name">New Jobs</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/savedjobs" activeClassName="active">
                        {/* <i className="uil uil-bookmark"></i> */}
                        <Unicons.UilBookmark/>
                        <span className="link-name">Saved Jobs</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/companies" activeClassName="active">
                        {/* <i className="uil uil-building"></i> */}
                        <Unicons.UilBuilding/>
                        <span className="link-name">Companies</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/savedcompanies" activeClassName="active">
                        {/* <i className="uil uil-heart"></i> */}
                        <Unicons.UilHeart/>
                        <span className="link-name">Saved Companies</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/adddata" activeClassName="active">
                        {/* <i className="uil uil-plus-circle"></i> */}
                        <Unicons.UilPlusCircle/>
                        <span className="link-name">Add Data</span>
                        </NavLink>
                    </li>
                </ul>
                <ul className="logout-mode">
                <li>
                    <button className="link-button" onClick={handleLogout}>
                        <Unicons.UilSignout/>
                        <span className="link-name">Logout</span>
                    </button>
                </li>
                <li className="mode">
                    <Link to="#">
                    {/* <i className="uil uil-moon"></i> */}
                    <Unicons.UilMoon/>
                    <span className="link-name">Dark Mode</span>
                    </Link>
                    <div className="mode-toggle">
                    <span
                        className="switch"
                        onClick={toggleDarkMode}
                        style={{ backgroundColor: darkMode ? '#3A3B3C' : '#DDD' }}
                    ></span>
                    </div>
                </li>
                </ul>
            </div>
        </nav>
    );
};

export default InstituteSideNavbar;
