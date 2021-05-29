import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

const WithProtectedRoute = (props) => {
  
  const redirectSignIn = <Redirect to="/user/signin" />
  const token = localStorage.getItem('token')
  return (
    token ? props.children : redirectSignIn
  )
}

// const mapStateToProps = ({user}) => {
//   return { user }
// }

export default connect(null)(WithProtectedRoute);
