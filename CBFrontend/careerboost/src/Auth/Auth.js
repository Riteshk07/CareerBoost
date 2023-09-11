import React from 'react';
import '../css/Auth.css';

import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Panels from './components/Panels';

class Auth extends React.Component {
  state = {
    signUpMode: false,
  };

  toggleSignUpMode = () => {
    this.setState({ signUpMode: !this.state.signUpMode });
  };

  render() {
    return (
      <div className={`containerAuth ${this.state.signUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <LoginForm setLoggedIn={this.props.setLoggedIn}/>
            <SignupForm setLoggedIn={this.props.setLoggedIn}/>
          </div>
        </div>
        <Panels toggleSignUpMode={this.toggleSignUpMode} />
      </div>
    );
  }
}

export default Auth;
