import lemondessert from "../assets/images/lemondessert.jpg";
export default function LemonDessert() {
  return (
    <>
      <img
        src={lemondessert}
        alt="restaurant food"
        width={290}
        height={310}
        className="img-top-round"
      />
      <div className="specials-container">
        <span>Lemon Dessert</span> <span className="price">$5.00</span>
        <p>This comes straight from</p>
        <p>grandma's recipe book,every</p>
        <p>every last ingredient has been</p>
        <p>sourced and is as authentic</p>
        <p>as can be imagined.</p>
        <span>Order a delivery</span>
      </div>
    </>
  );
}
