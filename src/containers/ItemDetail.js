import "./Shopping.css";
import menData from "../assets/men/menData";
import Item from "../components/Item";
import { useParams} from "react-router-dom";

const ItemDetail = ({match}) => {
  console.log(match)
  const {id} = useParams();
  console.log(id)
  return (
    <>
      <h1>Hi from Item Detail</h1>
      {/* <div className="shop">
        {menData.map((item) => (
          <Item img={item.img} name={item.name} price={item.price} />
        ))}
      </div> */}
    </>
  );
}

export default ItemDetail;
