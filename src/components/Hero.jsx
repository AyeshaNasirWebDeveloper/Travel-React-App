import { Col, Row, Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import travelImg from "../assets/Travel.png";
// import decorBack from "../assets/Decor.png";

const Hero = () => (
  <>
    <Row>
      {/* Spacing */}
      <Col span={2}></Col>
      {/* Left Side */}
      <Col 
        span={10}
      >
        <h4
          style={{ color: "#DF6951", fontSize: "1rem", fontFamily: "poppins" }}
        >
          BEST DESTINATIONS AROUND THE WORLD
        </h4>
        <h1
          style={{
            fontSize: "5rem",
            lineHeight: "0.8",
            fontWeight: "bold",
            color: "#181E4B",
            fontFamily: "Volkhov",
            marginTop: "0",
            marginBottom: "1.5rem",
          }}
        >
          Travel, enjoy
          <br />
          and live a new
          <br />
          and full life
        </h1>
        <p>
          Built Wicket longer admire do barton vanity itself do in it.
          <br />
          Preferred to sportsmen it engrossed listening. Park
          <br />
          gate sell they west hard for the.
        </p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button variant="solid" color="orange" style={{ marginTop: "1rem", padding: "1.5rem" }}>
            Find out more
          </Button>

          <span>
            <PlayCircleOutlined
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "50px",
                fontSize: "2.5rem",
                marginLeft: "2rem",
                marginTop: "1rem",
              }}
            />
          </span>

          <Button type="text" style={{marginTop: "1rem"}}>Play Demo</Button>
        </div>
      </Col>



      {/* Right Side */}
      <Col 
        span={10}
        style={{
          maxHeight: "100vh",
          
        }}
      >
        <div>
        <img src={travelImg} alt="" 
        width={"100%"}
        />
        </div>
      </Col>
      {/* Spacing */}
      <Col span={2}></Col>
    </Row>
  </>
);
export default Hero;
