import React, {useRef, useEffect} from 'react';
import './login.css';

function Login() {
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
    
    return (
        <div className="container">
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input autoFocus ref={username} name="username" id="username" className=  "form-control" type="text" />
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
