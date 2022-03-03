import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';

export default () => {
    
    return (
        
<Navbar bg="light" expand="lg">
    <div className= 'container-fluid'>
        <Navbar.Brand href="#home">Dale Kaminski</Navbar.Brand>
    </div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <NavDropdown title="Work" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Landscapes</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Twisted Figures</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Interactive Gallery</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
</Navbar>
     
     );
    }