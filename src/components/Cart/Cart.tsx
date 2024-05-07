import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
import ShoppingContext from "../../context/ShoppingContext";
import formatCurrency from "../../utils/formatCurrency";
function Cart() {
  const { cartItem } = useContext(ShoppingContext);
  const { isCartVisibile } = useContext(ShoppingContext);

  const totalPrice = cartItem.reduce((acc: any, item: { price: any }) => {
    return item.price + acc;
  }, 0);
  return (
    <section className={`cart ${isCartVisibile ? "cart--active" : ""}`}>
      <div className="cart-items">
        {cartItem.map((cartItem: any) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>
      <div className="cart-resume">
        Total: {formatCurrency(totalPrice, "BRL")}
      </div>
    </section>
  );
}

export default Cart;
