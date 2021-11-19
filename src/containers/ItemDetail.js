import "./Shopping.css";
// import menData from "../assets/men/menData";
import SpecificItem from "../components/SpecificItem";
import { useLocation} from "react-router-dom";

const ItemDetail = ({men, setMen, women, setWomen}) => {

  const location = useLocation()
  const {name} = location.state

  if (women === undefined) {
    let specificItem = men.filter((item) => item.name === name)

    return (
      <>
        <h1>{name}</h1>
        <div className="shop">
          {specificItem.map((item) => (
            <SpecificItem key={item.id} menId={item.id} img={item.img} name={item.name} price={item.price} men={men} setMen={setMen}/>
          ))}
        </div>
      </>
    );
  } else {
    let specificItem = women.filter((item) => item.name === name)

    return (
      <>
        <h1>{name}</h1>
        <div className="shop">
          {specificItem.map((item) => (
            <SpecificItem key={item.id} womenId={item.id} img={item.img} name={item.name} price={item.price} women={women} setWomen={setWomen}/>
          ))}
        </div>
      </>
    );
  }
  
}

export default ItemDetail;
