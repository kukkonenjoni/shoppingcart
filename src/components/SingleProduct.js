import { useParams } from "react-router-dom";
import Navigation from "./Navigation";
import { useRecoilState } from "recoil";
import { textState, shoppingCart } from "../recoil_state";
import images from "../helper/image";

const img_style = {
  width: "300px",
  height: "300px"
};
const h1style = {
  fontSize: "30px"
};

function SingleProduct(props) {
  let { id } = useParams();
  const [text] = useRecoilState(textState);
  const [cart, setCart] = useRecoilState(shoppingCart);

  const fillcart = (item) => {
    let exists = true;
    cart.every((product, index) => {
      if (product.id === item.id) {
        exists = true;
        let test2 = product.amount ? product.amount : 0;
        let cartcopy = cart.slice();
        let newcart = cart[index];
        let test = { ...newcart, amount: test2 ? test2 + 1 : 2 };
        cartcopy[index] = test;
        setCart(cartcopy);
        exists = false;
        return false;
      } else {
        return true;
      }
    });
    if (exists) {
      setCart((oldcart) => [...oldcart, item]);
    }
  };

  return (
    <div className="background-image">
      <Navigation style={"black"} />
      <div>
        {text.map((item) => {
          if (item.id == id) {
            let item_arr = item.name.split(" ");
            return (
              <div key={item.id}>
                <div className="flex_prod">
                  <div>
                    {item_arr.map((substring, index) => {
                      return (
                        <div key={index}>
                          <h1 style={h1style} key={index}>
                            {substring}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>{item.price}€</h1>
                  </div>
                  <img
                    style={img_style}
                    src={images[item.id].default}
                    alt={item.name}
                  />
                  <div>
                    <button onClick={() => fillcart(item)}>Add To Cart</button>
                  </div>
                </div>
                <div className="prod_information">
                  <h1>Information</h1>
                  <h2>Product name: </h2>
                  <h2>{item.name}</h2>
                  <h2>Product type: </h2>
                  <h2>{item.type}</h2>
                  <h2>Description: </h2>
                  <h2>{item.description}</h2>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
export default SingleProduct;
