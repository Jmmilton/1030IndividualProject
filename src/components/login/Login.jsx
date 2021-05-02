import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { Container, Row, Col, 
    Form, InputGroup, InputGroupAddon, InputGroupText, 
    Button, FormGroup, Label, Input} from 'reactstrap';
import Nav from '../nav/nav'

const LoginPage = () => {

    let history = useHistory()
    let location = useLocation()

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(true)
    const [showPassword, setShowPassword] = useState(false)

    const loginSubmit = async event => {
        
        event.preventDefault()

        const response = await fetch('http://localhost:4000/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({userName, password})
        })

        const payload = await response.json()

        if (response.status >= 400) {
            setAuth(false)
            alert("wrong username or password")
            document.getElementById('loginError').innerHTML = payload.message
        } else {
            sessionStorage.setItem('token', payload.token)
            let { from } = location.state || { from: { pathname: `/admin/` } };
            history.replace(from);
        }
        
    }

    return (
        <main>
            <Nav />
            <Container className="themed-container centered">
                {!auth && 
                    <div>
                        <p><span className='red' id='loginError'></span></p>
                    </div>
                }
                <h3>Log in</h3>
                <Row>
                    <Col>
                        <Form onSubmit={loginSubmit}>
                            <FormGroup>
                                <Label for="userName">Username</Label>
                                <Input 
                                    type="userName" 
                                    name="userName" 
                                    placeholder="Username" 
                                    required
                                    value={userName} 
                                    onChange={e => setUserName(e.target.value)} 
                                    autoFocus
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Password">Password</Label>
                                <InputGroup>
                                    <Input 
                                        type={showPassword ? 'text' : 'password'} 
                                        name="name" 
                                        required 
                                        value={password} 
                                        onChange={e => setPassword(e.target.value)} 
                                    />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText onClick = {() => {
                                            setShowPassword(!showPassword)
                                        }}>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </FormGroup>
                            <Button type="submit" color="primary">Submit</Button> 
                        </Form>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}
 
export default LoginPage;