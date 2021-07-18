import React, {useEffect} from 'react'
import { Col, Row } from 'reactstrap'
import { BiUserCircle } from "react-icons/bi";
import { RiFileList3Fill, RiStickyNoteLine, RiContactsBook2Fill, RiFileInfoLine, RiRefreshLine, RiBallPenLine } from "react-icons/ri";
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import {refresh} from "../store/reducer/asyncReducer";

const Dashboard = (props) => {

  const refreshHandler = () => {
    props.refresh();
  }

  useEffect(() => {
    props.refresh();
  }, [])
  
  return (
    <Row className="h-100 m-0 overflowY">
      <div className="gridDashboard">
        <div className="gridItem item1 bg-primary2">
          <Row className="h-100 w-100 m-0">
            <Link to="/todolist">
              <Col sm="12 m-2" style={{fontSize:'4rem'}} className=" text-center align-self-center">
                <RiFileList3Fill/>
              </Col>
              <Col sm="12" className="h2 text-center align-self-center">
                  Go Todo's
              </Col>
            </Link>
          </Row>
        </div>
        <div className="gridItem item2 bg-primary2">
          <Row className="h-100 w-100 m-0">
            <Col sm="4" style={{fontSize:'4rem'}} className=" text-center align-self-center">
              <RiBallPenLine/>
            </Col>
            <Col sm="8" className="text-left align-self-center mt-4">
              <h2 className="h2">
                You have {props.todos.length} tasks in todo.
              </h2>
            </Col>
          </Row>
        </div>
        <div className="gridItem item3 bg-primary">
          <Row className="h-100 w-100 m-0">
            <Col sm="12" style={{fontSize:'6rem'}} className=" text-center align-self-center">
              <BiUserCircle />
            </Col>
            <Col sm="12" className="h2 text-center align-self-center">
              Welcome <strong>{props.user.name}</strong>
            </Col>
          </Row>
        </div>
        <div className="gridItem item4 bg-ternary">
          <Row className="h-100 w-100 cursor-pointer m-0" onClick={refreshHandler}>
            <Col sm="12" style={{fontSize:'6rem'}} className="text-center align-self-center">
              <RiRefreshLine />
            </Col>
            <Col sm="12" className="h2 text-center align-self-center">
              Refresh Dashboard
            </Col>
          </Row>
        </div>
        <div className="gridItem item5 bg-secondary">
          <Row className="h-100 w-100 m-0">
            <Link to="/notebook">
              <Col sm="12 m-2" style={{fontSize:'4rem'}} className=" text-center align-self-center">
                <RiStickyNoteLine/>
              </Col>
              <Col sm="12" className="h2 text-center align-self-center">
                Go Notebook
              </Col>
            </Link>
          </Row>
        </div>
        <div className="gridItem item6 bg-ternary">
          <Row className="h-100 w-100 m-0">
            <Link to="/contact">
              <Col sm="12 m-2" style={{fontSize:'4rem'}} className=" text-center align-self-center">
                <RiContactsBook2Fill/>
              </Col>
              <Col sm="12" className="h2 text-center align-self-center">
                Contact Us
              </Col>
            </Link>
          </Row>
        </div>
        <div className="gridItem item7 bg-ternary2">
          <Row className="h-100 w-100 m-0">
            <Link to="/about">
              <Col sm="12 m-2" style={{fontSize:'4rem'}} className=" text-center align-self-center">
                <RiFileInfoLine/>
              </Col>
              <Col sm="12" className="h2 text-center align-self-center">
                About Us
              </Col>
            </Link>
          </Row>
        </div>
        <div className="gridItem item8 bg-secondary">
          <Row className="h-100 w-100 m-0">
            <Col sm="4" style={{fontSize:'4rem'}} className=" text-center align-self-center">
              <RiBallPenLine/>
            </Col>
            <Col sm="8" className=" text-left align-self-center mt-4">
              <h2 className="h2">
                You have {props.tasksboard.length} notes in notebook.
              </h2>
            </Col>
          </Row>
        </div>
      </div>
    </Row>
  )
}

const mapStateToProps = ({user, tasksboard, todos}) => {
  return { user, tasksboard, todos };
}

const mapDispatchToProps = dispatch => {
  return {
    refresh: () => dispatch(refresh())
  }
}

const DashboardComponent = connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default DashboardComponent; 
