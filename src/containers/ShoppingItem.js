import "./Shopping.css";
import menData from "../assets/men/menData";
import Item from "../components/Item";

function ShoppingItem({men,women}) {
  
  if (women === undefined) {
    return (
      <>
        <div className="shopping-page">
          <h1>Outerwear and Blazers</h1>
          <div className="shop">
          {men.map((item) => (
            <Item key={item.id} img={item.img} name={item.name} price={item.price} men={men}/>
          ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="shopping-page">
          <h1>Outerwear and Blazers</h1>
          <div className="shop">
          {women.map((item) => (
            <Item key={item.id} img={item.img} name={item.name} price={item.price} women={women}/>
          ))}
          </div>
        </div>
      </>
    );
  }
  
}

export default ShoppingItem;
