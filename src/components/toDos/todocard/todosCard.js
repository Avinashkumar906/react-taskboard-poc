import React, { useState } from 'react';
import { Card, Row, Col, ButtonGroup, Button } from 'reactstrap';
import { BiCalendar } from "react-icons/bi";
import { RiCheckboxCircleFill,RiMailOpenLine,RiCloseFill,RiDragMove2Line,RiDeleteBin6Line } from "react-icons/ri";
import { TiWarning } from 'react-icons/ti';
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

  const getStatus = (e) => {
    let currentDate = new Date();
    let currentTime = currentDate.getTime();
    let toDoStartTime = new Date(data.startTime).getTime();
    let toDoEndTime = new Date(data.endTime).getTime();
    let toDoStartDate = new Date(data.startDate);
    let toDoEndDate = new Date(data.endDate);
    switch (e) {
      case "END_DATE_ELAPSED":{
        return currentDate - toDoEndDate > 0
      }
      case "START_DATE_ELAPSED":{
        return currentDate - toDoStartDate > 0
      }
      case "START_TIME_ELAPSED":{
        return currentTime - toDoStartTime > 0
      }
      case "END_TIME_ELAPSED":{
        return currentTime - toDoEndTime > 0
      }
      default:{
        return false
      }
    }
  }

  return (
    <div>
      {
        data ?
        <Card className="mb-2 c-initial">
          <Row className={visible ? 'hidden' : 'm-0 visible'}>
            <Col sm="12">
              <div className="h4 p-1 text-center mb-0 text-capitalize">{data.title}</div>
              <span>
                {data.progress === "BACKLOG" && getStatus("START_DATE_ELAPSED") && <p className='text-danger'><TiWarning /> <span>Task start date elapsed.</span></p>}
                {data.progress === "PROGRESS" && getStatus("END_DATE_ELAPSED") && <p className='text-danger'><TiWarning /> <span>Task end date elapsed.</span></p>}
                {data.progress === "COMPLETED" && <p className='text-success'><RiCheckboxCircleFill /> <span>Task Completed.</span></p>}
              </span>
              <span>
                Created on : {data.created.split('T')[0]},
                Priority: {data.priority}
              </span>
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
            <div className="text-end" >
              <span className="cursor-pointer p-2 px-0" onClick={handleView}>
                <RiCloseFill />
              </span>
            </div>
            <div className="h5 mb-1 text-center">{data.description}</div>
            <Col sm="12" className="">
              <div className="h6 calender text-center">
                <BiCalendar className="m-2 ml-0" />
                {data.progress === 'BACKLOG' && <span>Start Date: {data.startDate}</span>}
                {data.progress === 'PROGRESS' && <span>End Date: {data.endDate}</span>}
                {data.progress === 'COMPLETED' && <span>Task Completed</span>}
              </div>
            </Col>
          </Row>
        </Card> :
        <Card>
          <Row className={'m-0 visible'}>
            <Col sm="12">
              <div className="p-1 text-center">No task available.</div>
            </Col>
          </Row>
        </Card>
      }
    </div>
  )
}

export default TodosCard;
