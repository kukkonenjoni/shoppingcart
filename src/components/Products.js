/* eslint-disable array-callback-return */
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { textState } from "../recoil_state";
import { useRouteMatch } from "react-router-dom";
import images from "../helper/image";
import Radium from "radium";
import image from "../helper/image";

const product_div = {
  margin: "20px",
  width: "180px",
  textAlign: "center"
};

const link = {
  textDecoration: "none",
  color: "black",
  width: "180px",
  margin: "20px",
  ":hover": {
    cursor: "pointer",
    textDecoration: "underline"
  }
};

function Products(props) {
  let { url } = useRouteMatch();
  const [product] = useRecoilState(textState);
  const items = product.map((item) => {
    if (props.products === "All Products") {
      return (
        <Link to={`${url}${item.id}`} style={link} key={item.id}>
          <div style={product_div}>
            <img src={image[item.id].default} alt={item.name} />
            <h1>{item.name}</h1>
            <h2>{item.price}€</h2>
          </div>
        </Link>
      );
    } else if (item.type === props.products) {
      return (
        <Link to={`${url}${item.id}`} style={link} key={item.id}>
          <div style={product_div}>
            <img src={images[item.id].default} alt={item.name} />
            <h1>{item.name}</h1>
            <h2>{item.price}€</h2>
          </div>
        </Link>
      );
    }
  });
  return <div className="prod_display">{items}</div>;
}
export default Radium(Products);
