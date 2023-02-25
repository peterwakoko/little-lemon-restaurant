import restaurantfood from "../assets/images/restaurantfood.jpg";
function Homepage() {
  return (
    <>
      <div className="main-flex">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned</p>
        <p>Mediterranean restaurant</p>
        <p>foused on traditional</p>
        <p>recipes served with a modern</p>
        <p>twist.</p>
        <button>Reserve a Table</button>
        <img src={restaurantfood} alt="restaurant food" width={200} />
      </div>
      <div className="submain-flex">
        <h1>This weeks specials!</h1>
        <button>Online Menu</button>
      </div>
      <div className="delivery-flex">
        <div>Greed salad</div>
        <div>Bruchetta</div>
        <div>Lemon Dessert</div>
      </div>
    </>
  );
}

export default Homepage;
