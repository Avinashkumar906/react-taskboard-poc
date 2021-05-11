import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { useFormik } from 'formik';

import { addUser } from '../../store/action/action';
import { connect } from 'react-redux'
import axios from '../../http/axios';

const Login = (props) => {
  const formik = useFormik({
     initialValues: {
       email: 'avinashkumar906@gmail.com',
       password: 'Papa@123',
     },
     validate: values => {
      // console.log(values);
     },
     onSubmit: values => {
       axios.post('/signin',values).then(
        response => {
          localStorage.setItem('token', response.data.token);
          console.log("Setting user in store", response.data.user)
          props.loginHandler(response.data.user);
        }
       ).catch(
        err => console.log(err)
       )
     },
   });

  return (
    <div className="d-flex h-100 justify-content-center align-items-center">
      <div className="login-container">
        <Form onSubmit={formik.handleSubmit}>
          <div className="h2 mb-3 text-left">Sign In</div>
          <FormGroup className="mb-2"> 
            <Label for="email">Email address</Label>
            <Input id="email" onChange={formik.handleChange} value={formik.values.email} name="email" type="text" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </FormGroup>
          <FormGroup className="mb-2">
            <Label for="password">Password</Label>
            <Input id="password" onChange={formik.handleChange} value={formik.values.password} name="password" type="password" placeholder="Password" />
            <small id="passwordHelp" className="form-text text-danger">wrong password help text</small>
          </FormGroup>
          <Button type="submit" color="primary">Sign In</Button>
          <span className="mx-2"> Or </span> 
          <Button type="button" color="secondary">Click here for Sign Up!</Button>
        </Form>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  const { user } = state;
  return {
    user
  }
}
const mapDispatchToProps = dispatch => {
  return{
    loginHandler: (userdata) => dispatch(addUser(userdata))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
