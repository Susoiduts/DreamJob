import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
function Navbar1() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Find a Job</Nav.Link>
            <Nav.Link href="/newjob">Create a Job Offer</Nav.Link> */}
            <NavLink
            to="/" className='nav-link'
          >
            Find a Job
          </NavLink>
            <NavLink
            to="/newjob" className='nav-link'
          >
            Create a Job Offer
          </NavLink>
          
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;