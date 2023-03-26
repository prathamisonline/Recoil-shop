import "../styles/Sidebar.scss";
import {
  filteredItemCountState,
  productFilteredState,
  viewState,
} from "../Recoil/productRecoil";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchtextState } from "../Recoil/productRecoil";

const Sidebar = () => {
  const [view, setView] = useRecoilState(viewState);
  const [filter, setFilter] = useRecoilState(productFilteredState);
  const [searchText, setSearchtext] = useRecoilState(searchtextState);
  const filterCount = useRecoilValue(filteredItemCountState);

  return (
    <div className="sidebar">
      <p>({filterCount}) products</p>
      <div className="sidebar_btns">
        <button
          className={`sidebar_btn ${view == "row" ? "is-dark" : null}`}
          onClick={() => setView("row")}
        >
          Row
        </button>
        <button
          className={`sidebar_btn ${view == "column" ? "is-dark" : null}`}
          onClick={() => setView("column")}
        >
          Column
        </button>
      </div>

      <p>Search Products</p>
      <input
        type="text"
        placeholder="Search your products"
        className="sidebar_search"
        value={searchText}
        onChange={(e) => setSearchtext(e.target.value)}
      />
      <p>Filter</p>
      <select
        className="sidebar_select"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="" className="sidebar_select_option">
          show all
        </option>
        <option value="fruit" className="sidebar_select_option">
          fruit
        </option>
        <option value="vegetables" className="sidebar_select_option">
          vegetables
        </option>
        <option value="meals" className="sidebar_select_option">
          meals
        </option>
        <option value="beverages" className="sidebar_select_option">
          beverages
        </option>
        <option value="utensils" className="sidebar_select_option">
          utensils
        </option>
      </select>
    </div>
  );
};

export default Sidebar;
