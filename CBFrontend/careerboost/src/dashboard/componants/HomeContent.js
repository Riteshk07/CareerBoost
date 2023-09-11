import React from 'react';
import * as Unicons from "@iconscout/react-unicons";
import "../base/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUsersBetweenLines, faCircleCheck, faRectangleXmark} from '@fortawesome/free-solid-svg-icons';

const HomeContent = () => {
    return (
        <>
        <div className="overview">
            <div className="title">
                <Unicons.UilTachometerFastAlt />
                <span className="text">Dashboard</span>
            </div>

            <div className="homecard">
                <div className="homeitem item--1">
                    <FontAwesomeIcon className='homesvg' icon={faBriefcase} style={{color:"darkblue"}} />
                    <span className="quantity"> 15 </span>
                    <span className="text text--1"> Applied Job</span>
                </div>
                <div className="homeitem item--2">
                    <FontAwesomeIcon className='homesvg' icon={faUsersBetweenLines} style={{color:"darkorange"}} />
                    <span className="quantity"> 9 </span>
                    <span className="text text--2"> Shortlisted </span>
                </div>
                <div className="homeitem item--3">
                    <FontAwesomeIcon className='homesvg' icon={faCircleCheck} style={{color: "#005214",}} />
                    <span className="quantity"> 2 </span>
                    <span className="text text--3"> Selected </span>
                </div>
                <div className="homeitem item--4">
                    <FontAwesomeIcon className='homesvg' icon={faRectangleXmark} style={{color: "#750029",}} />
                    <span className="quantity"> 4 </span>
                    <span className="text text--4"> Rejected </span>
                </div>
            </div>
            </div>

            <div className="activity">
            <div className="title">
                {/* <i className="uil uil-clock-three"></i> */}
                <Unicons.UilClockThree/>
                <span className="text">Recent Activity</span>
            </div>

            <div className="activity-data">
                {/* ... Activity data ... */}
            </div>
        </div>
        </>
    );
};

export default HomeContent;