import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import { RiCalendar2Line } from 'react-icons/ri';

function Board(props) {
  const cardClass = props.data?._id === props.selected?._id ? "active" : "";
  return (
    props.data ?
    <Card color="" className={cardClass} onClick={()=>props.clicked(props.data)}>
      <CardHeader>
        <span>{(new Date(props.data.created)).toDateString()}</span> 
        <RiCalendar2Line />
      </CardHeader>
      <CardBody>
        <div className="h5">
          {props.data.title}
        </div>
      </CardBody>
    </Card> :
    <Card className="" >
      <CardBody>
        <div className="h5">
          Sorry!<br/>No data available
        </div>
      </CardBody>
    </Card>
  )
}

export default Board
