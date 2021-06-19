import React, { useEffect, useState } from 'react'
import './App.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

import Notebook from './components/taskBoard/taskboard';
import Header from './components/navBar/navbar';
import Todos from "./components/toDos/toDos";
import Home from './page/home';
import Dashboard from './page/dashboard';
import axios from './http/axios';
import { addUser } from './store/action/action';
import Spinner from './components/misc/spinner';
import Toast from "./components/misc/toast";
import WithProtectedRoute from './components/hoc/withProtectedRoute';
import Contact from './page/contact';
import About from './page/about';


function App(props) {

  const [token] = useState(localStorage.getItem('token'))

  useEffect(() => {
    if(token){
      axios.get('/validate')
      .then( res => props.loginHandler(res.data) )
      .catch( err => {
        console.log(err);
      })
    } else {
      console.log('Not login!', token)  
    }
    return () => {
      console.log("App.js cleanup")
    }
  }, [])

  return (
    <Router>
      <Container fluid className="p-0 d-flex flex-column appContent">
        <Container fluid className="contentHeader p-0">
          <Header></Header>
        </Container>
        <Container fluid className="contentBody p-0">
          <Switch>
            {/* Public routin */}
            <Route path="/home" component={Home} />
            <Route path="/user" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/* Private routing */}
            <WithProtectedRoute path="/dashboard" component={Dashboard}/>
            <WithProtectedRoute path="/notebook" component={Notebook}/>
            <WithProtectedRoute path="/todolist" component={Todos}/>
            {/* 404 redirect to home */}
            <Route path="/" exact render={() => <Redirect to="/home" /> } />
          </Switch>
        </Container>
      </Container>
      <Toast />
      <Spinner />
    </Router>
  );
}

// const mapStateToProps = ({user}) => {
//   return user;
// } 

const mapDispatchToProps = dispatch => {
  return {
    loginHandler: (userdata) => dispatch(addUser(userdata)),
  }
}

export default connect(null, mapDispatchToProps)(App);
