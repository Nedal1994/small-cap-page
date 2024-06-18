import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import '../src/css/Header.css'
import Login from './Login';
import { Button, Dropdown, NavDropdown } from 'react-bootstrap';
import { Route,Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="/" >
            <img src={require('./asset/3ns.png')}
              className='logo'
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/form">Form</Nav.Link>
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/">Road Map</Nav.Link>
              <Nav.Link href="/">Token</Nav.Link>
              <Nav.Link href="/">FAQ</Nav.Link> */}
              <NavDropdown title="Home">
              <NavDropdown.Item href="/form">Form</NavDropdown.Item>
              <NavDropdown.Item href="/">Small Cap</NavDropdown.Item>
              <NavDropdown.Item href="/">Road Map</NavDropdown.Item>
              <NavDropdown.Item href="/">FAQ</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="About" className='about'>
              <NavDropdown.Item href="/">Team</NavDropdown.Item>
              <NavDropdown.Item href="/">Mission</NavDropdown.Item>
              <NavDropdown.Item href="/">Vision</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link 
              style={{
                border:'solid',
                borderRadius:'8px',
                paddingRight:'30px',
                paddingLeft:'30px',
                width:'153px',
                height:'45px'
              }}


              href="/signup">Sign up</Nav.Link>

              <Nav.Link 
              style={{
                border:'solid',
                borderRadius:'8px',
                paddingRight:'30px',
                paddingLeft:'30px',
                height:'45px'
              }}


              href="/login">Login</Nav.Link>



            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

