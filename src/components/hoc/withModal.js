import React, { Fragment, useState } from 'react'
import { Modal } from "reactstrap";

function withModal(WrappedComponent,ModalComponent) {

  const Temp = (props) => {
    const [showModal, setShowModal] = useState(false);

    const modalToggleHandler = () => {
      setShowModal(!showModal)
    }

    return (
      <Fragment>
        <Modal isOpen={showModal} toggle={modalToggleHandler}>
          <ModalComponent toggle={modalToggleHandler} ></ModalComponent>
        </Modal>
        <WrappedComponent toggle={modalToggleHandler} {...props}/>
      </Fragment>
    )
  }

  return Temp
}

export default withModal;
