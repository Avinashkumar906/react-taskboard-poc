import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Route, useHistory } from 'react-router'

const WithProtectedRoute = (props) => {

  const history = useHistory()
  const [userToken, setUserToken] = useState(props.user.token)
  
  useEffect(() => {
    if(!userToken){
      history.push('/user/signin');
    } else {
      setUserToken(props.user.token)
    }
    return () => {
      // console.log("cleanup protected route")
    }
  }, [userToken])

  return (
    userToken ? <Route {...props} /> : <></>
  )
}

const mapStateToProps = ({user}) => {
  return { user }
}

export default connect(mapStateToProps)(WithProtectedRoute);
