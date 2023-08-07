import { Link, NavLink } from "react-router-dom";

import imgUrl from "../../assets/images/avatar-icon.png";

export default function Nav() {
  const active = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink to="host" style={({ isActive }) => (isActive ? active : null)}>
          Hosts
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => (isActive ? active : null)}
        >
          About
        </NavLink>
        <NavLink to="vans" style={({ isActive }) => (isActive ? active : null)}>
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={imgUrl} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
}
