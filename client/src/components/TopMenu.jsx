import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
const TopMenu=()=>{
    return(
        <>
        <Navbar  id="topmenu">
        <Container>
          <Navbar.Brand href="#home" id='head'>DOCTRO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" className='pages'>Home</Nav.Link>
            <Nav.Link as={Link} to="search" className='pages'>Search</Nav.Link>
            <Nav.Link as={Link} to="contact" className='pages'>Contact</Nav.Link>
            {/* <Nav.Link as={Link} to="searchname" className='pages'>SearchByName</Nav.Link>
            <Nav.Link as={Link} to="searchcity" className='pages'>SearchByCity</Nav.Link>
            <Nav.Link as={Link} to="speciality" className='pages'>SearchBySpeciality</Nav.Link> */}
            
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default TopMenu;