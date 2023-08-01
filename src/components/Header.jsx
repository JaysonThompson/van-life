import { Link, NavLink } from "react-router-dom";

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
      </nav>
    </header>
  );
}
