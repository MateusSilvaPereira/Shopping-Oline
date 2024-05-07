import { BsCartXFill } from "react-icons/bs";
import "./CartItem.css";
import formatCurrency from "../../utils/formatCurrency";
import { useContext } from "react";
import ShoppingContext from "../../context/ShoppingContext";

interface ProductCartProps {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
}

interface DataProduct {
  data: ProductCartProps;
}
function CartItem({ data }: DataProduct) {
  const { id, thumbnail, title, price } = data;

  const { cartItem, setCartItem } = useContext(ShoppingContext);

  const handleRemoveItem = () => {
    const updateItem = cartItem.filter(
      (item: ProductCartProps) => item.id !== id
    );
    setCartItem(updateItem);
  };

  return (
    <section className="cart-item">
      <img
        src={thumbnail}
        alt="imagem do carrinho"
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>

        <button className="button__revove-item" onClick={handleRemoveItem}>
          <BsCartXFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;
