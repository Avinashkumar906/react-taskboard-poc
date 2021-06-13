import React, { useState } from 'react';
import { Card, Row, Col, ButtonGroup, Button } from 'reactstrap';
import { BiBookOpen, BiCalendar } from "react-icons/bi";
import { RiMailOpenFill,RiCloseCircleFill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";

import WithTooltip from '../../hoc/withTooltip';

function TodosCard(props) {

  const {data} = props;

  const handleDragStart = (e, id, progress) => {
    e.dataTransfer.setData("_id", id);
    e.dataTransfer.setData("progress", progress);
  }

  const [visible, setVisible] = useState(false);

  const handleView = () => {
    setVisible(!visible);
  }

  return (
    <Card className="mb-2 c-pointer" onDragStart={(e) => handleDragStart(e, data._id, data.progress)} draggable="true" >
      <Row className={visible ? 'hidden' : 'm-0 visible'}>
        <Col sm="12" className="mb-1">
          <div className="h6 calender text-end">
            <BiCalendar className="m-2 ml-0"></BiCalendar>
            <span>{data.startDate}</span>
          </div>
        </Col>
        <Col sm="12">
          <div className="h4">{data.title}</div>
        </Col>
        <Col sm="12" className="text-end mb-1">
          <ButtonGroup> 
            <WithTooltip>
              <Button color="br-0" data-tip="Open" onClick={handleView}>
                <RiMailOpenFill />
              </Button>
              <Button color="br-0" data-tip="Delete" onClick={() => props.onDelete(data)}>
                <AiFillDelete/>
              </Button>
            </WithTooltip>
          </ButtonGroup>
        </Col>
      </Row>
      <Row className={!visible ? 'hidden' : 'm-0 visible'}>
        <div className="text-end" onClick={handleView}>
          <RiCloseCircleFill/>
        </div>
        <div className="h5 mb-1">{data.description}</div>
      </Row>
    </Card>
  )
}

export default TodosCard;
