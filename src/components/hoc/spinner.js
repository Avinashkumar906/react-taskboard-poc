import React from 'react'
import { connect } from 'react-redux';
import HashLoader from "react-spinners/HashLoader";

const Spinner = (props) => {
  return (
    props.loader.show ?
    <div className="backdrop">
    <HashLoader color="ffffff" loading="true"></HashLoader>
    </div> : null
  )
}

const mapStateToProps = ({loader}) => {
  return {loader}
}
export default connect(mapStateToProps)(Spinner); 
