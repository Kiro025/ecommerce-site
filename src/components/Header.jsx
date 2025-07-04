import { Link } from 'react-router-dom';
import '../App.css';

import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = () => {
  return (
    <header className="navbar">
      <h1>SwiftFit</h1>
      <nav>
        <Link to="/">
         <IoHomeOutline size={28}/>
         

        </Link>
        <Link to="/cart">
          <MdOutlineShoppingBag size={28} />

        </Link>
      </nav>
    </header>
  );
};

export default Header;