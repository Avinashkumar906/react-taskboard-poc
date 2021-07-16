import React from 'react'
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody } from "reactstrap";
import { updateTodoAsync, deleteTodoAsync } from '../../../store/reducer/asyncReducer'
import TodosCard from '../todocard/todosCard';

const TodoColumn = (props) => {
  
  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    const currentProgress = e.dataTransfer.getData("progress")
    if(currentProgress && currentProgress !== props.title){
      props.handleStatus({progress: props.title, _id: e.dataTransfer.getData("_id")})
    } else {
      console.log('Cannot drop!')
    }
  };

  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDelete = (data) => {
    props.handleDelete(data);
  }

  return (
    <Card className="h-100 headerFixCard">
      <CardHeader className="justify-content-center fixHeaderTop">
        <span className="text-uppercase h5 m-0">{props.title}</span>
      </CardHeader>
      <CardBody className="overflowY" onDrop={e => handleDrop(e)} onDragOver={e => handleDragOver(e)}>
          {
            props.cards.length 
            ? props.cards.map((data) => <TodosCard data={data} onDelete={handleDelete} key={data._id} />)
            : <TodosCard data={false} />
          }
      </CardBody>
    </Card>
  )
}

const MapdispatchToProps = dispatch => {
  return {
    handleStatus: (data) => dispatch(updateTodoAsync(data)),
    handleDelete: (data) => dispatch(deleteTodoAsync(data))
  }
}

export default connect(null, MapdispatchToProps)(TodoColumn);
