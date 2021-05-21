import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'reactstrap';

function Home() {
  return (
    <Row className="h-100 m-0 justify-content-end align-items-center">
      <Col md="6" lg="5" className="p-0">
        <div className="bg-ternary m-4 p-5 containerHome">
          <div className="h3 mb-2">
            Welcome to FORTY app.
            {/* Orgainise you daily notes in better way.  */}
          </div>
          <div className="h5 mb-3">
            Signup our application and orgainise you daily notes in better way.
          </div>
          <div>
            <Link to="/signup">
              <Button size="lg" color="primary" className="m-2 ml-0">
                Sign Up
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" color="secondary" className="m-2 ml-0">
                Explore Dashboard
              </Button>
            </Link>
            {/* <Button color="primary" className="m-2 mr-0">
              Sign Up
            </Button> */}
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Home;
