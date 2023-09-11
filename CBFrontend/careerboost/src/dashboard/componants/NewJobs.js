import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Unicons from "@iconscout/react-unicons";
import { Link } from 'react-router-dom';
import "../base/newJob.css"

const NewJobs = (usrId) => {
    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(10);
    
    useEffect(() => {
        fetchJobs();
        console.log(usrId.usrId);
    }, [usrId]);
    
    const fetchJobs = async () => {
        try {
            // Get the token from local storage (assuming you store it as "token")
            const token = localStorage.getItem('token');
    
            // Configure headers with the token
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            };
            const response = await axios.get('/api/jobs/getAllJob', {headers}); // Update the endpoint
            // Assuming response.data has a 'jobs' key holding the array of jobs
            setJobs(response.data.jobs);

            // console.log(Array.isArray(response.data));
            // console.log(response.data);

        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    // Pagination
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    const renderJobs = currentJobs.map((job) => (
        <tr key={job._id}>
            <td>{job.title}</td>
            <td>{job.job_search_id}</td>
            <td>{job.requirements}</td>
            <td>{new Date(job.createdAt).toLocaleDateString()}</td>
            <td>{new Date(job.updatedAt).toLocaleDateString()}</td>
            <td style={{}}>
                <Link to="https://account.amazon.jobs/jobs/2432683/apply" target="_blank" rel="noopener noreferrer" className=''>Apply</Link>
            </td>
            {/* Add more columns based on your job fields */}
        </tr>
    ));

    return (
        <>
        <div className="overview">
            <div className="title">
                <Unicons.UilSuitcaseAlt  />
                <span className="text">New Jobs</span>
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Job ID</th>
                            <th>Requirements</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Action</th>
                            {/* Add more table headers */}
                        </tr>
                    </thead>
                    <tbody>{renderJobs}</tbody>
                </table>
                {/* Pagination */}
                <div>
                    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>{currentPage}</span>
                    <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentJobs.length < jobsPerPage}>
                        Next
                    </button>
                </div>
            </div>
        </div>
        
        </>
        
    );
};

export default NewJobs;
