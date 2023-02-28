import bruchetta from "../assets/images/bruchetta.jpg";
export default function Bruchetta() {
  return (
    <>
      <img
        src={bruchetta}
        alt="restaurant food"
        width={290}
        height={310}
        className="img-top-round"
      />
      <div className="specials-container">
        <span>Bruchetta </span>
        <span className="price">$5.99</span>
        <p>Our Bruschetta is made from</p>
        <p>grilled breed that has been</p>
        <p>smeared with garlic and</p>
        <p>seasoned with salt and olive</p>
        <p>oil</p>
        <span>Order a delivery</span>
      </div>
    </>
  );
}
