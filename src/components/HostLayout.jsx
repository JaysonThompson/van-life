import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <div>
      <nav className="host-nav">
        <Link to="dashboard">Dashboard</Link>
        <Link to="income">Income</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
}
