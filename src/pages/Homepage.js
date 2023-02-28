import OnlineMenuButton from "../components/OnlineMenuButton";
import RestaurantChefImage from "../components/RestaurantChefImage";
import HeroLeft from "../components/HeroLeft";
import restaurantfood from "../assets/images/restaurantfood.jpg";
function Homepage() {
  return (
    <>
      <div className="main-flex">
        <HeroLeft />
        <RestaurantChefImage />
      </div>
      <div className="submain-flex">
        <h1>This weeks specials!</h1>
        <OnlineMenuButton />
      </div>
      <div className="delivery-flex">
        <div>
          <img
            src={restaurantfood}
            alt="restaurant food"
            width={290}
            height={310}
            className="restaurant-chef-img"
          />
          Greed salad $12.99
          <p>The famous greek salad of</p>
          <p>crispy lettuce, peppers, olives</p>
          <p>and our Chicago style fets</p>
          <p>cheese, garnished with</p>
          <p>crunchy garlic and rosemary</p>
          <p>crautons</p>
          <span>Order a delivery</span>
        </div>
        <div>
          Bruchetta $5.99
          <p>Our Bruschetta is made from</p>
          <p>grilled breed that has been</p>
          <p>smeared with garlic and</p>
          <p>seasoned with salt and olive</p>
          <p>oil</p>
          <span>Order a delivery</span>
        </div>
        <div>
          Lemon Dessert $5.00
          <p>This comes straight from</p>
          <p>grandma's recipe book,every</p>
          <p>every last ingredient has been</p>
          <p>sourced and is as authentic</p>
          <p>as can be imagined.</p>
          <span>Order a delivery</span>
        </div>
      </div>
    </>
  );
}

export default Homepage;
