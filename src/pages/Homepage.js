import OnlineMenuButton from "../components/OnlineMenuButton";
import RestaurantChefImage from "../components/RestaurantChefImage";
import HeroLeft from "../components/HeroLeft";
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
        <div>Greed salad</div>
        <div>Bruchetta</div>
        <div>Lemon Dessert</div>
      </div>
    </>
  );
}

export default Homepage;
