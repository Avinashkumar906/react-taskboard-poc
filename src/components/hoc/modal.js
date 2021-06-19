import React, { Fragment } from 'react'
import { Modal } from 'reactstrap'

const ModalComp = (props) => {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle}>
      {props.children}
    </Modal>
  )
}

export default ModalComp
