import React from 'react';
import { Card, Row, Col, ButtonGroup, Button } from 'reactstrap';
import { AiFillThunderbolt,AiOutlineArrowDown } from "react-icons/ai";
import { BiStar, BiEditAlt, BiTag, BiShare, BiCalendar } from "react-icons/bi";

function TodosCard({data}) {

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("_id", id);
  }
  // console.log(data)
  return (
    <Card className="mb-2 c-pointer" onDragStart={(e) => handleDragStart(e, data._id)} draggable="true" >
      <Row className="m-0">
        <Col sm="12" className="text-end p-0">
          <ButtonGroup>
            <Button color="ternary border-radius-0">
              <BiStar />
            </Button>
            <Button color="ternary border-radius-0">
              <BiTag />
            </Button>
            <Button color="ternary border-radius-0">
              <BiShare />
            </Button>
            <Button color="ternary border-radius-0">
              <BiEditAlt />
            </Button>
          </ButtonGroup>
        </Col>
        <Col sm="12 my-2">
          <div className="h4 mb-1">{data.title}</div>
          <div className="h5 mb-1">{data.description}</div>
        </Col>
        <Col sm="12">
          <div className="d-flex flex-row justify-content-between align-items-center flex-wrap">
            {/* <div className="h6 mb-1">
                <BiGridAlt></BiGridAlt>Group: Optimalstratex task.
              </div> */}
            <div className="h6 mb-1">
                <AiOutlineArrowDown className="m-1 ml-0"></AiOutlineArrowDown>
                <AiFillThunderbolt className="m-1"></AiFillThunderbolt>
            </div>
          </div>
        </Col>
        <Col sm="12">
          <div className="h6">
            <BiCalendar className="m-1 ml-0"></BiCalendar>{data.startDate}
          </div>
        </Col>
      </Row>
    </Card>
  )
}

export default TodosCard
