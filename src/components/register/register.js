import React, { useState } from "react";
import { useHistory, useLocation } from 'react-router-dom'
import Nav from "../nav/nav"
import '../../style.css';

    const Register = () => {
    let history = useHistory();
    let location = useLocation();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(true)

    const loginSubmit = async event => {
        
        event.preventDefault()
        const response = await fetch('http://localhost:9000/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({username, password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            setAuth(false)
        } else {
            sessionStorage.setItem('token', payload.token)

            let { from } = location.state || { from: { pathname: "/login" } };
            history.replace(from);
        }
        
    }
      return (
            <>
                <Nav />
                <section>
                    <h2 className="contact-h2">Register</h2>
                        <form className="myForm" id="myForm" onSubmit={loginSubmit}>
                            <label>Username: </label>
                            <input type="text" name="username" id="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                            <br/>
                            <label>Password:</label>
                            <input type="text" name="password" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            <br/>
                            <input className="form-btn" id="button" type="submit" value="Confirm" />
                        </form>
                </section>
            </>
        );
    }

export default Register;