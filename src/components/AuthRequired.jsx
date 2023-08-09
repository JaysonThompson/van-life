import { Navigate, Outlet } from "react-router-dom";

export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem("loggedIn");
  if (!isLoggedIn) {
    return (
      <Navigate to="/Login" state={{ message: "You must log in first." }} />
    );
  }
  return <Outlet />;
}
