import React from 'react'
import { useFormik } from 'formik';
import { Button, Form, FormGroup, Input, Label, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { connect } from 'react-redux';
import { addTasksboardAsync } from '../../../store/reducer/asyncReducer';

function BoardForm(props) {
  const formik = useFormik({
      initialValues: {
        title: '',
        description: '',
        body: props.content || '**data not encrypted, please don\'t save any confidential information**',
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
          props.saveFormHandler(values);
          props.toggle();
        }
      },
    });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <ModalHeader>Notes</ModalHeader>
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
        <Button type="button" color="secondary" size="sm" onClick={props.toggle}>Close</Button>
      </ModalFooter>
    </Form>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    saveFormHandler: (data) => dispatch(addTasksboardAsync(data))
  }
}

export default connect(null,mapDispatchToProps)(BoardForm) 
