import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux';
import { Button, Row, Col, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
import SunEditor from 'suneditor-react';
import { RiAddCircleFill, RiRefreshFill, RiSaveFill, RiDeleteBin2Line} from 'react-icons/ri';

import editorConfig from './editor.config'
import { deleteTasksboardAsync, fetchTasksboardAsync, updateTasksboardAsync } from '../../store/reducer/asyncReducer';
import Board from './board/board'
import WithModal from '../hoc/withModal';
import WithTooltip from '../hoc/withTooltip';
import BoardForm from './form/boardForm';

const Notebook = (props) => {

  const editorRef = useRef(null);
  const [currentTask, setCurrentTask] = useState(null)
  const [updatedTask, setUpdatedTask] = useState(null)

  useEffect(() => {
    if(!props.tasksboard.length){
      props.fetchTaskboard()
    } else if (updatedTask) {
      clickTaskHandler(updatedTask)
    } else {
      clickTaskHandler(props.tasksboard[0])
    }
    return () => null
  }, [props.tasksboard.length])
  
  const fetchTaskboardHandler = () => {
    props.fetchTaskboard()
  }

  const clickTaskHandler = (item) =>{
    setCurrentTask(item)
    editorRef.current.editor.setContents(item.body);
  }

  const saveTaskBoardHandler = () => {
    let element = editorRef.current.editor.getContents();
      if (currentTask && props.tasksboard.length) {
        props.updateTaskBoard({...currentTask, body: element})
      } else {
        props.setContent(element)
        props.toggle()
      }
  }

  const modalController = () => {
    props.setContent(null)
    props.toggle()
  }

  const deleteTaskboardHandler = () => {
    if(!props.tasksboard.length) return;
    const result = window.confirm('Are you sure you want to delete?');
    if(currentTask && result){
      const index = props.tasksboard.findIndex((item)=>item._id === currentTask._id)
      if(index > 0) {
        setUpdatedTask(props.tasksboard[index-1])
      } else {
        setUpdatedTask(null)
      }
      props.deleteTaskBoard(currentTask)
    }
  }

  return (
    <Row className="taskboard">
      <Col sm="6" md="4" lg="3" color="secondary" className="p-0 taskListContainer bg-light">
        <div className="text-end w-100">
          <ButtonGroup className="w-auto mr-auto">
            <WithTooltip>
              <Button color="ternary" className="border-radius-0" data-tip="Add" onClick={modalController}>
                <RiAddCircleFill />
              </Button>
              <Button color="ternary" className="border-radius-0" data-tip="Refresh" onClick={fetchTaskboardHandler}>
                <RiRefreshFill />
              </Button>
            </WithTooltip>
          </ButtonGroup>
        </div>
        <div className="heightFixTaskList">
          <ListGroup>
            {
              props.tasksboard.length 
              ? props.tasksboard.map((item) => <ListGroupItem key={item._id}><Board clicked={clickTaskHandler} selected={currentTask} data={item} /></ListGroupItem>)
              : <Board data={false} />
            }
          </ListGroup>
        </div>
      </Col>
      <Col sm="6" md="8" lg="9" color="secondary" className="p-0 editorContainer">
        <div className="text-end w-100 bg-light ">
          <ButtonGroup className="w-auto mr-auto">
            <WithTooltip>
              <Button color="ternary" className="border-radius-0" data-tip="Save" onClick={saveTaskBoardHandler}>
                <RiSaveFill />
              </Button>
              <Button color="ternary" className="border-radius-0" data-tip="Delete" onClick={deleteTaskboardHandler}>
                <RiDeleteBin2Line />
              </Button>
            </WithTooltip>
          </ButtonGroup>
        </div>
        <SunEditor enable={true} disable={false} show={true} showToolbar={true} setOptions={editorConfig} ref={editorRef}/>
      </Col>
    </Row>
  )
}

const mapStateToProps = state => {
  const { tasksboard } = state;
  return {
    tasksboard
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchTaskboard: () => dispatch(fetchTasksboardAsync()),
    updateTaskBoard: (data) => dispatch(updateTasksboardAsync(data)),
    deleteTaskBoard: (data) => dispatch(deleteTasksboardAsync(data)) 
  }
}

const reduxComponent = connect(mapStateToProps, mapDispatchToProps)(Notebook)

export default WithModal(reduxComponent, BoardForm);
