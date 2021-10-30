import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import Radium from "radium";

const backgroundImage =
  "url(https://www.io-tech.fi/wp-content/uploads/2020/09/rtx3090-24092020.jpg)";
const h1style = {
  fontSize: "50px",
  marginLeft: "60px"
};
const h2style = {
  fontSize: "35px",
  marginLeft: "60px"
};
const button = {
  marginTop: "10px",
  fontSize: "15px",
  width: "170px",
  height: "55px",
  borderRadius: "5px",
  border: "none",
  ":hover": {
    border: "solid black thin",
    cursor: "pointer"
  }
};
const link = {
  width: "170px",
  marginLeft: "60px"
};
function Main() {
  return (
    <div
      className="background-image"
      style={{ backgroundImage: backgroundImage }}
    >
      <Navigation styles={"white"} />
      <div className="main-text">
        <h1 className="title" style={h1style}>
          Nvidia GeForce RTX 3090
        </h1>
        <h2 className="subtitle" styles={h2style}>
          Now available for preorder, shipping December, 2020.
        </h2>
        <Link to="/catalog/" styles={link}>
          <button className="main-button" style={button}>
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Radium(Main);
