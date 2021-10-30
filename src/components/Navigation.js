import { Link } from "react-router-dom";
import Radium from "radium";
import { useRecoilState } from "recoil";
import { shoppingCart } from "../recoil_state";

const link = {
  textDecoration: "none",
  ":hover": {
    cursor: "pointer",
    textDecoration: "underline"
  }
};

const src =
  "https://png.pngtree.com/png-clipart/20191120/original/pngtree-smoke-wave-neon-color-png-image_5067129.jpg";
function Navigation(props) {
  const [cart] = useRecoilState(shoppingCart);

  function prodAmount() {
    let total = 0;
    cart.forEach((element) => {
      if (element.amount) {
        total = total + element.amount;
      } else {
        total = total + 1;
      }
    });
    console.log(total);
    if (total) {
      return <h2> ({total})</h2>;
    } else {
      return;
    }
  }
  return (
    <div className="header">
      <Link to="/" style={link}>
        <h1 className="nav-link" style={{ color: props.styles }}>
          Core Components
        </h1>
      </Link>
      <Link to="/catalog/" style={link}>
        <h1 className="nav-link" style={{ color: props.styles }}>
          Shop
        </h1>
      </Link>
      <Link to="/cart" style={link}>
        <div className="flex">
          <h1 className="nav-link" style={{ color: props.styles }}>
            Shopping cart
          </h1>
          {prodAmount()}
        </div>
      </Link>
    </div>
  );
}
export default Radium(Navigation);
