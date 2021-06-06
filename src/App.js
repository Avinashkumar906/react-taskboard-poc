import React, { useEffect, useState } from 'react'
import './App.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap';

import Notebook from './components/taskBoard/taskboard';
import Header from './components/navBar/navbar';
import Todos from "./components/toDos/toDos";
import Home from './page/home';
import Dashboard from './page/dashboard';
import axios from './http/axios';
import { connect } from 'react-redux';
import { addUser } from './store/action/action';
import Spinner from './components/hoc/spinner';
import WithProtectedRoute from './components/hoc/withProtectedRoute';


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
            <Route path="/home" component={Home} />
            <Route path="/user" component={Home} />

            <WithProtectedRoute path="/dashboard" component={Dashboard}/>
            <WithProtectedRoute path="/notebook" component={Notebook}/>
            <WithProtectedRoute path="/todolist" component={Todos}/>
            
            <Route path="/" exact render={() => <Redirect to="/home" /> } />
          </Switch>
        </Container>
      </Container>
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
