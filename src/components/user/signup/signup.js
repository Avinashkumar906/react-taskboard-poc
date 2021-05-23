import React from 'react'
import { useFormik } from 'formik';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

import axios from '../../../http/axios';

const Signup = (props) => {
  
  const formik = useFormik({
    initialValues: {
      name:'',
      email: '',
      password: '',
    },
    validate: values => {
      const errors = {};
      if (!/^(?![\s-])[\w\s-]+$/i.test(values.name)) {
        errors.name = 'Enter valid name';
      }
      if (!values.email) {
        errors.email = 'Required field';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = 'Required field';
      } else if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/i.test(values.password)) {
        errors.password = 'Minimum eight characters, at least one letter, one number and one special character';
      }
      return errors
    },
    onSubmit: values => {
      if(formik.dirty && formik.isValid){
        // console.log(values)
        axios.post('/signup',values).then(
          response => {
            console.log(response)
          }
        ).catch(
          err => console.log(err)
        )
      }
    },
  });

  return (
    // <Row className="h-100 m-0 justify-content-end align-items-center">
    //   <Col md="6" lg="5" className="p-0">
        <div className="bg-ternary p-5 m-4 containerHome">
          {/* <Form onSubmit={(e)=>formik.dirty && formik.isValid ? formik.handleSubmit : e.preventDefault()}> */}
          <Form onSubmit={formik.handleSubmit}>
            <div className="h2 mb-3 text-left">Sign up</div>
            <FormGroup className="mb-2"> 
              <Label for="name">Enter Name</Label>
              <Input id="name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} name="name" type="text" placeholder="Enter name" />
              {formik.errors.name && formik.touched.name ? <small id="emailHelp" className="form-text text-danger">{formik.errors.name}</small>: ''}
            </FormGroup>
            <FormGroup className="mb-2"> 
              <Label for="email">Email address</Label>
              <Input id="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} name="email" type="text" placeholder="Enter email" />
              {formik.errors.email && formik.touched.email ? <small id="emailHelp" className="form-text text-danger">{formik.errors.email}</small>: ''}
            </FormGroup>
            <FormGroup className="mb-4">
              <Label for="password">Password</Label>
              <Input id="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} name="password" type="password" placeholder="Password" />
              {formik.errors.password && formik.touched.password ? <small id="passwordHelp" className="form-text text-danger">{formik.errors.password}</small> : ''}
            </FormGroup>
            <Button type="submit" color="primary" disabled={!(formik.dirty && formik.isValid)}>Sign Up</Button>
            <span className="mx-2"> Or </span> 
            <Link to="signin">
              <Button type="button" color="secondary">Already Registered</Button>
            </Link>
            <div className="mt-2">
              <small>Forget password <Link to="reset">click here!</Link></small>
            </div>
          </Form>
        </div>
    //   </Col>
    // </Row>
  )
}

export default Signup
