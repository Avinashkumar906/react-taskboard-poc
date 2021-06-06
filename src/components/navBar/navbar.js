import React, { useState } from 'react';
import { Container, Button, Navbar, Nav, NavItem } from 'reactstrap';
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { AiOutlinePoweroff } from "react-icons/ai";
import { Link } from 'react-router-dom'
import WithTooltip from '../hoc/withTooltip'
import { connect } from 'react-redux';
import { removeUser } from '../../store/action/action';


const Header = (props) => {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  
  return (
    <Navbar color="dark" dark>
      <Container fluid>
        <Link to="/home" className="brandName mr-auto">
          FORTY
        </Link>
        <div className="navbarMenuIcon" >
          {
            props.user.token ?
            <WithTooltip><span className="m-2" onClick={props.logoutHandler} data-tip="Sign Out">
              <AiOutlinePoweroff />
            </span></WithTooltip> : null
          }
          <WithTooltip><span className="m-2" onClick={toggleNavbar}  data-tip="Menu">
            <RiMenu3Fill/>
          </span></WithTooltip>
        </div>
        <Container fluid className={!collapsed ? 'navBar show' : 'navBar'}>
          <div className="closeModal" onClick={toggleNavbar}>
            <RiCloseFill></RiCloseFill>
          </div>
          {/* <div className="bg-blur"></div> */}
          <Nav navbar>
            <NavItem>
              <Link to="/dashboard" onClick={toggleNavbar}>Dashboard</Link>
            </NavItem>
            <NavItem>
              <Link to="/todolist" onClick={toggleNavbar}>To Do</Link>
            </NavItem>
            <NavItem>
              <Link to="/notebook" onClick={toggleNavbar}>Notes</Link>
            </NavItem>
            <NavItem>
              <Link to="/about" onClick={toggleNavbar}>About</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" onClick={toggleNavbar}>Contact</Link>
            </NavItem>
            <NavItem className="b-none w-100">
              <Link to="/user/signin" onClick={toggleNavbar}>
                <Button size="lg" color="primary l-10" className="d-block m-auto w-100 text-uppercase">
                  Sign In
                </Button>
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Container>
    </Navbar>
  )
}

const mapStateToProps = ({user}) => {
  return { user }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutHandler: () => dispatch(removeUser())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);