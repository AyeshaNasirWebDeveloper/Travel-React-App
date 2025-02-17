import { Card, Row, Col } from "antd";
import products from "../productsData/data";
import backImg from "../assets/back-image.png"
const { Meta } = Card;

const Cards = () => (
  <>
    <Row>
      {/* Spacing */}
      <Col span={2}> </Col>
   
    <Col 
    span={20}
    style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}
    >
    {products.map((products) => (
      <Card
      key={products.id}
      hoverable
      style={{
        width: 240,
        marginTop: "55px",
        display: "flex", 
        flexWrap: "wrap", 
        justifyContent: "center", 
        alignItems: "center", 
        textAlign: "center",
        
      }}
      cover={
        <img
          alt={products.title}
          src={products.imageUrl}
          height="70px"
          width="66.74px"
        />
      }
    >
      <Meta title={products.title} description={products.description} />
      <img src={backImg} alt="background" width={100} height={100}
      style={{
        top: "120px",
        left: "-40px",
        borderRadius: "30px 0px",
        zIndex: "-1",
        position: "absolute"
        
      }}
      />
    </Card>
    ))}
    </Col>
    {/* Spacing */}
    <Col span={2}></Col>
    </Row>
  </>
);
export default Cards;
