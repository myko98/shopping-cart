import "./Shopping.css";
// import menData from "../assets/men/menData";
import SpecificItem from "../components/SpecificItem";
import { useLocation} from "react-router-dom";

const ItemDetail = ({men, setMen}) => {

  const location = useLocation()
  const {name} = location.state
  console.log(name)

  let specificItem = men.filter((item) => item.name === name)
  return (
    <>
      <h1>{name}</h1>
      <div className="shop">
        {specificItem.map((item) => (
          <SpecificItem key={item.id} img={item.img} name={item.name} price={item.price} men={men} setMen={setMen}/>
        ))}
      </div>
    </>
  );
}

export default ItemDetail;
