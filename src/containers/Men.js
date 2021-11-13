import "./Shopping.css";
import menData from "../assets/men/menData";
import Item from "../components/Item";
function Men() {
  return (
    <>
      <h1>Hi from Mens Shopping</h1>
      <div className="shop">
        {menData.map((item) => (
          <Item img={item.img} name={item.name} price={item.price} />
        ))}
      </div>
    </>
  );
}

export default Men;
