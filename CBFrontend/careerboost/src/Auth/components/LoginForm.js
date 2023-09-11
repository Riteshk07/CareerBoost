import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const LoginForm = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      console.error("Email and password are required.");
      // You can display an error message to the user here
      return;
    }
    try {
      
      const response = await axios.post("/api/user/login", formData);
      console.log(response.data);
      // Store the token in localStorage or cookies
      const token = response.data.token; // Extract the token from the response

      localStorage.setItem('token', token); // Store the token in local storage
      clearForm();
      setLoggedIn(true);

      navigate("/home")

    } catch (error) {
      console.error(error);
    }
  };
  const clearForm = () => {
    setFormData({
      email: "",
      password: ""
    });
  };

  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <FontAwesomeIcon icon={faEnvelope} />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <FontAwesomeIcon icon={faLock} />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="Login" className="btnr solid" />
      <p className="social-text">Or Sign in with social platforms</p>
      <div className="social-media">
        <Link to="#" className="social-icon">
        <FontAwesomeIcon icon={faGoogle} />
        </Link>
        <Link to="#" className="social-icon">
        <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
