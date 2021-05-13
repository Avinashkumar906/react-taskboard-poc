import React from 'react'
import { connect } from 'react-redux';
import { Button, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom'

import { fetchTasksboardAsync } from '../../store/action/action';
import Board from './board/board'

const Taskboard = (props) => {
  
  const fetchTaskboardHandler = () => {
    props.fetchTaskboard()
  }

  const clickTaskHandler = (item) =>{
    console.log(item)
  }

  return (
    // <Container fluid className="taskBoard p-0">
    <div>
      <Row className="m-0 w-100">
        <Button color="primary" className="border-radius-0" onClick={fetchTaskboardHandler}>fetch Taskboard</Button>
        <Col sm="6" md="4" lg="3" color="secondary" className="bg-light p-0 taskListContainer">
          {props.tasksboard.map((item) => <Board clicked={clickTaskHandler} key={item._id} data={item}></Board>)}
        </Col>
        <Col sm="6" md="8" lg="9" color="secondary" className="bg-light h-100 taskListContainer">
         
        </Col>
      </Row>
    </div>
      // {/* <Row>
      //   <Col className="col-12 my-2">
      //   </Col>
      // </Row> */}
    // </Container>
  )
}

const mapStateToProps = state => {
  const { tasksboard } = state;
  return {
    tasksboard
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchTaskboard: () => dispatch(fetchTasksboardAsync())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Taskboard);
