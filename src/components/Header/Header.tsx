import { FaCircle } from "react-icons/fa";
import LogoIcon from "../../img/logo.png";
import CartButton from "../CartButton/CartButton";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <SearchBar />
        <h1 className="logoTitle">
          <img src={LogoIcon} alt="imagem logo" className="logo" />
          Shopping Online
          {<FaCircle className="btnOnline" size={15} color="#23fc07" />}
        </h1>
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
