import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import { RiCalendar2Line } from 'react-icons/ri';

function Board(props) {
  const cardClass = props.data?._id === props.selected?._id ? "active" : "";
  
  return (
      <Card color="" className={cardClass} onClick={()=>props.clicked(props.data)}>
        <CardHeader>
          <span>{(new Date(props.data.created)).toDateString()}</span> 
          <RiCalendar2Line />
        </CardHeader>
        <CardBody>
          <div className="h5">
            {props.data.title}
          </div>
          {/* <div className="card-body-info h6">
            {props.data.description}
          </div> */}
        </CardBody>
      </Card>
  )
}

export default Board
