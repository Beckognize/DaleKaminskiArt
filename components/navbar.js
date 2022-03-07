import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';

export default () => {
    
    return (
  <Navbar expand="lg" style={{zIndex:100,backgroundColor:'white',fontSize:'150%'}}>
    <Container fluid>
      <Navbar.Brand style={{fontSize:'150%'}} href="#home">Dale Kaminski</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="justify-content-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <NavDropdown title="Work" id="basic-nav-dropdown" align="end">
            <NavDropdown.Item href="#action/3.1">Landscapes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Twisted Figures</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Interactive Gallery</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
     </Container>
   </Navbar>
  );
}
 
/*<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Dale Kaminski</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav> */ 
    