import React, { useEffect } from 'react';
import { Col, Row, Button, ButtonGroup } from "reactstrap";
import { RiRefreshFill, RiAddCircleFill } from "react-icons/ri";

import TodoForm from './form/todoform';
import withModal from '../hoc/withModal'
import WithTooltip from '../hoc/withTooltip';
import { fetchTodoAsync } from '../../store/reducer/asyncReducer';
import { connect } from 'react-redux';
import TodoColumn from './column/todoColumn';

const ToDos = (props) => {

  // const [task, setTask] = useState(null);
  // console.log(props.todos)

  useEffect(() => {
    if(!props.todos.length){
      props.fetchTodoHandler();
    }
    return () => {
      console.log('Todo cleanup required!')
    }
  }, [])

  const filterHandler = (data, filterKey) => {
    return data.filter((e) => e.progress === filterKey)
  }

  return (
    <Row className="toDos">
      <Col sm="12" className="header">
        <ButtonGroup className="justify-self-end"> 
          <WithTooltip>
            <Button color="ternary br-0" data-tip="Refresh" onClick={props.fetchTodoHandler}>
              <RiRefreshFill/>
            </Button>
            <Button color="ternary  br-0" className="border-radius-0" data-tip="Add" onClick={props.toggle}>
              <RiAddCircleFill/>
            </Button>
          </WithTooltip>
        </ButtonGroup>
      </Col>
      <div className="col-md-4 content">
        <TodoColumn key="backlog" title="BACKLOG" cards={filterHandler(props.todos, "BACKLOG")} />
      </div>
      <div className="col-md-4 content">
        <TodoColumn title="PROGRESS" cards={filterHandler(props.todos, "PROGRESS")} />
      </div>
      <div className="col-md-4 content">
        <TodoColumn title="COMPLETED" cards={filterHandler(props.todos, "COMPLETED")} />
      </div>
    </Row>
  )
}

const mapStateToProps = ({todos}) => {
  return {todos}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTodoHandler: () => dispatch(fetchTodoAsync())
  }
}

const ToDoComponent =  connect(mapStateToProps, mapDispatchToProps)(ToDos);

export default withModal(ToDoComponent, TodoForm);
