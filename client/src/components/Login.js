import React, {Component} from 'react';
import axios from 'axios';
import clientConfig from '../config/config';
import {Link} from 'react-router-dom';

class Login extends Component{

  constructor(props) {
    super(props);
    this.handlelogin = this.handlelogin.bind(this);
  }

  handlelogin(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("pwd").value;

    const loginRequest = axios({
      method: "POST",
      url: `${clientConfig.url}/login`,
      data: {
        email,
        password
      }
    });

    loginRequest.then((loginData)=>{
      
      if(loginData.data.msg === "login success"){
        localStorage.setItem('token', loginData.data.token);
        this.props._isAuthHandler();
				this.props.props.history.push('/');
			}

    });
  }

  render() {
    return(
      <div className="col-sm-offset-3 col-sm-6">
      <div className="signUpText">
      <p>Login to register for workshops at the Home Depot.</p>
      <p>If this is your first time here you must sign up first.</p>
      
       <Link to="/signup">Click here to Sign Up.</Link> 
      
      </div>
      <form onSubmit={this.handlelogin}>
	      <div className="form-group">
	        <label htmlFor="email">Email address:</label>
	        <input type="email" className="form-control" id="email" />
	      </div>
	      <div className="form-group">
	        <label htmlFor="pwd">Password:</label>
	        <input type="password" className="form-control" id="pwd" />
	      </div>
	      
	      <button type="submit" className="btn btn-default">Submit</button>
	    </form>
      </div>
    )
  }
}
export default Login;