import React from 'react'
import { connect } from 'react-redux';
import { Container, Button, Row, Col } from 'reactstrap';

import { fetchTasksboardAsync } from '../../store/action/action';
import Board from './board/board'

const Taskboard = (props) => {
  
  const fetchTaskboardHandler = () => {
    props.fetchTaskboard()
  }

  return (
    <Container fluid className="taskBoard">
      <Row>
        <Col className="col-12 my-2">
          <Button color="primary" onClick={fetchTaskboardHandler}>fetch Taskboard</Button>
        </Col>
        {props.tasksboard.map((item) => <Board key={item._id} data={item}></Board>)}
      </Row>
    </Container>
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
