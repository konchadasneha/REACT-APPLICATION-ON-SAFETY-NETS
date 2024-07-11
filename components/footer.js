import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Row from "react-bootstrap/Row";
import email from "../assests/email.png";
import facebook from '../assests/facebook.png';
import instagram from '../assests/instagram.png';
import phone from "../assests/phn.png";
import twitter from '../assests/twitter.png';
import whatsapp from "../assests/whatsapp.png";
import "./foot.css";
function HeaderAndFooterExample() {
  return (
    <Card >
      <Card.Body class='CardBody'>
      <Container>
      <Row>
        <Col lg={3} md={6} sm={12}><a href='/' ></a>
      <Nav.Link eventKey="link-2" className='links1'>Nuzvid,</Nav.Link>
      <Nav.Link eventKey="link-2" className='links1'>Eluru,</Nav.Link>
      <Nav.Link eventKey="link-2" className='links1'>521201,</Nav.Link>
      <Nav.Link eventKey="link-2"  className='links1'>Vijayawada,</Nav.Link>
      <Nav.Link eventKey="link-2"  className='links1'>AndhraPradesh.</Nav.Link>
      <Nav.Link eventKey="link-2" href="tel:+919392524565"  className='links1'>(+91)9392524565</Nav.Link>
        </Col>
        <Col lg={3} md={6} sm={12} className='column2' >
        <h5 className='size3'>NAVIGATIONS</h5>
      <Nav.Link href="/" class='links2' >Home</Nav.Link>
      <Nav.Link eventKey="link-1" href="/about"  class='links2'>About</Nav.Link>
      <Nav.Link eventKey="link-2" href="/services" class='links2'>Services</Nav.Link>
      <Nav.Link eventKey="link-2"  href="/projects" class='links2'>Projects</Nav.Link>
        </Col>
        <Col lg={3} md={6} sm={12} className='column2' >
        <h5 className='size3' >CONTACT  US</h5>
   
   <Nav.Link href="tel:+919392524565"  class='links2'><img src={phone} width={25} alt='phone-icon' />(+91) 9392524565  </Nav.Link>
   <Nav.Link eventKey="link-1"  href="mailto:snehakonchada123@gmail.com"  class='links2'><img src={email} width={30} alt='email-icon' style={{"padding":"5px"}} />securenets2024@gmail.com</Nav.Link>
   <Nav.Link   class='links2' style={{"padding":"5px"}}><img src={whatsapp} style={{"padding":"0px","marginTop":"-10px"}} width={28} alt="whatsapp"></img> whatsapp </Nav.Link>
        </Col>
         <Col lg={3} md={6} sm={12}  className='column2'>
         <h5 className='size3' >SOCIAL MEDIA</h5>
       <div class='topp'>  <img src={facebook} alt='facebook-link' class='topr'></img><img src={twitter} alt='twitter-icon' class='topr'></img><img  src={instagram} alt='instagram-icon'></img></div>
         </Col>
      </Row>
      </Container>
      </Card.Body>
      <Card.Footer class="text-center  text-white" style={{"fontSize":"13px"}}>Copyright ©2024  Secure Nets. All rights reserved. </Card.Footer>
    </Card>
  
  );
}

export default HeaderAndFooterExample;