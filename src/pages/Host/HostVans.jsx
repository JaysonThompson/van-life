import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    async function fetchHostVanData() {
      try {
        const response = await fetch("/api/host/vans");
        if (!response.ok) {
          throw new Error(response.status);
        } else {
          const data = await response.json();
          setVans(data.vans);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchHostVanData();
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
        {vans.length > 0 ? (
          <section>{hostVanElements}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}
