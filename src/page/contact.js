import { useFormik } from 'formik';
import React from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from '../http/axios';
import * as ACTION from '../store/action/action';

const Contact = (props) => {
  const formik = useFormik({
    initialValues: {
      fname:'',
      lname:'',
      email: '',
      body:''
    },
    validate: values => {
      const errors = {};
      if (!/^(?![\s-])[\w\s-]+$/i.test(values.fname)) {
        errors.fname = 'First name must not be empty';
      }
      if (!values.email) {
        errors.email = 'Required field';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Please enter valid email address';
      }
      if (!values.body.trim()) {
        errors.body = 'Please write something';
      } else if (values.body.trim().length <= 10){
        errors.body = 'Must be 10 character long';
      }
      return errors
    },
    onSubmit: values => {
      if(formik.dirty && formik.isValid){
        props.showLoader()
        const template = {
          from: values.email,
          html: `<h2>Hi Avinash,</h2><br/><h2>${values.body}</h2><br/><h4>Regards,</h4><h4>${values.fname} ${values.lname}</h4>`,
          subject: `${values.fname} ${values.lname} | FortyApp`,
          to: "avinashkumar906@gmail.com"
        }
        axios.post('mailservice', template).then(
          res => {
            formik.resetForm()
            props.hideLoader()
            props.showToast(new Object({title:"Update", body:"Thanks for writing to us."}))
          }
        )
        .catch(
          err => {
            console.log(err);
            props.hideLoader()
            props.showToast(new Object({title:"Error", body:"Some error occured."}))
          }
        )
      }
    },
  });

  return (
    <Row className="h-100 m-0 justify-content-center align-items-center overflowY">
      <Col md="10" lg="8" className="p-0">
        <Container>
          <div className="bg-ternary p-5 containerHome m-auto">
            <Form onSubmit={formik.handleSubmit} className="w-100">
              <div className="h2 mb-3 text-left">Write us</div>
              <Row>
                <Col sm="6">
                  <FormGroup className="mb-2"> 
                    <Label for="fname">First name</Label>
                    <Input id="fname" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.fname} name="fname" type="text" placeholder="First name" />
                    {formik.errors.fname && formik.touched.fname ? <small id="emailHelp" className="form-text text-danger">{formik.errors.fname}</small>: ''}
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup className="mb-2"> 
                    <Label for="lname">Last name</Label>
                    <Input id="lname" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.lname} name="lname" type="text" placeholder="Last name" />
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup className="mb-2"> 
                    <Label for="email">Email address</Label>
                    <Input id="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} name="email" type="text" placeholder="Your Email" />
                    {formik.errors.email && formik.touched.email ? <small id="emailHelp" className="form-text text-danger">{formik.errors.email}</small>: ''}
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup className="mb-2"> 
                    <Label for="body">Your Suggestion</Label>
                    <Input id="body" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.body} name="body" type="textarea" rows="3" placeholder="Write Suggestion" />
                    {formik.errors.body && formik.touched.body ? <small id="emailHelp" className="form-text text-danger">{formik.errors.body}</small>: ''}
                  </FormGroup>
                </Col>
                <Col className="text-center">
                  <Button type="submit" color="primary" disabled={!(formik.dirty && formik.isValid)}>Write to us</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Container>
      </Col>
    </Row>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    showToast: (data) => dispatch(ACTION.showToast(data)),
    showLoader: () => dispatch(ACTION.showLoader()),
    hideLoader: () => dispatch(ACTION.hideLoader())
  }
}
export default connect(null, mapDispatchToProps)(Contact)
