import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux';
import { Button, Row, Col, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
// import {Link} from 'react-router-dom'
import SunEditor from 'suneditor-react';
import { RiAddCircleFill, RiRefreshFill, RiEditCircleFill, RiSaveFill, RiDeleteBin2Line} from 'react-icons/ri';

import editorConfig from './editor.config'
import { fetchTasksboardAsync } from '../../store/reducer/asyncReducer';
import Board from './board/board'
import axios from '../../http/axios';
import WithModal from '../hoc/withModal';
import BoardForm from './form/boardForm';

const Notebook = (props) => {

  const editorRef = useRef(null);
  const [currentTask, setCurrentTask] = useState(null)

  useEffect(() => {
    if(!props.tasksboard.length){
      props.fetchTaskboard()
    }
    return () => {
      console.log('Notebook removed from view!')
    }
  }, [])
  
  const fetchTaskboardHandler = () => {
    props.fetchTaskboard()
  }

  const clickTaskHandler = (item) =>{
    setCurrentTask(item)
    editorRef.current.editor.setContents(item.body);
  }

  const saveTaskBoardHandler = () => {
    let element = editorRef.current.editor.getContents();
      if (element === ''  || element === undefined || element === null) {
        alert('Please write some text!');
      } else {
        const request = {...currentTask, body: element}
        axios.patch('taskboard', request).then(
          res=>console.log(res.data)
        ).catch(
          err=>console.log(err)
        )
      }
  }

  const deleteTaskboardHandler = () => {
    if(currentTask){
      axios.delete(`taskboard?taskboardId=${currentTask._id}`).then(
        res=>console.log(res.data)
      ).catch(
        err=>console.log(err)
      )
    }
  }

  return (
    <Row className="taskboard">
      <Col sm="6" md="4" lg="3" color="secondary" className="p-0 taskListContainer bg-light">
        <div className="text-end w-100">
          <ButtonGroup className="w-auto mr-auto">
            <Button color="ternary" className="border-radius-0" onClick={props.toggle}>
              <RiAddCircleFill ></RiAddCircleFill>
            </Button>
            <Button color="ternary" className="border-radius-0" onClick={fetchTaskboardHandler}>
              <RiRefreshFill></RiRefreshFill>
            </Button>
          </ButtonGroup>
        </div>
        <div className="heightFixTaskList">
          <ListGroup>
            {props.tasksboard.map((item) => <ListGroupItem key={item._id}><Board clicked={clickTaskHandler} data={item}></Board></ListGroupItem>)}
          </ListGroup>
        </div>
      </Col>
      <Col sm="6" md="8" lg="9" color="secondary" className="p-0 editorContainer">
        <div className="text-end w-100 bg-light ">
          <ButtonGroup className="w-auto mr-auto">
            <Button color="ternary" className="border-radius-0" onClick={saveTaskBoardHandler}>
              <RiSaveFill></RiSaveFill>
            </Button>
            <Button color="ternary" className="border-radius-0">
              <RiEditCircleFill></RiEditCircleFill>
            </Button>
            <Button color="ternary" className="border-radius-0" onClick={deleteTaskboardHandler}>
              <RiDeleteBin2Line></RiDeleteBin2Line>
            </Button>
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
    fetchTaskboard: () => dispatch(fetchTasksboardAsync())
  }
}

const reduxComponent = connect(mapStateToProps, mapDispatchToProps)(Notebook)

export default WithModal(reduxComponent, BoardForm);
