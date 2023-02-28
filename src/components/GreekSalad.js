import greeksalad from "../assets/images/greeksalad.jpg";
export default function GreekSalad() {
  return (
    <>
      <section className="card">
        <div>
          <img
            src={greeksalad}
            alt="restaurant food"
            width={290}
            height={310}
            className="img-top-round"
          />
        </div>

        <div className="card-text">
          <span>Greed salad </span>
          <span className="price">$12.99</span>

          <p>The famous greek salad of</p>
          <p>crispy lettuce, peppers, olives</p>
          <p>and our Chicago style fets</p>
          <p>cheese, garnished with</p>
          <p>crunchy garlic and rosemary</p>
          <p>crautons</p>
          <span className="order">Order a delivery</span>
        </div>
      </section>
    </>
  );
}
