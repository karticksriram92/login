import React, {Component} from 'react';
import Joi from 'joi-browser';
import './login.css';
import Input from './Input.jsx';
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
	
	doSubmit = {
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
					<div className="form-group">
						<Input value={data.username} name="username" error={ errors.username } onChange={this.handleChange} />
					</div>
					<div className="form-group">
						<Input value={data.password} name="password" error={ errors.password } onChange={this.handleChange} />
					</div>
					<button disabled={this.validate()} className="btn btn-primary">Login</button>
				</form>
			</div>
		</div>
  );
}
}

export default Login;
