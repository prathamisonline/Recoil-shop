import { productState, filteredProducts } from "../../Recoil/productRecoil";
import { useRecoilValue } from "recoil";
import ProductItem from "./ProductItem";
import View from "../View";

type proptype = {
  picture: string;
  price: number;
  name: string;
};
const Products = (props: proptype) => {
  // const products = useRecoilValue(productState);
  // now we are using filtered array of products to show on the screen.
  const products = useRecoilValue(filteredProducts);
  return (
    <View>
      {products.map((product) => (
        <ProductItem
          picture={product.picture}
          name={product.name}
          price={product.price}
          id={product.id}
          key={product.id}
        />
      ))}
    </View>
  );
};

export default Products;
