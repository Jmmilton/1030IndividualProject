import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Nav from '../nav/nav'

import { Container, Col, Row,  
    Button} from 'reactstrap';


const AdminPage = () => {

    let location = useLocation()
    let pathname = location.pathname
    let providerID = pathname.substring(7)
    let history = useHistory();

    const token = sessionStorage.getItem('token')

    // Logout function
    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        history.push("/login")
    }

    return (   
        <main>
            <Container className="lessCentered">
                <h2 className="work-h2">Administrator Portal</h2> 
                <Button outline color="primary" className="logout-btn" onClick={logout}>LOGOUT</Button>
                <Row>
                    <Col>
                        <a href="/admin/resume"><Button className="manage">Manage Resume</Button></a>
                    </Col>
                    <Col>
                        <a href="/admin/projects"><Button className="manage">Manage Projects</Button></a>
                    </Col>
                </Row>
            </Container>
        </main>
     );
 }
  
 export default AdminPage;