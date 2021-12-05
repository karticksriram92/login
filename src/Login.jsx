import React, {useRef, useEffect} from 'react';
import './login.css';

function Login() {
    
    state = {
        account: { username:'', password:''}
    };
        
    //const username = React.createRef();
    //const value = useRef(username);
    const username = useRef(null);
    
    useEffect(() => {
        if(username) {
        username.current.focus();
        }
    },[]);
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(username.current.value);
        // console.log(value);
    }
    
    handleChange = e => {
        const account = {...state.account};
        account.username = e.current.value;
        setState({account});
    }
    
    return (
        <div className="container">
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input autoFocus ref={username} value={state.account.username} onchange={handleChange} name="username" id="username" className=  "form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input name="password" id="password" className="form-control" type= "password" />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
  );
}


export default Login;
