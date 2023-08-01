import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <Link to="host/dashboard">Hosts</Link>
        <Link to="about">About</Link>
        <Link to="vans">Vans</Link>
      </nav>
    </header>
  );
}
