
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


const TopMenu = () => {
  return (
    <>
      <Navbar expand="md" id="topmenu" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" id='head'>DOCTRO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home" className='pages'>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className='pages'>About</Nav.Link>
              <Nav.Link as={Link} to="/search" className='pages'>Search</Nav.Link>
              <Nav.Link as={Link} to="/getappoint" className='pages'>Getappointment</Nav.Link>
              <Nav.Link as={Link} to="/contact" className='pages'>Contact</Nav.Link>
              {/* <Nav.Link as={Link} to="searchname" className='pages'>SearchByName</Nav.Link>
            <Nav.Link as={Link} to="searchcity" className='pages'>SearchByCity</Nav.Link>
            <Nav.Link as={Link} to="speciality" className='pages'>SearchBySpeciality</Nav.Link> */}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopMenu;
     