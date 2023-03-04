import { useState } from "react";
export default function BookingForm() {
  const [date, setDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const [numberOfGuests, setNumberOfGuests] = useState("1");
  const [occasion, setOcassion] = useState("Birthday");
  function handleChange(e) {
    setDate(e.target.value);
    setAvailableTimes(e.target.value);
    setNumberOfGuests(e.target.value);
    setOcassion(e.target.value);
  }
  return (
    <>
      <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={handleChange} />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time "
          value={availableTimes[0]}
          onChange={handleChange}
        >
          <option>{availableTimes[0]}</option>
          <option>{availableTimes[1]}</option>
          <option>{availableTimes[2]}</option>
          <option>{availableTimes[3]}</option>
          <option>{availableTimes[4]}</option>
          <option>{availableTimes[5]}</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={numberOfGuests}
          onChange={handleChange}
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={handleChange}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
}
