import ".././styles/View.scss";
import { useRecoilValue } from "recoil";
import { viewState } from "../Recoil/productRecoil";

const ColoumView = (props) => {
  return <div className="columnView">{props.children}</div>;
};
const RowView = (props) => {
  return <div className="RowView">{props.children}</div>;
};
const View = (props) => {
  const view = useRecoilValue(viewState);
  if (view == "column") return <ColoumView>{props.children}</ColoumView>;
  else {
    return <RowView>{props.children}</RowView>;
  }
};

export default View;
