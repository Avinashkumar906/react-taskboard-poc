import React from 'react';
import { Col, Row, Button, ButtonGroup, Card, CardHeader, CardBody } from "reactstrap";
import { RiRefreshFill, RiAddCircleFill } from "react-icons/ri";

import TodosCard from "./todocard/todosCard";
import TodoForm from './form/todoform';
import withModal from '../hoc/withModal'
import axios from '../../http/axios'

const ToDos = (props) => {

  // const [task, setTask] = useState(null);
  // console.log(props)

  const refreshHandler = () => {
    axios.get('tasks')
    .then(
      res => console.log(res.data)
    )
    .catch(
      err => console.log(err)
    )
  }
  
  return (
    <Row className="toDos">
      <Col sm="12" className="header">
        <ButtonGroup className="justify-self-end"> 
          <Button color="ternary" className="border-radius-0" onClick={refreshHandler}>
            <RiRefreshFill/>
          </Button>
          <Button color="ternary" className="border-radius-0" onClick={props.toggle}>
            <RiAddCircleFill/>
          </Button>
        </ButtonGroup>
      </Col>
      <Col md="4" className="content">
        <Card className="h-100 headerFixCard">
          <CardHeader className="justify-content-center fixHeaderTop">
            <span className="text-uppercase h5 m-0">Backlog</span>
          </CardHeader>
          <CardBody className="overflowY">
          </CardBody>
        </Card>
      </Col>
      <Col md="4" className="content">
        <Card className="h-100 headerFixCard">
          <CardHeader className="justify-content-center fixHeaderTop">
            <span className="text-uppercase h5 m-0">Progress</span>
          </CardHeader>
          <CardBody className="overflowY">
            <TodosCard></TodosCard>
          </CardBody>
        </Card>
      </Col>
      <Col md="4" className="content">
        <Card className="h-100 headerFixCard">
          <CardHeader className="justify-content-center fixHeaderTop">
            <span className="text-uppercase h5 m-0">Completed</span>
          </CardHeader>
          <CardBody className="overflowY">
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

const modalWrapper = withModal(ToDos, TodoForm) 

export default modalWrapper;
