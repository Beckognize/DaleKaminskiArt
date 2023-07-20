import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';

export default () => {
    
    return (
  <Navbar expand="lg" style={{zIndex:100,backgroundColor:'white',fontSize:'150%'}}>
    <Container fluid>
      <Navbar.Brand style={{fontSize:'120%'}} href="/">Dale Kaminski</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="justify-content-end">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/bio">Biography</Nav.Link>
          <Nav.Link href="/cv">CV</Nav.Link>
          <NavDropdown title="Work" id="basic-nav-dropdown" align="end">
            <NavDropdown.Item href="/signs">Sign of the Times </NavDropdown.Item>
            <NavDropdown.Item href="/collage">Collage</NavDropdown.Item>
            <NavDropdown.Item href="/flowers">Flowers and Insects</NavDropdown.Item>
            <NavDropdown.Item href="/picture">Picturesque</NavDropdown.Item>
            <NavDropdown.Item href="/people">People</NavDropdown.Item>
            <NavDropdown.Item href="/self">Self Portrait</NavDropdown.Item>
            <NavDropdown.Item href="/newtop">New Topographics</NavDropdown.Item>
            <NavDropdown.Item href="/ontheroad">On the Road</NavDropdown.Item>
            <NavDropdown.Item href="/video">Video</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/contact">Contact Me</NavDropdown.Item>
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
    