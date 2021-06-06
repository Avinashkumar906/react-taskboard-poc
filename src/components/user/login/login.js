import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { useFormik } from 'formik';

import { fetchTasksboardAsync } from '../../../store/reducer/asyncReducer';
import { addUser, showLoader, hideLoader } from '../../../store/action/action';
// import * as ACTIONCONST from '../../../store/action/actionConstant';
import axios from '../../../http/axios';


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
          props.showLoading()
          axios.post('/signin',values).then(
            response => {
              let user = response.data.user
              user.token = response.data.token
              localStorage.setItem('token', user.token);
              props.loginHandler(user);
              props.hideLoading()
            }
          ).catch(
            err => {
              console.log(err);
              props.hideLoading();
            }
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
            <div className="h2 mb-3 text-left">Sign In</div>
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
            <Button type="submit" color="primary" disabled={!(formik.dirty && formik.isValid)}>Sign In</Button>
            <span className="mx-2"> Or </span> 
            <Link to="signup">
              <Button type="button" color="secondary">New User</Button>
            </Link>
            <div className="mt-2">
              <small>Forget password <Link to={`reset`}>click here!</Link></small>
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
    fetchTasksboard: () => dispatch(fetchTasksboardAsync()),
    showLoading: () => dispatch(showLoader()),
    hideLoading: () => dispatch(hideLoader())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
