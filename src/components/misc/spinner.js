import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import HashLoader from "react-spinners/HashLoader";

const Spinner = (props) => {

  useEffect(() => {
    // console.log('In Spinner js')
    return () => {
      // console.log('clean spinner')
    }
  }, [props.update.loader])

  return (
    props.update.loader ?
    <div className="backdrop">
      <HashLoader color="ffffff" loading="true"></HashLoader>
    </div> : null
  )
}

const mapStateToProps = ({update}) => {
  return {update}
}
export default connect(mapStateToProps)(Spinner); 
