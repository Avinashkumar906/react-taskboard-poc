import React, { useState } from 'react';
import { Container, Button, Navbar, Nav, NavItem } from 'reactstrap';
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { AiOutlinePoweroff } from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom'
import WithTooltip from '../hoc/withTooltip'
import { connect } from 'react-redux';
import { cleanTaskboard, cleanTodo, removeUser } from '../../store/action/action';


const Header = (props) => {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const logoutHandler = () => {
    props.logoutHandler()
  }
  
  return (
    <Navbar color="dark" dark>
      <Container fluid>
        <Link to="/home" className="brandName mr-auto">
          FORTY
        </Link>
        <div className="navbarMenuIcon" >
          {
            props.user.token ?
            <WithTooltip><span className="m-2" onClick={logoutHandler} data-tip="Sign Out">
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
              <NavLink to="/dashboard" onClick={toggleNavbar}>Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/todolist" onClick={toggleNavbar}>To Do</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/notebook" onClick={toggleNavbar}>Notes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" onClick={toggleNavbar}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" onClick={toggleNavbar}>Contact</NavLink>
            </NavItem>
            <NavItem className="w-100">
              <Link to="/user/signin" className="b-none p-0" onClick={toggleNavbar}>
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
    logoutHandler: () => {
      dispatch(removeUser())
      dispatch(cleanTaskboard())
      dispatch(cleanTodo())
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);