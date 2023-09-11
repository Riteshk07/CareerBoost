import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Unicons from "@iconscout/react-unicons";

const Companies = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetchCompanies();
    }, []);

    const fetchCompanies = async () => {
        try {
            // Get the token from local storage (assuming you store it as "token")
            const token = localStorage.getItem('token');

            // Configure headers with the token
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            };

            const response = await axios.get('/api/companies/getAll', { headers });
            setCompanies(response.data.companies);
        } catch (error) {
            console.error('Error fetching companies:', error);
        }
    };

    const renderCompanies = (
        <table>
            <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Description</th>
                    <th>Industry</th>
                </tr>
            </thead>
            <tbody>
                {companies.map((company) => (
                    <tr key={company._id}>
                        <td>{company.name}</td>
                        <td>{company.description}</td>
                        <td>{company.industry}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
    

    return (
        <div className="overview">
            <div className="title">
                <Unicons.UilBuilding />
                <span className="text">Companies</span>
            </div>
            {renderCompanies}
        </div>
    );
};

export default Companies;
