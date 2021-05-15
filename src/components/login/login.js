import React from 'react'
// import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { useFormik } from 'formik';

import { addUser, fetchTasksboardAsync } from '../../store/action/action';
import { connect } from 'react-redux'
import axios from '../../http/axios';

const Login = (props) => {
  
  // axios.get('/validate').then(res => console.log(res));
  // axios.get('/tasksboard').then(res => console.log(res));

  const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validate: values => {
        const errors = {};
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
          axios.post('/signin',values).then(
            response => {
              localStorage.setItem('token', response.data.token);
              props.loginHandler(response.data.user);
              props.fetchTasksboard();
            }
          ).catch(
            err => console.log(err)
          )
        }
      },
    });

  return (
    <div className="d-flex h-100 justify-content-center align-items-center">
      <div className="login-container">
        {/* <Form onSubmit={(e)=>formik.dirty && formik.isValid ? formik.handleSubmit : e.preventDefault()}> */}
        <Form onSubmit={formik.handleSubmit}>
          <div className="h2 mb-3 text-left">Sign In</div>
          <FormGroup className="mb-2"> 
            <Label for="email">Email address</Label>
            <Input id="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} name="email" type="text" placeholder="Enter email" />
            {formik.errors.email && formik.touched.email ? <small id="emailHelp" className="form-text text-danger">{formik.errors.email}</small>: ''}
          </FormGroup>
          <FormGroup className="mb-2">
            <Label for="password">Password</Label>
            <Input id="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} name="password" type="password" placeholder="Password" />
            {formik.errors.password && formik.touched.password ? <small id="passwordHelp" className="form-text text-danger">{formik.errors.password}</small> : ''}
          </FormGroup>
          <Button type="submit" color="ternary" disabled={!(formik.dirty && formik.isValid)}>Sign In</Button>
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
    loginHandler: (userdata) => dispatch(addUser(userdata)),
    fetchTasksboard: () => dispatch(fetchTasksboardAsync())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
