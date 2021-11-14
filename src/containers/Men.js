import "./Shopping.css";
import menData from "../assets/men/menData";
import Item from "../components/Item";
function Men({men}) {
  console.log(men);
  return (
    <>
      <h1>Hi from Mens Shopping</h1>
      <div className="shop">
        {menData.map((item) => (
          <Item key={item.id} img={item.img} name={item.name} price={item.price} />
        ))}
      </div>
    </>
  );
}

export default Men;
