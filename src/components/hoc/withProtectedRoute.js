import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

const WithProtectedRoute = (props) => {
  
  const redirectSignIn = <Redirect to="/user/signin" />

  return (
    props.user ? props.children : redirectSignIn
  )
}

const mapStateToProps = ({user}) => {
  return { user }
}

export default connect(mapStateToProps)(WithProtectedRoute);
