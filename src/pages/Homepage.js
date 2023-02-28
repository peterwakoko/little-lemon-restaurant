import OnlineMenuButton from "../components/OnlineMenuButton";
import RestaurantChefImage from "../components/RestaurantChefImage";
import HeroLeft from "../components/HeroLeft";
import GreekSalad from "../components/GreekSalad";
import Bruchetta from "../components/Bruchetta";
import LemonDessert from "../components/LemonDessert";
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
        <GreekSalad />
        <Bruchetta />
        <LemonDessert />
      </div>
    </>
  );
}

export default Homepage;
