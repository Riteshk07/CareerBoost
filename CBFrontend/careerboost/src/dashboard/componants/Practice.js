import React from 'react';
import { Link } from 'react-router-dom';
import * as Unicons from "@iconscout/react-unicons";
import "../base/practice.css";

const Practice = () => {
    return (
        <>
        <div className="overview">
            <div className="title">
                <Unicons.UilBookOpen />
                <span className="text">Topics</span>
            </div>

            <div >
                {/* ... Dashboard boxes ... */}
                <Link to="https://docs.oracle.com/en/java/javase/11/docs/api/" style={{textDecoration:"none",display:"inline-block", margin:"30px"}} target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        <p className="title1">Java</p>
                        <p className="title2">Standerd Edition</p>
                        <img src="img/codingIcon/java.svg" className='svg' width={94} alt="" />
                    </div>
                </Link>
                <Link to="https://mu.ac.in/wp-content/uploads/2021/05/Data-Structure-Final-.pdf" style={{textDecoration:"none",display:"inline-block", margin:"30px"}} target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        <p className="title1">DSA</p>
                        <p className="title2"></p>
                        <img src="img/codingIcon/DSA.svg" className='svg' width={94} alt="" />
                    </div>
                </Link>

                <Link to="https://docs.python.org/3/tutorial/introduction.html" style={{textDecoration:"none", display:"inline-block", margin:"30px"}} target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        <p className="title1">Pyhton</p>
                        <p className="title2">3.12</p>
                        <img src="img/codingIcon/python.svg" className='svg' width={94} alt="" />
                    </div>
                </Link>

            </div>
            </div>

            <div className="activity">
            

            <div className="activity-data">
                {/* ... Activity data ... */}
            </div>
        </div>
        </>
    );
};

export default Practice;