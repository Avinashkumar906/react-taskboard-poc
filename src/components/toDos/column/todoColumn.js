import React from 'react'
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody } from "reactstrap";
import { updateTodoAsync } from '../../../store/reducer/asyncReducer'
import TodosCard from '../todocard/todosCard';

const TodoColumn = (props) => {
  
  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    const currentProgress = e.dataTransfer.getData("progress")
    if(currentProgress !== props.title){
      props.handleStatus({progress: props.title, _id: e.dataTransfer.getData("_id")})
    } else {
      console.log('Same Column')
    }
  };

  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  // console.log(props.cards)
  return (
    <Card className="h-100 headerFixCard">
      <CardHeader className="justify-content-center fixHeaderTop">
        <span className="text-uppercase h5 m-0">{props.title}</span>
      </CardHeader>
      <CardBody className="overflowY" onDrop={e => handleDrop(e)} onDragOver={e => handleDragOver(e)}>
          {props.cards.map((data) => <TodosCard data={data} key={data._id} />)}
      </CardBody>
    </Card>
  )
}

const MapdispatchToProps = dispatch => {
  return {
    handleStatus: (data) => dispatch(updateTodoAsync(data)),
  }
}

export default connect(null, MapdispatchToProps)(TodoColumn);
