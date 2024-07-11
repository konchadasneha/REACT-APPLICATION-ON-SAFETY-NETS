
 import Container from 'react-bootstrap/Container';

 import "./location.css";
function Location() {
    return(
    <Container>
   
  <div className="location-card">
  <h2>Our Service Locations</h2>
  <iframe className='location-img'title="VB Enterprise Services" src="https://www.google.com.qa/maps/d/embed?mid=1ZWvCVD0GNHwDoLNs0_3lMwjTsTJddE0&ehbc=2E312F&noprof=1" width="100%" height="480"></iframe>
  </div>
  </Container>
    )
}
export default Location;