import React, { useState } from 'react';
import { Card, Row, Col, ButtonGroup, Button } from 'reactstrap';
import { BiCalendar } from "react-icons/bi";
import { RiMailOpenLine,RiCloseFill,RiDragMove2Line,RiDeleteBin6Line } from "react-icons/ri";
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
    <div>
      <Card className="mb-2 c-initial">
        <Row className={visible ? 'hidden' : 'm-0 visible'}>
          <Col sm="12">
            <div className="h4 p-1 text-center">{data.title}</div>
          </Col>
          <Col sm="12" className="text-center card-footer p-0">
            <ButtonGroup> 
              <WithTooltip>
                <Button color="br-0" data-tip="Open" onClick={handleView}>
                  <RiMailOpenLine />
                </Button>
                <Button color="br-0" data-tip="Delete" onClick={() => props.onDelete(data)}>
                  <RiDeleteBin6Line/>
                </Button>
                <Button color="l-10 br-0" data-tip="Move" onDragStart={(e) => handleDragStart(e, data._id, data.progress)} draggable="true">
                  <RiDragMove2Line/>
                </Button>
              </WithTooltip>
            </ButtonGroup>
          </Col>
        </Row>
        <Row className={!visible ? 'hidden' : 'm-0 visible'}>
          <div className="text-end" onClick={handleView}>
            <RiCloseFill/>
          </div>
          <div className="h5 mb-1">{data.description}</div>
          <Col sm="12" className="">
            <div className="h6 calender text-end">
              <BiCalendar className="m-2 ml-0"></BiCalendar>
              <span>{data.startDate}</span>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default TodosCard;
