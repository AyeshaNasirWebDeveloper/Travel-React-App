import { Input, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

const Subscribe = () => {
  return (
    <>
      <div
        style={{
          color: "#5E6282",
          margin: "5rem",
          textAlign: "center",
        }}
      >
        <h1>
          Subscribe to get information, latest news and other
          <br />
          interesting offers about Jadoo
        </h1>

        {/* Email Input and Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <Input
            placeholder="Your Email"
            prefix={<MailOutlined />}
            style={{
              width: "300px",
              padding: "0.75rem",
            }}
          />
          <Button
            type="primary"
            style={{
              padding: "1.5rem 3rem", 
              height: "40px", 
              backgroundColor: "#FF7A50", 
              border: "none", 
            }}
          >
            Subscribe
          </Button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;