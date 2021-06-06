import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router'

const WithProtectedRoute = (props) => {
  return (
    props.user.token ? <Route {...props} /> : <Redirect to="/user/signin"/>
  )
}

const mapStateToProps = ({user}) => {
  return { user }
}

export default connect(mapStateToProps)(WithProtectedRoute);
