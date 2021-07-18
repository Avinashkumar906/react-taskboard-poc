import React, { Fragment } from 'react'
import { Modal } from 'reactstrap'

const ModalComp = (props) => {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle}>
      <div classname="p-4">
        {props.children}
      </div>
    </Modal>
  )
}

export default ModalComp
