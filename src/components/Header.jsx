// Header
import { Layout, Menu, Button, Flex } from "antd";
const { Header } = Layout;

// Navbar 
const items = [
  {
    label: "Desitnations",
    key: "destinations",
  },
  {
    label: "Hotels",
    key: "hotels",
  },
  {
    label: "Flights",
    key: "flights",
  },
  {
    label: "Bookings",
    key: "bookings",
  },
];

const Navbar = () => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        {/* Logo */}
        <div className="demo-logo">
          <h1 className="logo text-white">Jad
            <span style={{color: "#FFA500"}}>
                oo</span>
                
                </h1>
        </div>

        {/* Links */}
        <Menu
          mode="horizontal"
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            justifyContent: "center",
          }}
        />

        {/* Buttons */}
        <Flex wrap gap="small">
          <Button type="text">
            Login
          </Button>
          <Button type="default" variant="outlined" color="orange">
            Sign up
          </Button>
          <Button type="text" dark>
            EN v
          </Button>
        </Flex>
      </Header>
    </Layout>
  );
};
export default Navbar;
