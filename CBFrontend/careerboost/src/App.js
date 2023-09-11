import React, { useState, useEffect } from "react";
import Auth from "./Auth/Auth";
import Dashboard from "./dashboard/Dashboard";
import HRDashboard from "./dashboard/HRDashboard"; // Import HRDashboard component
import InstituteDashboard from "./dashboard/InstituteDashboard"; // Import InstituteDashboard component
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const token = localStorage.getItem("token");
  const [loggedIn, setLoggedIn] = useState(false);
  const [usrId, setUsrId] = useState("");
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Get the token from local storage (assuming you store it as "token")

        // Configure headers with the token
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };
        const response = await axios.get("/api/user/loggeduser", { headers });
        console.log(response.data.user);
        setLoggedIn(true);
        setUsrId(response.data.user._id);
        setUserDetails(response.data.user);
        console.log(response.data.user);
        console.log(response.data.user._id);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setLoggedIn(false);
      }
    };
    if (!!token) {
      fetchUserDetails();
      console.log(token);
    } else {
      setLoggedIn(false);
      console.log(token);
    }
  }, [token]);

  return (
    <div>
      <Routes>
        {loggedIn ? (
          <>
            {/* Conditional rendering based on user role */}
            {userDetails && userDetails.role === "Student" && (
              <>
              <Route
                path="/:section"
                element={
                  <Dashboard
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    userDetails={userDetails}
                    usrId={usrId}
                  />
                }
              />
              <Route
                path="/"
                element={
                  <Dashboard
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    userDetails={userDetails}
                    usrId={usrId}
                  />
                }
              />
              </>
              
              
            )}
            {userDetails && userDetails.role === "HR" && (
              <>
              <Route
                path="/:section"
                element={
                  <HRDashboard
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    userDetails={userDetails}
                    usrId={usrId}
                  />
                }
              />
              <Route
                path="/"
                element={
                  <HRDashboard
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    userDetails={userDetails}
                    usrId={usrId}
                  />
                }
              />
              </>
            )}
            {userDetails && userDetails.role === "Institution" && (
              <>
              <Route
                path="/:section"
                element={
                  <InstituteDashboard
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    userDetails={userDetails}
                    usrId={usrId}
                  />
                }
              />
              <Route
                path="/"
                element={
                  <InstituteDashboard
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    userDetails={userDetails}
                    usrId={usrId}
                  />
                }
              />
              </>
            )}
          </>
        ) : (
          <>
            <Route path="/" element={<Auth setLoggedIn={setLoggedIn} />} />
            {/* Pass userDetails and usrId as props */}
            <Route
              path="/:section"
              element={
                <Dashboard
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                  userDetails={userDetails}
                  usrId={usrId}
                />
              }
            />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
