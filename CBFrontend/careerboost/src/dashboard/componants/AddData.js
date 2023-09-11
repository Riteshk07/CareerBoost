import React, { useState } from 'react';
import * as Unicons from "@iconscout/react-unicons";
import axios from 'axios'; // Import Axios for making API requests
import "../base/addData.css";
import "../base/formModel.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity} from '@fortawesome/free-solid-svg-icons';

const AddData = () => {
    const [formData, setFormData] = useState({
        title: '',
        job_search_id: '',
        company_name: '',
        description: '',
        requirements: ''
    });

    const [companyFormData, setCompanyFormData] = useState({
        name: '',
        description: '',
        industry: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCompanyInputChange = (event) => {
        const { name, value } = event.target;
        setCompanyFormData({ ...companyFormData, [name]: value });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            // Get the token from local storage (assuming you store it as "token")
            const token = localStorage.getItem('token');
    
            // Configure headers with the token
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            };
            console.log(token);
            console.log(formData);
            // Send a POST request to the backend to add the new job
            const response = await axios.post('/api/jobs/addjob', formData, { headers });
            
            if (response.data.status === 'success') {
                // Clear the form after successful submission
                setFormData({
                    title: '',
                    job_search_id: '',
                    company_name: '',
                    description: '',
                    requirements: ''
                });
                
                
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleAddCompany = async (event) => {
        event.preventDefault();

        try {
            // Get the token from local storage (assuming you store it as "token")
            const token = localStorage.getItem('token');

            // Configure headers with the token
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            };

            // Send a POST request to the backend to add the new company
            const response = await axios.post('/api/companies/add', companyFormData, { headers });

            if (response.data.status === 'success') {
                // Clear the company form after successful submission
                setCompanyFormData({
                    name: '',
                    description: '',
                    industry: ''
                });

                // Close the modal after successful submission (if needed)
                const modal = document.getElementById('addCompanyModal');
                if (modal) {
                    modal.classList.remove('show');
                    modal.style.display = 'none';
                }
            }
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <div className="overview">
            <div className="title">
                <Unicons.UilPlusSquare  />
                <span className="text">Add Data</span>
            </div>
            <button type="button" className='cardbtn' data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="carddata wallet">
                    <div className="overlay"></div>
                    <div className="circle">
                        <img className='cardsvg' src="img\addData\bag.svg" alt="" height="60px" width="78px" />  
                    </div>
                    <p>Add New Job</p>
                </div>
            </button>

            <button
                type="button"
                className='cardbtn'
                data-bs-toggle="modal"
                data-bs-target="#addCompanyModal"
            >
                {/* ... Company button content ... */}
                <div className="carddata wallet">
                    <div className="overlay"></div>
                    <div className="circle">
                        <FontAwesomeIcon className='cardsvg' icon={faCity} style={{"--fa-primary-color": "#310047", "--fa-secondary-color": "#8c00ff", "--fa-secondary-opacity": "0.9","height": "60px","width": "78px"}} /> 
                    </div>
                    <p>Add Company</p>
                </div>
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <form className="formModel">
                            <div className="modal-header">
                                <h1 className="modelTitle" id="exampleModalLabel">Add New Job</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <label>
                                    <input
                                        className="inputModel"
                                        type="text"
                                        placeholder=""
                                        required
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                    />
                                    <span>Job Title</span>
                                </label>

                                <label>
                                    <input
                                        className="inputModel"
                                        type="text"
                                        placeholder=""
                                        required
                                        name="job_search_id"
                                        value={formData.job_search_id}
                                        onChange={handleInputChange}
                                    />
                                    <span>Job Id</span>
                                </label>

                                <label>
                                    <input
                                        className="inputModel"
                                        type="text"
                                        placeholder=""
                                        required
                                        name="company_name"
                                        value={formData.company_name}
                                        onChange={handleInputChange}
                                    />
                                    <span>Company Name</span>
                                </label>

                                <label>
                                    <textarea
                                        className="inputModel"
                                        name="description"
                                        id=""
                                        required
                                        rows="5"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                    ></textarea>
                                    <span>Description</span>
                                </label>

                                <label>
                                    <textarea
                                        className="inputModel"
                                        name="requirements"
                                        id=""
                                        required
                                        rows="5"
                                        cols="2"
                                        value={formData.requirements}
                                        onChange={handleInputChange}
                                    ></textarea>
                                    <span>Requirements</span>
                                </label>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="submitmodel" onClick={handleSubmit}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="addCompanyModal" tabIndex="-1" aria-labelledby="addCompanyModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <form className="formModel">
                            <div className="modal-header">
                                <h1 className="modelTitle" id="addCompanyModalLabel">Add New Company</h1>
                                {/* ... Close button ... */}
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <label>
                                    <input
                                        className="inputModel"
                                        type="text"
                                        placeholder=""
                                        required
                                        name="name"
                                        value={companyFormData.name}
                                        onChange={handleCompanyInputChange}
                                    />
                                    <span>Company Name</span>
                                </label>

                                <label>
                                    <textarea
                                        className="inputModel"
                                        name="description"
                                        id=""
                                        required
                                        rows="5"
                                        value={companyFormData.description}
                                        onChange={handleCompanyInputChange}
                                    ></textarea>
                                    <span>Company Description</span>
                                </label>

                                <label>
                                    <input
                                        className="inputModel"
                                        type="text"
                                        placeholder=""
                                        required
                                        name="industry"
                                        value={companyFormData.industry}
                                        onChange={handleCompanyInputChange}
                                    />
                                    <span>Industry</span>
                                </label>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="submitmodel" onClick={handleAddCompany}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddData;