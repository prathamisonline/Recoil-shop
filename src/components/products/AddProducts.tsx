import "../../styles/AddProduct.scss";
import { useState } from "react";
import { productState } from "../../Recoil/productRecoil";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import shortid from "shortid";

type productType = {
  name: string;
  picture: string;
  price: string;
  natypeme: string;
};
const AddProducts = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const setProducts = useSetRecoilState(productState);

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
    const newProduct = { name, price, picture, type, id: shortid.generate() };
    setProducts((oldProducts) => [newProduct, ...oldProducts]);
    navigate("/");
  }
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

export default AddProducts;
