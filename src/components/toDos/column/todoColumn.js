import React from 'react'
import { Col, Card, CardHeader, CardBody } from "reactstrap";
import TodosCard from '../todocard/todosCard';

const TodoColumn = (props) => {
  // console.log(props.cards)
  return (
    <Col md="4" className="content">
      <Card className="h-100 headerFixCard">
        <CardHeader className="justify-content-center fixHeaderTop">
          <span className="text-uppercase h5 m-0">{props.title}</span>
        </CardHeader>
        <CardBody className="overflowY">
            {props.cards.map((data) => <TodosCard data={data} key={data._id} />)}
        </CardBody>
      </Card>
    </Col>
  )
}

export default TodoColumn;
