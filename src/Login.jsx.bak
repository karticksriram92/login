import React, {Component} from 'react';
import Joi from 'joi-browser';
import './login.css';
import Input from './Input.jsx';

class Login extends Component {
    
    state = {
        account: { username:'', password:''},
		errors: {}
    };
        
    //const username = React.createRef();
    //const value = useRef(username);
    
	schema = {
		username: Joi.string().required(),
		password: Joi.string().required()
	};
	
	validate = () => {
		const options = { abortEarly:false};
	const { error } = Joi.validate(this.state.account, this.schema, options);
		console.log(result);
		if(!error) return null;
		
		const errors = {};
		for(let item of error.details) {
			errors[item.path[0]] = item.message;
		}
		return errors;
		
	}
	
    handleSubmit = e => {
        e.preventDefault();
		
		const errors = this.validate()
		this.setState({ errors : errors || {} })
		
		if ( errors ) return;
		console.log("submitted");
    };
	
	validateProperty = ({ name, value }) => {
		const obj = { [name] : value};
		const schema = { [name] : this.schema[name]);
		const { error } = Joi.validate(obj, schema, { aboutEarly : false});
		return (error) ? error.details.message : null;
	}
    
    handleChange = ({ currentTarget:input }) => {
		const errors = { ...this.state.errors};
		const errorMessages = this.validateProperty(input);
		if (errorMessages) errors[input.name] = errorMessages;
		else delete errors[input.name];
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account, errors });
    };
    
    render() {
        const { account, errors } = this.state;
    return (
        <div className="container">
            <h1>Login Form</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <Input value={account.username} name="username" error={ errors.username } onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <Input value={account.password} name="password" error={ errors.password } onChange={this.handleChange} />
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
  );
}
}


export default Login;
