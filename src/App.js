import { Helmet } from "react-helmet";
import Footer from "./components/footer/footer";
import "../src/style.css"
import Contact from './components/contact/contact';
import Home from './components/home/home';
import Register from "./components/register/register"
// import Login from "./components/login/login"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from "react"
import Private from "./components/login/private/private";
import ViewResume from './components/resume/ViewResume'
import ViewProjects from './components/projects/ViewProjects'

import LoginPage from './components/login/Login.jsx'
import SecureRoute from './components/login/SecureRoute'
import AdminPage from './components/login/AdminPage'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }

  callAPI(){
    fetch("http://localhost:3001/routes")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
  }


render(){
  return (
    <Router>
      <div className="App">
        <Helmet>
          <link rel="stylesheet" href="../src/style.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css" />
          <link href="https://fonts.googleapis.com/css2?family=Lato&family=Libre+Baskerville:wght@700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
          <title>Jason Milton</title>
        </Helmet>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path='/login' component={LoginPage}/>
          <Route path="/resume" component={ViewResume}/>
          <Route path="/projects" component={ViewProjects}/>
          <Route path="/contact" component={Contact}/>
          {/* <Route path="/register" component={Register}/> */}
          <Route path="/private" component={Private}/>
          <SecureRoute exact path='/admin'>
            <AdminPage />
          </SecureRoute>    
          <SecureRoute exact path='/admin/projects'>
            <ViewProjects />
          </SecureRoute>
          <SecureRoute exact path='/admin/resume'>
            <ViewResume />
          </SecureRoute>  
          <Route component={Error}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
}

export default App;
