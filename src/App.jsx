import Header from "./components/Header";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Category from "./components/Category";
import Destinations from "./components/Destinations";
import DestinationCards from "./components/Destination-Cards";
import Testimonials from "./components/Testimonials";
import Brands from "./components/Brands";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

const App = () => {
  return (
    <>
    <Header/>
    <Hero />
    <Category />
    <Cards />
    <Destinations />
    <DestinationCards />
    <Testimonials />
    <Brands />
    <Subscribe />
    <Footer />
    <Copyright />
    </>
  )
}

export default App