// import Nav from "../../nav/nav"
// import '../../../../src/style.css'
// import React, { useEffect, useState } from 'react'
// import { Container, Row} from 'reactstrap'
// import parseJwt from '../../helpers/authHelper'
// import { useHistory } from "react-router-dom";
// // import * as db from "../../../../Backend/src/db"

// // Tried getting contact form entries from backend DB but didnt work. 

// const Private = () => {
//     // const entries = db.getAllEntries()
//     let history = useHistory();
//     const token = sessionStorage.getItem('token')
//     const user = parseJwt(token).username
//     const [listing, setListing] = useState([])
//     const logout = event => {
//         event.preventDefault()
//         sessionStorage.removeItem('token')
//         history.push("/login")
//     }
//     useEffect(() => {
//         const getData = async () => {
//             const response = await fetch('http://localhost:9000/contact_form/entries', {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Bearer ${token}`
//                 }
//             })
//             const data = await response.json()
//             setListing(data)
//         }
//         getData()
//     }, [token])
//     return (
//         <Container>
//             <Nav />
//             <Row>
//                 <h1>Listings for user: {user}</h1>
//             </Row>
//         </Container>
//     )
// }

// export default Private;