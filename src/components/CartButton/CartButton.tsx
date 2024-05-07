import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartButton.css";
import { useContext } from "react";
import ShoppingContext from "../../context/ShoppingContext";
function CartButton() {
  const { cartItem, isCartVisibile, setIsCartVisibile } =
    useContext(ShoppingContext);

  return (
    <button
      type="button"
      className="cart___button"
      onClick={() => setIsCartVisibile(!isCartVisibile)}
    >
      <AiOutlineShoppingCart />
      {cartItem.length > 0 && (
        <span className="cart-status">{cartItem.length}</span>
      )}
    </button>
  );
}

export default CartButton;
