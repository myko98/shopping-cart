import "./Home.css";
import parka from "../assets/men/parka.webp";
import coat from "../assets/women/oversized_coat.webp";

function Home() {
  return (
    <>
      <div className="hero">
        <iframe
          src="https://www.youtube.com/embed/efksZdXnqOU?start=0&autoplay=1&mute=1&controls=0&showinfo=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="menu">
        <div class="men">
          <img class="image" src={parka} alt="" />
          <div class="overlay">
            <button>Shop Mens</button>
          </div>
        </div>
        <div>
          <img class="image" src={coat} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
