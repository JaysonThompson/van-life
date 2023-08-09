import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem("loggedIn");
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/Login"
        state={{ message: "You must log in first.", from: location }}
        replace
      />
    );
  }
  return <Outlet />;
}
