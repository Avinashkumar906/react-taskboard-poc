import React from 'react'
import { connect } from 'react-redux';
import HashLoader from "react-spinners/HashLoader";

const Spinner = (props) => {
  console.log(props.update)
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
