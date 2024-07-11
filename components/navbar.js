import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import vblogos from "../assests/vb-logo-1.png";
import whatsapp from "../assests/whatsapp.png";
function CollapsibleExample(){
 

  return (
    <>
    <Navbar expand="lg" className="bg-body-light">
    <Container>
      <Navbar.Brand href="/"><img src={vblogos} width={100} alt='vb-logo'></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="/"  >HOME</Nav.Link>
          <Nav.Link href="/about" >ABOUT</Nav.Link>
          <Nav.Link href="/services">SERVICES</Nav.Link>
          <Nav.Link href="/projects">PROJECTS</Nav.Link>
          <Nav.Link   href="https://wa.me/+919392524565" style={{"paddingRight":"70px"}} ><img src={whatsapp} style={{"padding":"0px","marginTop":"-10px"}} width={38} alt="whatsapp"></img></Nav.Link>
      <div style={{"paddingRight":"50px"}}> <a  href="tel:+919392524565" ><Button variant="dark" style={{"fontWeight":"600","padding":"10px 20px 10px 20px"}}>CALL NOW</Button></a></div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</>
  );
}

export default CollapsibleExample;