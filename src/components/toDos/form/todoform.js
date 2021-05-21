import { useFormik } from 'formik';
import React from 'react'
import { Form, Label, Input, FormGroup, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import axios from '../../../http/axios';

function Todoform(props) {
  function getdate(){
    const offset = new Date().getTimezoneOffset() * 60000;
    return (new Date(Date.now() - offset)).toISOString().slice(0, -5);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      created:getdate(),
      startDate:getdate().split('T')[0],
      startTime:getdate().split('T')[1],
      endDate:getdate().split('T')[0],
      endTime:getdate().split('T')[1],
      priority:'LOW',
      severity:'LOW',
      group:'',
      theme:'NA',
      progress:'BACKLOG'
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
        axios.post('task', values).then(
          res=>console.log(res.data)
        ).catch(
          err=>console.log(err)
        )
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <ModalHeader>Modal title</ModalHeader>
      <ModalBody>
          <FormGroup className="mb-2"> 
            <Label for="title">Task title</Label>
            <Input id="title" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.title} name="title" type="text" placeholder="Task title" />
            {formik.errors.title && formik.touched.title ? <small className="form-text text-danger">{formik.errors.title}</small>: ''}
          </FormGroup>
          <FormGroup className="mb-2"> 
            <Label for="description">Task description</Label>
            <Input id="description" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.description} name="description" type="text" placeholder="Task description" />
            {formik.errors.description && formik.touched.description ? <small className="form-text text-danger">{formik.errors.description}</small>: ''}
          </FormGroup>
          <FormGroup className="mb-2 d-flex"> 
            <div className="w-50 m-1 ml-0">
              <Label for="priority">Task Priority</Label>
              <Input id="priority" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.priority} name="priority" type="select" placeholder="Priority">
                <option>LOW</option>
                <option>MEDIUM</option>
                <option>LOW</option>
              </Input>
              {formik.errors.priority && formik.touched.priority ? <small className="form-text text-danger">{formik.errors.priority}</small>: ''}
            </div>
            <div className="w-50 m-1 mr-0">
              <Label for="severity">Task Severity</Label>
              <Input id="severity" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.severity} name="severity" type="select" placeholder="Severity">
                <option>LOW</option>
                <option>MEDIUM</option>
                <option>LOW</option>
              </Input>
              {formik.errors.severity && formik.touched.severity ? <small className="form-text text-danger">{formik.errors.severity}</small>: ''}
            </div>
          </FormGroup>
          <FormGroup className="mb-2 d-flex"> 
            <div className="w-50 m-1 ml-0">
              <Label for="startDate">StartDate</Label>
              <Input id="startDate" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.startDate} name="startDate" type="date" placeholder="DD/MM/YYYY"/>
              {formik.errors.startDate && formik.touched.startDate ? <small className="form-text text-danger">{formik.errors.startDate}</small>: ''}
            </div>
            <div className="w-50 m-1 mr-0">
              <Label for="startTime">Time</Label>
              <Input id="startTime" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.startTime} name="startTime" type="time" placeholder="MM:HH" />
              {formik.errors.startTime && formik.touched.startTime ? <small className="form-text text-danger">{formik.errors.startTime}</small>: ''}
            </div>
          </FormGroup>
          <FormGroup className="mb-2 d-flex"> 
            <div className="w-50 m-1 mr-0">
              <Label for="endDate">EndDate</Label>
              <Input id="endDate" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.endDate} name="endDate" type="date" placeholder="DD/MM/YYYY" />
              {formik.errors.endDate && formik.touched.endDate ? <small className="form-text text-danger">{formik.errors.endDate}</small>: ''}
            </div>
            <div className="w-50 m-1 mr-0">
              <Label for="endTime">Time</Label>
              <Input id="endTime" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.endTime} name="endTime" type="time" placeholder="MM:HH" />
              {formik.errors.endTime && formik.touched.endTime ? <small className="form-text text-danger">{formik.errors.endTime}</small>: ''}
            </div>
          </FormGroup>
          <FormGroup className="mb-2"> 
            <Label for="group">Group</Label>
            <Input id="group" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.group} name="group" type="text" placeholder="Group name" />
            {formik.errors.group && formik.touched.group ? <small className="form-text text-danger">{formik.errors.group}</small>: ''}
          </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button disabled={!(formik.dirty && formik.isValid)} type="submit" color="ternary" size="sm">Add</Button>
        <Button type="button" color="secondary" size="sm" onClick={props.toggle}>Close</Button>
      </ModalFooter>
    </Form>
  )
}

export default Todoform
