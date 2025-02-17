import { Col, Row, List, Button } from "antd";
import {
  InstagramOutlined,
  TikTokOutlined,
  TwitterOutlined,
  CaretRightOutlined,
  AppleFilled,
} from "@ant-design/icons";

const dataOne = ["About", "Careers", "Mobile"];
const dataTwo = ["Help/FAQ", "Press", "Affilates"];
const dataThree = ["Airlinefees", "Airlinefees", "Low fare tips"];

const Footer = () => (
  <>
    <Row
      justify="center"
      style={{
        marginBottom: "5rem",
        padding: "0 1rem", 
      }}
    >
      <Col xs={24} sm={12} md={6} lg={6} xl={4}>
        <h2>Jadoo.</h2>
        <p>Book your trip in minute, get full Control for much longer.</p>
      </Col>

      <Col xs={24} sm={12} md={6} lg={6} xl={4}>
        <h4 style={{ marginLeft: "1rem" }}>Company</h4>
        <List
          size="small"
          dataSource={dataOne}
          renderItem={(item) => <List.Item>{item}</List.Item>}
          style={{ lineHeight: "1rem" }}
        />
      </Col>

      <Col xs={24} sm={12} md={6} lg={6} xl={4}>
        <h4 style={{ marginLeft: "1rem" }}>Contact</h4>
        <List
          size="small"
          dataSource={dataTwo}
          renderItem={(item) => <List.Item>{item}</List.Item>}
          style={{ lineHeight: "1rem" }}
        />
      </Col>

      <Col xs={24} sm={12} md={6} lg={6} xl={4}>
        <h4 style={{ marginLeft: "1rem" }}>More</h4>
        <List
          size="small"
          dataSource={dataThree}
          renderItem={(item) => <List.Item>{item}</List.Item>}
          style={{ lineHeight: "1rem" }}
        />
      </Col>

      <Col xs={24} sm={24} md={12} lg={6} xl={4}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            marginTop: "2rem",
            justifyContent: "center", 
          }}
        >
          <TikTokOutlined style={{ fontSize: "1rem" }} />
          <span
            style={{
              backgroundImage:
                "linear-gradient(to right,  #B8D2F1, #F289AA, #C68BF0, #D164DA, #C963E8, #BFC2E8, #FFC999, #D0D8C9, #BAD0F1, #CED8CB, #FFFFFF00)",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "1.5rem",
              width: "1.5rem",
            }}
          >
            <InstagramOutlined
              style={{
                color: "white",
                fontSize: "0.8rem",
              }}
            />
          </span>
          <TwitterOutlined style={{ fontSize: "1rem" }} />
        </div>
        <h3
          style={{
            color: "grey",
            textAlign: "center", 
            marginTop: "1rem",
          }}
        >
          Discover our app
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <Button
            type="primary"
            color="default"
            variant="solid"
            shape="round"
            icon={<CaretRightOutlined />}
            size="medium"
          >
            Play Store
          </Button>
          <Button
            type="primary"
            color="default"
            variant="solid"
            shape="round"
            icon={<AppleFilled />}
            size="medium"
          >
            App Store
          </Button>
        </div>
      </Col>
    </Row>
  </>
);

export default Footer;