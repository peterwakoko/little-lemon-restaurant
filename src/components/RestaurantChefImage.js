import restaurantfood from "../assets/images/restaurantfood.jpg";
export default function RestaurantChefImage() {
  return (
    <>
      <img
        src={restaurantfood}
        alt="restaurant food"
        width={290}
        height={310}
        className="restaurant-chef-img"
      />
    </>
  );
}
