import React from 'react'
import { Col, Card, CardTitle, CardText, CardBody, CardFooter, CardHeader } from 'reactstrap';

function Board(props) {
  return (
    <Col className="board cursor-pointer" onClick={()=>props.clicked(props.data)}>
      <Card>
        <CardHeader>
          {props.data.title}
        </CardHeader>
        <CardBody>
          <CardText>{props.data.description}</CardText>
          {/* <CardText>{JSON.stringify(props.data)}</CardText> */}
          <small>
            By: {props.data.author}<br/>
            Date: {(new Date(props.data.date)).toDateString()}
          </small>
        </CardBody>
        {/* <CardFooter> */}
        {/* </CardFooter> */}
      </Card>
    </Col>
  )
}

export default Board
