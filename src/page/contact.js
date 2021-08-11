import { useFormik } from 'formik';
import React from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from '../http/axios';
import * as ACTION from '../store/action/action';

const Contact = (props) => {

  const getThankyouMail = (values) => {
    return {
      from: 'avinashkumar906@gmail.com',
      html: `<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" style="font-family: Helvetica; background: #e7e7e7; width: 100%; height: auto; margin: 0; padding: 0;"><div id="mailsub"> <center class="wrapper" style="table-layout: fixed; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; padding: 1rem; margin: 0 auto; width: 100%; box-sizing: border-box;"> <div className="webkit"> <table cellPadding="0" cellSpacing="0" border="0" bgcolor="#ffffff" style="padding: 0; margin: 0 auto; width: 100%; max-width: 600px;"> <tbody> <tr> <td align="center"> <table id="news__article" cellPadding="0" cellSpacing="0" border="0" bgcolor="#ffffff" align="center" style="width: 100%; padding: 0; margin: 0; background-color: #ffffff"> <tbody> <tr> <td colSpan="3" height="auto"> <div style="background-color: #058AE5;color: #ffffff;text-align: center;font-size: 18px;line-height: 1.2;padding: 12px;"> <span style="font-size:24px; font-weight: bold">Thankyou!</span> </div></td></tr></tbody> </table> <table id="intro" cellPadding="0" cellSpacing="0" border="0" bgcolor="#ffffff" align="center" style="width: 100%; padding: 0; margin: 0; background-color: #ffffff"> <tbody> <tr> <td colSpan="3" height="60" align="left"> <div style="padding: 4rem; padding-bottom: 0;"> <div style="color: #1a2028;font-size: 16px;line-height: 1.2;margin-bottom: 2.25rem;font-weight: bold;"> Hi ${values.fname}&nbsp;${values.lname}, </div><div style="color: #1a2028;font-size: 16px;line-height: 1.2;margin-bottom: 2.25rem;"> Thank you for taking the time to write us a review. Thank you for the kind words, and also for your honesty. </div><div style="color: #1a2028;font-size: 16px;line-height: 1.2;margin-bottom: 2.25rem;"> Please explore more about Forty Notes by clicking on below link. </div></div></td></tr><tr> <td width="auto" colSpan="3" align="center" height="auto"> <div style="margin: 1rem auto 2rem;"> <a style="background-color: #058AE5;color: #ffffff; font-size:14px;line-height:1.2; font-weight:bold; padding:12px 24px; text-decoration:none;" href="https://fortynote.vercel.app/" target="_blank">Visit Us</a> </div></td></tr><tr> <td width="auto" colSpan="3" align="center" height="auto"> <div style="background-color: #E1E2E4;color:#000000;font-size:14px;line-height:1.2;border-radius:5px;padding:1.25rem 2rem; margin: 1rem;"> <div style="margin-bottom: 12px;"> <strong>You are receiving this email because you have created an account on fortynotes.</strong> </div><div>You can know more <a href="https://fortynote.vercel.app/about" target="_blank">About Us</a>. </div></div></td></tr></tbody> </table> <table id="news__article" cellPadding="0" cellSpacing="0" border="0" bgcolor="#ffffff" align="center" style="width: 100%; padding: 0; margin: 0; background-color: #ffffff"> <tbody> <tr> <td colSpan="3" align="center"> <div style="background-color:#e9e9e9; padding:1.5rem 1rem;color:#262626"> <div style="font-size:12px;margin-bottom: 0;">Asquare</div><div> <a style="color:#058AE5;font-size:12px;margin-bottom:4px" href="mailto:avinashkumar906@gmail.com"> Contact Us </a> </div><div style="font-size:8px;margin-bottom:4px"> &copy; 2017-2021 All Rights Reserved. </div></div></td></tr></tbody> </table> </td></tr></tbody> </table> </div></center></div></body>`,
      subject: `Thanks you from FortyNotes`,
      to: values.email
    }
  }
  const getFeedbackMail = (values) => {
    return {
      from: values.email,
      html: `<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" style="font-family: Helvetica; background: #e7e7e7; width: 100%; height: auto; margin: 0; padding: 0;"><div id="mailsub"> <center class="wrapper" style="table-layout: fixed; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; padding: 1rem; margin: 0 auto; width: 100%; box-sizing: border-box;"> <div className="webkit"> <table cellPadding="0" cellSpacing="0" border="0" bgcolor="#ffffff" style="padding: 0; margin: 0 auto; width: 100%; max-width: 600px;"> <tbody> <tr> <td align="center"> <table id="news__article" cellPadding="0" cellSpacing="0" border="0" bgcolor="#ffffff" align="center" style="width: 100%; padding: 0; margin: 0; background-color: #ffffff"> <tbody> <tr> <td colSpan="3" height="auto"> <div style="background-color: #058AE5;color: #ffffff;text-align: center;font-size: 18px;line-height: 1.2;padding: 12px;"> Feedback from &nbsp; <span style="font-size:24px; font-weight: bold">${values.fname}&nbsp;${values.lname}</span> | FortyNotes </div></td></tr></tbody> </table> <table id="intro" cellPadding="0" cellSpacing="0" border="0" bgcolor="#ffffff" align="center" style="width: 100%; padding: 0; margin: 0; background-color: #ffffff"> <tbody> <tr> <td colSpan="3" height="60" align="left"> <div style="padding: 4rem; padding-bottom: 0;"> <div style="color: #1a2028;font-size: 16px;line-height: 1.2;margin-bottom: 2.25rem;font-weight: bold;"> Hi Avinash&nbsp;Aggarwal, </div><div style="color: #1a2028;font-size: 16px;line-height: 1.2;margin-bottom: 2.25rem;"> ${values.body}</div></div></td></tr><tr> <td width="auto" colSpan="3" align="center" height="auto"> <div style="margin: 1rem auto 2rem;"> <a style="background-color: #058AE5;color: #ffffff; font-size:14px;line-height:1.2; font-weight:bold; padding:12px 24px; text-decoration:none;" href="https://fortynote.vercel.app/" target="_blank">Forty notes</a> </div></td></tr></tbody> </table> <table id="news__article" cellPadding="0" cellSpacing="0" border="0" bgcolor="#ffffff" align="center" style="width: 100%; padding: 0; margin: 0; background-color: #ffffff"> <tbody> <tr> <td colSpan="3" align="center"> <div style="background-color:#e9e9e9; padding:1.5rem 1rem;color:#262626"> <div style="font-size:12px;margin-bottom: 0;">Asquare</div><div style="font-size:8px;margin-bottom:4px"> &copy; 2017-2021 All Rights Reserved. </div></div></td></tr></tbody> </table> </td></tr></tbody> </table> </div></center></div></body>`,
      subject: `Feedback from ${values.fname} ${values.lname} | FortyNotes`,
      to: 'avinashkumar906@gmail.com'
    }
  }

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
        axios.post('bulkmailservice', [getFeedbackMail(values),getThankyouMail(values)]).then(
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
