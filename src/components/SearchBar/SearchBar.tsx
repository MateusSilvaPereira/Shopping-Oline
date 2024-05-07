import { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import fectProducts from "../../api/fetchProducts";
import ShoppingContext from "../../context/ShoppingContext";
import "./SearchBar.css";

function SearchBar() {
  const { setProducts, setLoading } = useContext(ShoppingContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const products = await fectProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue("");
  };

  return (
    <form className="serach-bar" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search___input"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <button type="submit" className="search___button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
