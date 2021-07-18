import React, {useEffect, useState} from 'react';
import { Col, Row, Button, ButtonGroup, Input } from "reactstrap";
import { RiSearchEyeFill,RiRefreshFill, RiAddCircleFill } from "react-icons/ri";
import { BiSort } from 'react-icons/bi';

import TodoForm from './form/todoform';
import withModal from '../hoc/withModal'
import WithTooltip from '../hoc/withTooltip';
import { fetchTodoAsync } from '../../store/reducer/asyncReducer';
import { connect } from 'react-redux';
import TodoColumn from './column/todoColumn';

const ToDos = (props) => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [sort,setSort] = useState(1);

  useEffect(() => {
    if(!props.todos.length){

      props.fetchTodoHandler();
    }
    return () => {
      console.log('Todo cleanup required!')
    }
  }, [])

  const filterHandler = (filterKey) => {
    if(searchToggle && searchString){
      return props.todos.filter((e) =>
        e.progress === filterKey && e.title.toLowerCase().includes(searchString.toLowerCase())
      ).sort((a,b) => (new Date(a.created) - new Date(b.created)) * sort)
    } else {
      return props.todos.filter((e) =>
        e.progress === filterKey
      ).sort((a,b) => (new Date(a.created) - new Date(b.created)) * sort)
    }
  }

  const searchHandler = () => {
    setSearchToggle(!searchToggle);
  }

  const searchInputHandler = (target) => {
    setSearchString(target.value)
  }

  const sortHandler = () => {
    setSort(sort*(-1));
  }

  return (
    <Row className="toDos">
      <Col sm="12" className="header">
        <ButtonGroup className="justify-self-end">
          <div className="d-flex">
            {
              searchToggle &&
              <Input bsSize='sm'
                     style={{'margin':'2px'}}
                     value={searchString}
                     placeholder="Search"
                     onChange={(e)=> searchInputHandler(e.target)}/>
            }
          </div>
          <Button color="ternary br-0" data-tip="search" onClick={searchHandler}>
            <RiSearchEyeFill />
          </Button>
          <Button color="ternary br-0" data-tip="sort" onClick={sortHandler}>
            <BiSort />
          </Button>
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
        <TodoColumn key="backlog" title="BACKLOG" cards={filterHandler("BACKLOG")} />
      </div>
      <div className="col-md-4 content">
        <TodoColumn title="PROGRESS" cards={filterHandler("PROGRESS")} />
      </div>
      <div className="col-md-4 content">
        <TodoColumn title="COMPLETED" cards={filterHandler("COMPLETED")} />
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
