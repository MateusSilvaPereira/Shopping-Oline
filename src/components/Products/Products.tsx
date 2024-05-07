/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import fectProducts from "../../api/fetchProducts";
import ShoppingContext from "../../context/ShoppingContext";
import Loadding from "../Loadding/Loadding";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";

function Products() {
  const { products, setProducts, loading, setLoading } =
    useContext(ShoppingContext);

  function getRandomNameSearch(): string {
    const allNames = [
      "Celulares e Telefones",
      "Eletrodomésticos",
      "Esportes e Fitness",
      "Games",
      "Saúde",
    ];
    let availableNames = [...allNames];
    const randomIndex = Math.floor(Math.random() * availableNames.length);
    const selectedName = availableNames[randomIndex];
    availableNames.splice(randomIndex, 1);
    return selectedName;
  }
  const randomNameSearch = getRandomNameSearch();

  useEffect(() => {
    fectProducts(randomNameSearch).then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loadding />) || (
      <section className="products container">
        {products.map((product: any) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
    )
  );
}

export default Products;
