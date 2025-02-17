import Axon from "../assets/Axon.png";
import jetStar from "../assets/Jetstar.png";
import Expedia from "../assets/Expedia.png";
import Qantas from "../assets/Qantas.png";
import Alitalia from "../assets/Alitalia.png";

const Brands = () => {
  return (
    <div 
    style={
        {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "5rem"
        }
    }>
        <img src= {Axon} alt="Logo" />
        <img src= {jetStar} alt="Logo" />
        <img src= {Expedia} alt="Logo" />
        <img src= {Qantas} alt="Logo" />
        <img src= {Alitalia} alt="Logo" />
        </div>
  )
}

export default Brands