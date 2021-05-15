import React,{useState} from 'react';
import { Container, Button, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { Link } from 'react-router-dom'

const Header = (props) => {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar color="dark" dark>
      <Container fluid>
          <Link to="/" className="brandName mr-auto">
            FORTY
          </Link>
        <div className="navbarMenuIcon" >
          <RiMenu3Fill onClick={toggleNavbar} className="mr-2" />
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
              <Link to="/taskboard" onClick={toggleNavbar}>Taskboard</Link>
            </NavItem>
            <NavItem>
              <Link to="/about" onClick={toggleNavbar}>About</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" onClick={toggleNavbar}>Contact</Link>
            </NavItem>
            <NavItem className="b-none w-100">
              <Link to="/login" onClick={toggleNavbar}>
                <Button size="lg" color="primary l-10" className="d-block m-auto w-100 text-uppercase">
                  Login
                </Button>
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Container>
    </Navbar>
  )
}

export default Header;