import React, { Fragment, useState } from 'react'
import { Modal } from "reactstrap";

function withModal(WrappedComponent, ModalComponent) {

  const Temp = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(null);

    const modalToggleHandler = () => {
      setShowModal(!showModal)
    }

    const setModalContent = (content) => {
      setData(content)
    }

    return (
      <Fragment>
        <Modal isOpen={showModal} toggle={modalToggleHandler}>
          <ModalComponent toggle={modalToggleHandler} content={data} />
        </Modal>
        <WrappedComponent toggle={modalToggleHandler} setContent={setModalContent} {...props}/>
      </Fragment>
    )
  }

  return Temp
}

export default withModal;
