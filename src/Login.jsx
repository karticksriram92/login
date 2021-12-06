import React, {Component} from 'react';
import './login.css';

class Login extends Component {
    
    state = {
        account: { username:'', password:''}
    };
        
    //const username = React.createRef();
    //const value = useRef(username);
    
    handleSubmit = e => {
        e.preventDefault();
        // console.log(value);
    };
    
    handleChange = e => {
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account });
    };
    
    render() {
    return (
        <div className="container">
            <h1>Login Form</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input autoFocus value={this.state.account.username} onChange={this.handleChange} name="username" id="username" className=  "form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input value={this.state.account.password} onChange={this.handleChange} name="password" id="password" className="form-control" type= "password" />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
  );
}
}


export default Login;
