import { Card, Row, Col } from "antd";
import products from "../productsData/cardsData";

const DestinationCards = () => (
  <>
    <Row>
      {/* Spacing */}
      <Col span={2}> </Col>

      <Col
        span={20}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {products.map((products) => (
          <Card
            key={products.id}
            hoverable
            style={{
              width: 340,
              marginTop: "55px",
            }}
            cover={
              <img
                alt={products.title}
                src={products.imageUrl}
                height="400px"
                width="400px"
              />
            }
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem"}}>
              <p>{products.title}</p>
              <p>{products.price}</p>
              </div>
              
              <p><img src={products.icon} alt="background" /> {products.description}</p>
            
          </Card>
        ))}
      </Col>
      {/* Spacing */}
      <Col span={2}></Col>
    </Row>
  </>
);
export default DestinationCards;
