import AOS from 'aos';
import { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import image1 from "../assests/image01.png";
import "./homecard.css";

function MainCard(){
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
    return(
        <Container className='contain'>
              <Row>
                <Col  ><div data-aos="fade-right"><Image className='img' src={image1} alt='image1 of vb'/></div>
                </Col>
                <Col><div data-aos="fade-left">
                 <h5 style={{"font-weight":"600","color":" #049E79"}}>Why only us!</h5>
                 <h1  style={{"color":"#575757","font-size": "32px"}} >
                 Trust us to be the safety net you can rely on.
                 </h1>
                 <p style={{"color":"#858383","font-size": "15px"}}> Safety Nets offers all kinds of nets and has extensive experience in providing safety nets. King Safety Nets strives to provide the best safety net solutions in all industries to enable safe and effective working at height. We have many years of professional experience in various service areas.
A safety net is a net that reduces the height of a fall from a high place and softens the impact to protect people. The term also refers to tools used to catch falling or flying objects for the safety of those behind or behind the net. Safety nets are used in assembly, building maintenance, leisure, or other industries.</p>
              </div>  </Col>
              </Row>
            </Container>
    )
}

export default MainCard;