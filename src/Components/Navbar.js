import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav id="nav-bar">
      <ul className="list-items">
        <li className="list-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="list-item">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="list-item">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="list-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
