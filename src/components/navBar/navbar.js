import React,{useState} from 'react';
import { Container, Button, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'

const Header = (props) => {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar color="dark" dark>
      <Container fluid>
        {/* <NavbarBrand className="mr-auto"> */}
          <Link to="/" className="brandName mr-auto">
            FORTY
          </Link>
          {/* <span className="brandAuthor">By Sandy</span> */}
        {/* </NavbarBrand> */}
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Container fluid className={!collapsed ? 'navBar show' : 'navBar'}>
          <Button className="closeModal" close onClick={toggleNavbar} />
          {/* <div className="bg-blur"></div> */}
          <Nav navbar>
            <NavItem>
              <Link to="/dashboard" onClick={toggleNavbar}>Dashboard</Link>
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
                <Button size="lg" color="primary" className="d-block m-auto w-100 text-uppercase">
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