import { BsFillCartPlusFill } from "react-icons/bs";
import "./ProductCard.css";
import formatCurrency from "../../utils/formatCurrency";
import { useContext } from "react";
import ShoppingContext from "../../context/ShoppingContext";

interface Product {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
}

interface ProductCardProps {
  data: Product;
}

function ProductCard({ data }: ProductCardProps) {
  const { title, thumbnail, price } = data;

  const { cartItem, setCartItem } = useContext(ShoppingContext);

  const handleAddCart = () => {
    setCartItem([...cartItem, data]);
  };
  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="imagem product"
        className="card__image"
      />
      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, "BRL")}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button
        type="button"
        className="button__add-cart"
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;
