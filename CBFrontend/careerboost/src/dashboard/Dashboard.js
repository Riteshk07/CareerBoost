import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link} from 'react-router-dom';
import SideNavbar from './componants/SideNavbar';
import "./base/base.css";
import * as Unicons from '@iconscout/react-unicons';
// import axios from 'axios';
import HomeContent from './componants/HomeContent';
import NewJobs from './componants/NewJobs';
import SavedJobs from './componants/SavedJobs';
import Companies from './componants/Companies';
import SavedCompanies from './componants/SavedCompanies';
import AddData from './componants/AddData';
import Practice from './componants/Practice';


const Dashboard = ({ loggedIn, setLoggedIn, userDetails, usrId }) => {
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);
    const [sidebarClosed, setSidebarClosed] = useState(false);
    const { section } = useParams();
    const currPath = window.location.pathname==="/";
    

    useEffect(() => {
        if (currPath) {
            navigate("/home");
        }
    }, [currPath, navigate]);

    // Fetch user details after the user logs in

    
    

    let contentComponent;

    switch (section) {
        
        case 'home':
            contentComponent = <HomeContent />;
            break;
        case 'practice':
            contentComponent = <Practice />;
            break;
        case 'newjobs':
            contentComponent = <NewJobs usrId={usrId}/>;
            break;
        case 'savedjobs':
            contentComponent = <SavedJobs />;
            break;
        case 'companies':
            contentComponent = <Companies />;
            break;
        case 'savedcompanies':
            contentComponent = <SavedCompanies />;
            break;
        case 'adddata':
            contentComponent = <AddData />;
            break;
        default:
            contentComponent = <div>No content available</div>;
    }
    // console.log("Selected Section:", section); // Add this line to check selected section
    // console.log("Content Component:", contentComponent); // Add this line to check selected content component

    useEffect(() => {
        const savedMode = localStorage.getItem('mode');
        if (savedMode === 'dark') {
            setDarkMode(true);
        }

        const savedStatus = localStorage.getItem('status');
        if (savedStatus === 'close') {
            setSidebarClosed(true);
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        localStorage.setItem('mode', darkMode ? 'light' : 'dark');
    };

    const toggleSidebar = () => {
        setSidebarClosed(!sidebarClosed);
        localStorage.setItem('status', sidebarClosed ? 'open' : 'close');
    };

    return (
        <>
            {loggedIn ? (
                <div className={`admin-dashboard ${darkMode ? 'dark' : ''}`}>
                     <SideNavbar
                        darkMode={darkMode}
                        sidebarClosed={sidebarClosed}
                        toggleSidebar={toggleSidebar}
                        toggleDarkMode= {toggleDarkMode}
                        setLoggedIn = {setLoggedIn}
                    />
            
                    <section className="dashboard">
                    <div className="top">
                        {/* ... Top bar content ... */}
                        <Unicons.UilBars className ="sidebar-toggle" onClick={toggleSidebar}/>
                        

                        <div className="search-box">
                            <Unicons.UilSearch />
                            <input type="text" placeholder="Search here..." />
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn">

                                {userDetails ? `Welcome, ${userDetails.name}` : 'Action'}
                                <div style={{fontWeight:"bold"}}>Student</div>
                            </button>
                            <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><Link class="dropdown-item" to="#">Profile</Link></li>
                                <li><Link class="dropdown-item" to="#">Account</Link></li>
                                <li><Link class="dropdown-item" to="#">Setting</Link></li>
                            </ul>
                        </div>
                    </div>
            
                    <div className="dash-content">
                        {/* ... Dashboard content ... */}
                        {contentComponent}
                    </div>
                    </section>
                </div>
            ): (
                // Render a placeholder until the user logs in
                <div className='isuserlogout'>Please log in...</div>
            )}
        </>
    );
};

export default Dashboard;
