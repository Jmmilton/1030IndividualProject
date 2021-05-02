// import React, { useState } from "react";
// import { useHistory, useLocation } from 'react-router-dom'
// import Nav from "../nav/nav"
// import '../../style.css';


//     const Login = () => {
//         let history = useHistory();
//         let location = useLocation();
//         const [username, setUsername] = useState("")
//         const [password, setPassword] = useState("")
//         const [auth, setAuth] = useState(true)
    
//         const loginSubmit = async event => {
            
//             event.preventDefault()
//             const response = await fetch('http://localhost:9000/login', {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                   },
//                 body: JSON.stringify({username, password})
//             })
//             const payload = await response.json()
//             if (response.status >= 400) {
//                 setAuth(false)
//             } /*else if (Token created and given on submit){

//                 only then allow access to /private..
//                 Couldnt get it working in time..

//             } */ else {
                
//                 (sessionStorage.setItem('token', payload.token))
    
//                 let { from } = location.state || { from: { pathname: "/private" } };
//                 history.replace(from);
//             }
            
//         }
//       return (
//             <>
//                 <Nav />
//                 <section>
//                     <h2 className="contact-h2">Log In</h2>
//                         <form className="myForm" id="myForm" onSubmit={loginSubmit}>
//                             <label>Username: </label>
//                             <input type="text" name="first-name" id="first-name" placeholder="First Name" value={username} onChange={e => setUsername(e.target.value)}/>
//                             <br />
//                             <label>Password:</label>
//                             <input type="text" name="first-name" id="first-name" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
//                             <br/>
//                             <button className="form-btn" id="button" type="submit" value="Log In">Submit</button>
//                         </form>
//                 </section>
//             </>
//         );
//     }

// export default Login;

// //


// //  v  Couldnt get working in time :(  v

// // class Login extends Component {
// //     constructor() {
// //         super();
// //         this.state={
// //             username:null,
// //             password:null,
// //             login:false,
// //             store:null
// //         }
// //     }
// //     login() {
// //         fetch('http://localhost:9000/login', 
// //         {
// //             method:"POST",
// //             body:JSON.stringify(this.state)
// //         }).then((res) => {
// //             res.json().then((result) => {
// //                 console.log("result", result);
// //                 localStorage.setItem('login', JSON.stringify({
// //                     login:true,
// //                     token:result.token
// //                 }))
// //             })
// //         })
// //     }
// //     render() {
// //         return (
// //             <div>
// //                 <h2 className="contact-h2">Log In NEW*********</h2>
// //                 {/* <form className="myForm" id="myForm" onSubmit={loginSubmit}> */}
// //                     <label>Username: </label>
// //                     <input type="text" name="first-name" id="first-name" placeholder="First Name" onChange={(event) => {this.setState({username:event.target.value})}} />
// //                     <br />
// //                     <label>Password:</label>
// //                     <input type="text" name="first-name" id="first-name" placeholder="Password" onChange={(event) => {this.setState({password:event.target.value})}} />
// //                     <br/>
// //                     <button className="form-btn" id="button" type="submit" value="Log In">Submit</button>
// //                 {/* </form> */}
// //             </div>
// //         )
// //     }
// // }

// // export default Login;