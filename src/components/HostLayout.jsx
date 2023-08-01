import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  const active = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <div>
      <nav className="host-nav">
        <NavLink
          to="/host"
          end
          style={({ isActive }) => (isActive ? active : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? active : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? active : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
