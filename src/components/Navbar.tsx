import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Recoil Shop</h1>
      <Link to="/addProducts">
        {" "}
        <button>Add Product</button>
      </Link>
    </div>
  );
};

export default Navbar;
