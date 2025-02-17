import { Col, Row, } from "antd";
import manImg from "../assets/man.png";


const Testimonial = () => (
  <>
    <Row style={{marginTop: "5rem"}}>
      {/* Spacing */}
      <Col span={2}></Col>
      {/* Left Side */}
      <Col 
        span={10}
        
      >
        <h4
          style={{  fontSize: "1rem", fontFamily: "poppins" }}
        >
          TESTIMONIALS
        </h4>
        <h1
          style={{
            fontSize: "4rem",
            lineHeight: "0.8",
            fontWeight: "bold",
            fontFamily: "Volkhov",
            marginTop: "0",
            marginBottom: "1.5rem",
          }}
        >
          What people say
          <br />
          about Us.
        </h1>
      </Col>


      {/* Right Side */}
          <Col span={2}><img src={manImg} alt="DP" /></Col>

      <Col
        span={8}
        style={{
          maxHeight: "100vh",
          color: "#5E6282",
          marginTop: "1rem",
          
        }}
      >            
       <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
        <h5>Mike taylor</h5>
        <p>Lahore, Pakistan</p>
        <div style={{display: "flex", flexWrap: "wrap", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
        <h4>Chris Thomas</h4>
        <p>CEO of Red Button</p>
        </div>
      </Col>
      {/* Spacing */}
      <Col span={2}></Col>
    </Row>
  </>
);
export default Testimonial;
