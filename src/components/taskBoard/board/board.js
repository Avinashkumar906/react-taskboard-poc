import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import { RiCalendar2Line } from 'react-icons/ri';

function Board(props) {
  return (
      <Card color="" className="board cursor-pointer" onClick={()=>props.clicked(props.data)}>
        <CardHeader>
          <span>{(new Date(props.data.created)).toDateString()}</span> 
          <RiCalendar2Line />
        </CardHeader>
        <CardBody>
          {/* <CardText> */}
            <div className="h4">
              {props.data.title}
            </div>
          {/* </CardText> */}
          <div className="card-body-info h6">
            {props.data.description}
          </div>
        </CardBody>
      </Card>
  )
}

export default Board
