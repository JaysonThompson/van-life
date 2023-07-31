import Header from "./Header";

import { Outlet } from "react-router-dom";

export default function Layouts() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
