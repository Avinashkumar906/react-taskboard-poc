import React, { Fragment } from 'react'
import ReactTooltip from 'react-tooltip';

const WithTooltip = (props) => {
  return (
    <Fragment>
      <ReactTooltip />
      {props.children}
    </Fragment>
  )
}

export default WithTooltip
