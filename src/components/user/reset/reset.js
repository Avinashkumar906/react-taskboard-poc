import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useFormik } from 'formik';

import { addUser } from '../../../store/action/action';
import { fetchTasksboardAsync } from "../../../store/reducer/asyncReducer";
import { connect } from 'react-redux'
import axios from '../../../http/axios';

const Reset = (props) => {
  
  // axios.get('/validate').then(res => console.log(res));
  // axios.get('/tasksboard').then(res => console.log(res));

  const formik = useFormik({
    initialValues: {
      email: '',
      token:'',
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
        axios.post('/reset', values).then(
          response => {
            console.log(response)
            // localStorage.setItem('token', response.data.token);
            // props.loginHandler(response.data.user);
            // props.fetchTasksboard();
          }
        ).catch(
          err => console.log(err)
        )
      }
    },
  });

  const getTokenHandler = () => {
    if(!formik.errors.email && formik.touched.email){
      formik.values.from = "passwordRest@fortyApp.com";
      formik.values.subject = "Reset password token | Forty App";
      axios.post('resettoken', formik.values)
      .then(
        data => alert('Token sent on email!')
      )
      .catch(
        err => alert('User does not exist!')
      )
    } else {
      alert("Enter valid email for token!")
    }
  }

  return (
    // <Row className="h-100 m-0 justify-content-end align-items-center">
    //   <Col md="6" lg="5" className="p-0">
        <div className="bg-ternary p-5 m-4 containerHome">
          {/* <Form onSubmit={(e)=>formik.dirty && formik.isValid ? formik.handleSubmit : e.preventDefault()}> */}
          <Form onSubmit={formik.handleSubmit}>
            <div className="h2 mb-3 text-left">Reset Password</div>
            <FormGroup className="mb-2"> 
              <Label for="email">Email address</Label>
              <Input id="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} name="email" type="text" placeholder="Enter email" />
              {formik.errors.email && formik.touched.email ? <small id="emailHelp" className="form-text text-danger">{formik.errors.email}</small>: ''}
            </FormGroup>
            <FormGroup className="mb-2"> 
              <Label for="token">Token</Label>
              <Input id="token" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.token} name="token" type="text" placeholder="Enter token" />
              {formik.errors.token && formik.touched.token ? <small id="tokenHelp" className="form-text text-danger">{formik.errors.token}</small>: ''}
            </FormGroup>
            <FormGroup className="mb-4">
              <Label for="password">Password</Label>
              <Input id="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} name="password" type="password" placeholder="Password" />
              {formik.errors.password && formik.touched.password ? <small id="passwordHelp" className="form-text text-danger">{formik.errors.password}</small> : ''}
            </FormGroup>
            <Button type="button" onClick={getTokenHandler} color="primary">Get Token</Button>
            <span className="mx-2"> Or </span> 
            <Button type="submit" color="secondary" disabled={!(formik.dirty && formik.isValid)}>Reset</Button>
            <div className="mt-2">
              <small>Already registered <Link to="signin">click here!</Link></small>
            </div>
          </Form>
        </div>
    //   </Col>
    // </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
