import "../../styles/AddProduct.scss";
import { useState, useEffect } from "react";
import { productState } from "../../Recoil/productRecoil";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import shortid from "shortid";
import { useParams } from "react-router-dom";

type productType = {
  name: string;
  picture: string;
  price: string;
  natypeme: string;
};
const EditProducts = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [products, setProducts] = useRecoilState(productState);
  const { id } = useParams();

  function nameChangeHandler(e: any) {
    setName(e.target.value);
  }
  function pictureChangeHandler(e: any) {
    setPicture(e.target.value);
  }
  function priceChangeHandler(e: any) {
    setPrice(e.target.value);
  }
  function typeChangeHandler(e: any) {
    setType(e.target.value);
  }

  function submitHandler(e: any) {
    e.preventDefault();
    const newProduct = { name, price, picture, type, id };
    const updatedProducts = products.map((item) =>
      item.id == id ? newProduct : item
    );
    setProducts(updatedProducts);
    navigate("/");
  }

  useEffect(() => {
    const product = products.find((product) => product.id == id);
    setName(product?.name);
    setPrice(product?.price);
    setPicture(product?.picture);
    setType(product?.type);
  }, []);
  return (
    <div className="AddProduct">
      <div className="AddProduct_title">
        <h2>Add A Product</h2>
      </div>
      <form onSubmit={submitHandler}>
        <div className="AddProduct_inputs">
          <input
            type="text"
            value={name}
            onChange={nameChangeHandler}
            placeholder="Enter Product Name"
          />
          <input
            type="text"
            value={picture}
            onChange={pictureChangeHandler}
            placeholder="Enter Product Price"
          />
          <input
            type="text"
            value={price}
            onChange={priceChangeHandler}
            placeholder="Product Picture"
          />
          <select
            className="AddProduct_select"
            value={type}
            onChange={typeChangeHandler}
          >
            <option className="sidebar_select_option">
              Select Product Type
            </option>
            <option className="sidebar_select_option">fruit</option>
            <option className="sidebar_select_option">vegetables</option>
            <option className="sidebar_select_option">meals</option>
            <option className="sidebar_select_option">beverages</option>
            <option className="sidebar_select_option">utensils</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditProducts;
