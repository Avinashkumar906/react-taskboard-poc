import React from 'react'
import { Col, Row } from 'reactstrap'
import { BiUserCircle } from "react-icons/bi";
import { connect } from 'react-redux';

const Dashboard = (props) => {
  
  return (
    <Row className="h-100 m-0 overflowY">
      <div className="gridDashboard">
        <div className="gridItem item1 bg-primary2">
          <Row className="">
            <Col>
              <div className="h2">
                {/*Welcome <strong>Avinash</strong>*/}
              </div>
            </Col>
          </Row>
        </div>
        <div className="gridItem item2 bg-primary2">
          <Row className="h-100 w-100">
            <Col sm="12" style={{fontSize:'5rem'}} className=" text-end align-self-center">
              <BiUserCircle />
            </Col>
            <Col sm="12" className="h2 text-end align-self-center">
               Welcome <strong>{props.user.name}</strong>
            </Col>
          </Row>
        </div>
        <div className="gridItem item3 bg-primary">
          <Row className="h-100 w-100">
            <div sm="12" className="h2 text-end align-self-end">
             {/*5 task from last 7 days.*/}
            </div>
          </Row>
        </div>
        <div className="gridItem item4 bg-ternary">
          <Row className="h-100 w-100">
            <div sm="12" className="h2 text-end align-self-end">
               Welcome <strong>Avinash</strong>
            </div>
          </Row>
        </div>
        <div className="gridItem item5 bg-secondary">
          <Row className="h-100 w-100">
            <div sm="12" className="h2 text-end align-self-end">
             Go to, below shortcuts.
            </div>
          </Row>
        </div>
        <div className="gridItem item6 bg-ternary">
          <Row className="h-100 w-100">
            <div sm="12" className="h2 text-end align-self-end">
             Contact Us
            </div>
          </Row>
        </div>
        <div className="gridItem item7 bg-ternary2">
          <Row className="h-100 w-100">
            <div sm="12" className="h2 text-end align-self-end">
              upcoming completion date for below tasks
            </div>
          </Row>
        </div>
        <div className="gridItem item8 bg-secondary">
          <Row className="h-100 w-100">
            <div sm="12" className="h2 text-end align-self-end">
             Contact us page link will be here.
            </div>
          </Row>
        </div>
      </div>
    </Row>
  )
}

const mapStateToProps = ({user}) => {
  return { user };
} 

const DashboardComponent = connect(mapStateToProps)(Dashboard)

export default DashboardComponent; 
