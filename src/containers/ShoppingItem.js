import "./Shopping.css";
import menData from "../assets/men/menData";
import Item from "../components/Item";

function ShoppingItem({men,women}) {
  
  if (women === undefined) {
    return (
      <>
        <h1>Hi from Mens Shopping</h1>
        <div className="shop">
          {men.map((item) => (
            <Item key={item.id} img={item.img} name={item.name} price={item.price} men={men}/>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Hi from Womens Shopping</h1>
        <div className="shop">
          {women.map((item) => (
            <Item key={item.id} img={item.img} name={item.name} price={item.price} women={women}/>
          ))}
        </div>
      </>
    );
  }
  
}

export default ShoppingItem;
