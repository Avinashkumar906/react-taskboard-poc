import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Toast, ToastBody, ToastHeader, Badge } from 'reactstrap';
import * as ACTION from '../../store/action/action'

const ToastComp = (props) => {
  let update = props.update;
  const toastClickHandler = () => props.hideToastHandler();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      props.hideToastHandler();
      // console.log('This will run after 4 second!')
    }, 5000);
    return () => clearTimeout(timer);
  }, [update.toast.length]);

  return (
    update.toast.length ?
    <div className="toastHolder">
      <Toast onClick={toastClickHandler}>
        <div className="toast-header">
          <div className="toast-title">
            {update.toast[0].title}&nbsp;
          </div>
          <div className="toast-badge">
            <Badge pill className="bg-secondary">{update.toast.length}</Badge>
          </div>
        </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    hideToastHandler: () => dispatch(ACTION.hideToast())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToastComp); 