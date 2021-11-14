import "./Home.css";
import parka from "../assets/men/parka.webp";
import coat from "../assets/women/oversized_coat.webp";
import {Link} from  "react-router-dom";
function Home() {
  return (
    <>
      <div className="hero">
        <iframe
          src="https://www.youtube.com/embed/efksZdXnqOU?start=0&autoplay=1&mute=1&controls=0&showinfo=0"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="menu">
        <div className="men">
          <img className="image" src={parka} alt="" />
          <div className="overlay">
            <Link to="/men" className="btn btn-primary">
              Shop Men's Clothing
            </Link>
          </div>
        </div>
        <div className="women">
          <img className="image" src={coat} alt="" />
          <div className="overlay">
            <Link to="/women" className="btn btn-primary">
              Shop Women's Clothing
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
