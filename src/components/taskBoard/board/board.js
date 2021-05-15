import React from 'react'
import { Col, Card, CardTitle, CardText, CardBody, CardFooter, CardHeader } from 'reactstrap';
import { RiCalendar2Line, RiUser3Line } from 'react-icons/ri';

function Board(props) {
  return (
      <Card color="" className="board cursor-pointer" onClick={()=>props.clicked(props.data)}>
        <CardHeader>
          <span>{(new Date(props.data.created)).toDateString()}</span> 
          <RiCalendar2Line />
        </CardHeader>
        <CardBody>
          <CardText>
            {props.data.title}
          </CardText>
          <div className="card-body-info">
            {props.data.description}
            {/* <span>{props.data.author} <RiUser3Line /> </span> */}
          </div>
        </CardBody>
      </Card>
  )
}

export default Board
