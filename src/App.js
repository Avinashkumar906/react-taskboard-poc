import React from 'react'
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'reactstrap'

import Login from './components/user/login/login';
import Taskboard from './components/taskBoard/taskboard';
import Header from './components/navBar/navbar';
import Todos from "./components/toDos/toDos";
import Home from './page/home';
import Signup from './components/user/signup/signup';
import Reset from './components/user/reset/reset'


function App() {
  console.log(process.env.REACT_APP_BASE_API);
  return (
    <Router>
      <Container fluid className="p-0 d-flex flex-column appContent">
        <Container fluid className="contentHeader p-0">
          <Header></Header>
        </Container>
        <Container fluid className="contentBody p-0">
          <Route path="/" exact component={Home}></Route>
          <Route path="/signin" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/reset" component={Reset}></Route>
          <Route path="/taskboard" component={Taskboard}></Route>
          <Route path="/todolist" component={Todos}></Route>
        </Container>
      </Container>
    </Router>
  );
}

export default App;
