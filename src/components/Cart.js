import Navigation from "./Navigation";
import { useRecoilState } from "recoil";
import { shoppingCart } from "../recoil_state";
import images from "../helper/image";
import { Link } from "react-router-dom";

export default function Cart(props) {
  const [Cart, setCart] = useRecoilState(shoppingCart);

  function Total() {
    let total = Cart.map((item) => {
      if (item.amount) {
        return parseInt(item.price * item.amount, 10);
      } else {
        return parseInt(item.price, 10);
      }
    });
    if (total.length) {
      total = total.reduce((prev, next) => prev + next);
      return <h1>Total: {total}€</h1>;
    } else {
      return (
        <div>
          <h1 style={{ textAlign: "center" }}>
            You dont have any items in your cart
          </h1>
          <Link to="/catalog/">
            <h2 style={{ textAlign: "center" }}>Start Shopping!</h2>
          </Link>
        </div>
      );
    }
  }
  const removeFromCart = (items, index) => {
    if (items.amount <= 1) {
      setCart(Cart.filter((item, i) => i !== index));
    } else if (items.amount > 1) {
      let newitem = { ...items, amount: items.amount - 1 };
      let newArr = Cart.slice();
      newArr[index] = newitem;
      setCart(newArr);
    }
  };
  const addToCart = (items, index) => {
    let newitem = { ...items, amount: items.amount ? items.amount + 1 : 2 };
    let newArr = Cart.slice();
    newArr[index] = newitem;
    setCart(newArr);
  };
  return (
    <div className="background-image">
      <Navigation styles={"black"} />
      {Cart.map((item, index) => {
        return (
          <div key={index} style={{ display: "flex" }}>
            <div>
              <img src={images[item.id].default} alt={item.name} />
            </div>
            <div>
              <h1>{item.name}</h1>
              <h2>{item.amount ? item.price * item.amount : item.price}€</h2>
              <h2>Amount: {item.amount}</h2>
              <button onClick={() => removeFromCart(item, index)}>
                Remove one
              </button>
              <button onClick={() => addToCart(item, index)}>Add one</button>
            </div>
          </div>
        );
      })}
      {Total()}
    </div>
  );
}
