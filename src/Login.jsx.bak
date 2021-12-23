import React, {Component} from 'react';
import './login.css';
import '../components/Input.jsx'

class Login extends Component {
    
    state = {
        account: { username:'', password:''}
		errors: {}
    };
        
    //const username = React.createRef();
    //const value = useRef(username);
    
    handleSubmit = e => {
        e.preventDefault();
		
		const errors.username = "username is needed."
		this.setState({ errors })
		if ( errors ) return;
		
        // console.log(value);
    };
    
    handleChange = ({ currentTarget:input }) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account });
    };
    
    render() {
        const { account } = this.state;
    return (
        <div className="container">
            <h1>Login Form</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Input value={account.username} name="username" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <Input value={account.password} name="password" onChange={this.handleChange} />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
  );
}
}


export default Login;
