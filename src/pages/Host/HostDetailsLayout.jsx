import { NavLink } from "react-router-dom";

export default function HostDetailsLayout() {
  //const { id } = useParams();
  const active = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <nav>
      <NavLink to="." end style={({ isActive }) => (isActive ? active : null)}>
        Details
      </NavLink>
      <NavLink
        to="pricing"
        style={({ isActive }) => (isActive ? active : null)}
      >
        Pricing
      </NavLink>
      <NavLink to="photos" style={({ isActive }) => (isActive ? active : null)}>
        Photos
      </NavLink>
    </nav>
  );
}
