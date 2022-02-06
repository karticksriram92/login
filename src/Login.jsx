import React from 'react';
import Joi from 'joi-browser';
import './login.css';
import Form from './form.jsx';

class Login extends Form {
    
    state = {
        data: { username:'', password:''},
		errors: {}
    };
        
    //const username = React.createRef();
    //const value = useRef(username);
    
	schema = {
		username: Joi.string().required(),
		password: Joi.string().required()
	};
	
	doSubmit = () => {
		console.log("submitted");
		console.log("update-form elements moved");
	};
    
    render() {
        const { data, errors } = this.state;
    return (
		<div className="formbox">
			<div className="container">
				<h1>Login Form</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("username","Username")}
					{this.renderInput("password","Password")}
					{this.renderButton("Login")}
				</form>
			</div>
		</div>
  );
}
}

export default Login;