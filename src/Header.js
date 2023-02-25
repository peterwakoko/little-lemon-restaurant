import logo from "./assets/images/Logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Menupage from "./pages/Menupage";
import Reservationspage from "./pages/Reservationspage";
import OrderOnlinepage from "./pages/OrderOnlinepage";
import Loginpage from "./pages/Loginpage";
function Header() {
  return (
    <>
      <div className="header-flex">
        <img src={logo} alt="little lemon logo" />
        <nav>
          <ul>
            <li>
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-item">
                About
              </Link>
            </li>
            <li>
              <Link to="/menu" className="nav-item">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/reservations" className="nav-item">
                Reservations
              </Link>
            </li>
            <li>
              <Link to="/orderonline" className="nav-item">
                Order Online
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav-item">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<Aboutpage />}></Route>
        <Route path="/menu" element={<Menupage />}></Route>
        <Route path="/reservations" element={<Reservationspage />}></Route>
        <Route path="/orderonline" element={<OrderOnlinepage />}></Route>
        <Route path="/login" element={<Loginpage />}></Route>
      </Routes>
    </>
  );
}

export default Header;
