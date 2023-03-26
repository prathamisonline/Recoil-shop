import Card from "react-bootstrap/Card";
import "../../styles/Products.scss";
import { useRecoilState } from "recoil";
import { productState } from "../../Recoil/productRecoil";
import { Link } from "react-router-dom";
type proptype = {
  picture: string;
  price: number;
  name: string;
  keyidss: string;
};

const ProductItem = ({ name, picture, price, id }: proptype) => {
  const [products, setProducts] = useRecoilState(productState);
  function deleteProduct(id) {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  }
  return (
    <Card className="product_card" style={{ width: "18rem" }}>
      <h1>{picture}</h1>
      <p>{name}</p>
      <div className="product_btns">
        <Link to={`/editProduct/${id}`}>
          {" "}
          <button className="product_btn_edit">Edit</button>
        </Link>

        <p className="product_btn price">₹{price}/kg</p>
        <button
          onClick={() => deleteProduct(id)}
          className="product_btn_delete"
        >
          Delete
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
