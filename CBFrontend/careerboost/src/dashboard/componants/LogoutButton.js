import React from 'react';

const LogoutButton = ({ onLogout }) => {
    const handleLogout = () => {
        // Call the provided logout function
        onLogout();

        // Reload the application
        window.location.reload();
    };

    return (
        <button className="logout-button" onClick={handleLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;
