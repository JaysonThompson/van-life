import Footer from "./Footer";
import Header from "./Header";

import { Outlet } from "react-router-dom";

export default function Layouts() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
