import React from 'react'
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'reactstrap'

import Login from './components/login/login';
import Taskboard from './components/taskBoard/taskboard';
import Header from './components/navBar/navbar';


function App() {
  console.log(process.env.REACT_APP_BASE_API);
  return (
    <Router>
      <Container fluid className="p-0 d-flex flex-column">
        <Header></Header>
        <Container fluid className="flex-grow-1 flex-column h-100 p-0">
          <Route path="/" exact render={()=><h1>Home</h1>}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/taskboard" component={Taskboard}></Route>
        </Container>
      </Container>
    </Router>
  );
}

export default App;
