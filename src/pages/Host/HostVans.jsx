import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getHostVans } from "../../api/getHostVans.js";

export default function HostVans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      const data = await getHostVans()
        .then((data) => {
          setVans(data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
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

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return `<h1>There was an error: ${error.message}</h1>`;
  }

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        <section>{hostVanElements}</section>
      </div>
    </section>
  );
}
