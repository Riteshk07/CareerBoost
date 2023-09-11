import React from 'react';

const Panels = ({ toggleSignUpMode }) => {
  return (
    <div className="panels-container">
      {/* Left Panel ... */}
      <div className="panel left-panel">
        <div className="content">
            <img src="img/auth/CareerBoost (1).png" alt="" className="image" />
            <h3>Are you a new user?</h3>
            
            <button onClick={toggleSignUpMode} className="btnr transparent" id="sign-up-btn">
            Sign up
            </button>
        </div>
        <img src="img/auth/log2.svg" className="image" alt="" />
      </div>
      {/* Right Panel ... */}
      <div className="panel right-panel">
        <div className="content">
            <img src="img/auth/CareerBoost (1).png" alt="" className="image" />
            <h3>One of us?</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laboriosam ad deleniti.
            </p>
            
            <button onClick={toggleSignUpMode} className="btnr transparent" id="sign-in-btn">
            Sign in
            </button>
        </div>
        <img src="img/auth/register.svg" className="image" alt="" />
      </div>
      {/* Other contents ... */}
      
      
    </div>
  );
};

export default Panels;
