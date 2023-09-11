import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock  } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SignupForm = ({setLoggedIn}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    email: "",
    password: "",
    conf_pw: "",
    tc: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.conf_pw) {
      console.error("Password and Confirm Password do not match.");
      return;
    }

    try {
      console.log(formData)
      const response = await axios.post("/api/user/register", formData);
      console.log(response.data);
      const token = response.data.token; // Extract the token from the response

      localStorage.setItem('token', token); // Store the token in local storage
      // Clear form fields
      clearForm();
      setLoggedIn(true);
      // Redirect to login panel
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };
  const clearForm = () => {
    setFormData({
      role: "",
      name: "",
      email: "",
      password: "",
      conf_pw: "",
      tc: ""
    });
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <FontAwesomeIcon icon={faUser} />
        <input
          type="text"
          placeholder="Username"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <FontAwesomeIcon icon={faEnvelope} />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
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
          minLength="6" // Minimum password length
          required
        />
      </div>
      <div className="input-field">
      <FontAwesomeIcon icon={faLock} />
        <input
          type="password"
          placeholder="Confirm Password"
          name="conf_pw"
          value={formData.conf_pw}
          onChange={handleChange}
          minLength="6" // Minimum password length
          required
        />
      </div>
      <div className="input-field">
        <label htmlFor="role">Role</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="Student">Student</option>
          <option value="HR">HR</option>
          <option value="Institution">Institution</option>
        </select>
      </div>
      <div className="input-field">
        <input
          type="checkbox"
          id="tc"
          name="tc"
          checked={formData.tc}
          onChange={handleChange}
          required
        />
        <label htmlFor="tc">I agree to the Terms and Conditions</label>
      </div>
      <input type="submit" className="btnr" value="Sign up" />
      <p className="social-text">Or Sign up with social platforms</p>
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

export default SignupForm;
