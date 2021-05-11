import React from 'react'
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'reactstrap'

import Login from './components/login/login';
import Header from './components/navBar/navbar';


function App() {
  return (
    <Router>
      <Container fluid className="p-0 d-flex flex-column">
        <Header></Header>
        <Container className="flex-grow-1">
          <Route path="/" exact render={()=><h1>Home</h1>}></Route>
          <Route path="/login" component={Login}></Route>
        </Container>
      </Container>
    </Router>
  );
}

export default App;
