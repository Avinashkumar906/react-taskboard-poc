import React from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom';
import { Col, Row, Button } from 'reactstrap';
import SignIn from '../components/user/login/login';
import SignUp from "../components/user/signup/signup";
import Reset from "../components/user/reset/reset";

function Home(props) {

  let { path } = useRouteMatch()

  const home  = (
    <div className="bg-ternary m-4 p-5 containerHome">
      <div className="h3 mb-2">
        Welcome to FORTY app.
      </div>
      <div className="h5 mb-3">
        Signup our application and orgainise you daily notes in better way.
      </div>
      <div>
        <Link to="/user/signup">
          <Button size="lg" color="primary" className="m-2 ml-0">
            Sign Up
          </Button>
        </Link>
        <Link to="/dashboard">
          <Button size="lg" color="secondary" className="m-2 ml-0">
            Explore Dashboard
          </Button>
        </Link>
      </div>
    </div>
  )

  return (
    <Row className="h-100 m-0 justify-content-end align-items-center">
      <Col md="6" lg="5" className="p-0">
        <Route path={path} exact render={()=>home} />
        <Route path={`${path}/signin`} component={SignIn} />
        <Route path={`${path}/signup`} component={SignUp} />
        <Route path={`${path}/reset`} component={Reset} />
      </Col>
    </Row>
  )
}

export default Home;
