import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="main">
      <h1>Hosts Dashboard here 📈</h1>
      <Outlet />
    </div>
  );
}
