import React from 'react'
import { Col, Card, CardTitle, CardText, CardBody, CardFooter, CardHeader } from 'reactstrap';

function Board(props) {
  return (
    <Col md='4' sm='6' lg='3' className="my-2 board">
      <Card>
        <CardHeader>
          {props.data.title}
        </CardHeader>
        <CardBody>
          <CardText>{props.data.description}</CardText>
          <small>
            TaskCount: {props.data.tasks.length}
          </small>
        </CardBody>
        <CardFooter>
          <small>
            {props.data.author}
          </small>
        </CardFooter>
      </Card>
    </Col>
  )
}

export default Board
