import React, { useRef, useState } from 'react'
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Row, Col, ButtonGroup, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom'
import SunEditor from 'suneditor-react';
import { RiAddCircleFill, RiRefreshFill, RiEditCircleFill, RiSaveFill, RiDeleteBin2Line} from 'react-icons/ri';
import { useFormik } from 'formik';

import editorConfig from './editor.config'
import { fetchTasksboardAsync } from '../../store/action/action';
import Board from './board/board'
import axios from '../../http/axios';

const Taskboard = (props) => {

  const editorRef = useRef(null);
  const [modal, setModal] = useState(false)
  const [currentTask, setCurrentTask] = useState(null)

  const formik = useFormik({
      initialValues: {
        title: '',
        description: '',
      },
      validate: values => {
        const errors = {};
        if (!/^(?![\s-])[\w\s-]+$/i.test(values.title)) {
          errors.title = 'Enter valid title';
        } 
        if (!/^(?![\s-])[\w\s-]+$/i.test(values.description)) {
          errors.description = 'Enter valid description';
        } 
        return errors
      },
      onSubmit: values => {
        if(formik.dirty && formik.isValid){
          axios.post('taskboard', values).then(
            res=>console.log(res.data)
          ).catch(
            err=>console.log(err)
          )
        }
      },
    });
  
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
    console.log(currentTask)
    axios.delete(`taskboard?taskboardId=${currentTask._id}`).then(
      res=>console.log(res.data)
    ).catch(
      err=>console.log(err)
    )
  }

  return (
    <Row className="taskboard">
      <Modal isOpen={modal} onClosed={formik.resetForm} toggle={() => setModal(!modal)}>
        <Form onSubmit={formik.handleSubmit}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
              <FormGroup className="mb-2"> 
                <Label for="title">Enter title</Label>
                <Input id="title" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.title} name="title" type="text" placeholder="Enter title" />
                {formik.errors.title && formik.touched.title ? <small className="form-text text-danger">{formik.errors.title}</small>: ''}
              </FormGroup>
              <FormGroup className="mb-2"> 
                <Label for="description">Enter description</Label>
                <Input id="description" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.description} name="description" type="text" placeholder="Enter description" />
                {formik.errors.description && formik.touched.description ? <small className="form-text text-danger">{formik.errors.description}</small>: ''}
              </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button disabled={!(formik.dirty && formik.isValid)} type="submit" color="ternary" size="sm">Add</Button>
            <Button type="button" color="secondary" size="sm" onClick={() => setModal(!modal)}>Close</Button>
          </ModalFooter>
        </Form>
      </Modal>
      <Col sm="6" md="4" lg="3" color="secondary" className="p-0 taskListContainer">
        <div className="text-end w-100 bg-light ">
          <ButtonGroup className="w-auto mr-auto">
            <Button color="ternary" className="border-radius-0" onClick={() => setModal(!modal)}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Taskboard);
