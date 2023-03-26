import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Products from "../products/Products";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="main">
          <Sidebar />
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;
