import React from 'react'
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'reactstrap'

import Login from './components/login/login';
import Taskboard from './components/taskBoard/taskboard';
import Header from './components/navBar/navbar';
import Todos from "./components/toDos/toDos";


function App() {
  console.log(process.env.REACT_APP_BASE_API);
  return (
    <Router>
      <Container fluid className="p-0 d-flex flex-column appContent">
        <Container fluid className="contentHeader p-0">
          <Header></Header>
        </Container>
        <Container fluid className="contentBody p-0">
          <Route path="/" exact render={()=><h1>Home</h1>}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/taskboard" component={Taskboard}></Route>
          <Route path="/todolist" component={Todos}></Route>
        </Container>
      </Container>
    </Router>
  );
}

export default App;
