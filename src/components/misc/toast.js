import React from 'react'
import { connect } from 'react-redux';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ToastComp = ({update}) => {
  // console.log(props.update.toast)
  return (
    update.toast.length ?
    <div className="toastHolder">
      <Toast >
        <ToastHeader >
          {update.toast[0].title}
        </ToastHeader>
        <ToastBody>
          {update.toast[0].body}
        </ToastBody>
      </Toast>
    </div> : null
  )
}

const mapStateToProps = ({update}) => {
  return {update}
}
export default connect(mapStateToProps)(ToastComp); 