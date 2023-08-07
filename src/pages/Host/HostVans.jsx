import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getHostVans } from "../../api/getHostVans";

export default function HostVans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      const data = await getHostVans();
      setVans(data.vans);
      setLoading(false);
    }
    loadVans();
  }, []);

  const hostVanElements = vans.map(({ id, title, imageUrl, price }) => (
    <Link key={id} to={id} className="host-van-link-wrapper">
      <div className="host-van-single">
        <img src={imageUrl} alt={title} />
        <div className="host-van-info">
          <h3>{title}</h3>
          <p>${price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {loading ? <h2>Loading...</h2> : <section>{hostVanElements}</section>}
      </div>
    </section>
  );
}
