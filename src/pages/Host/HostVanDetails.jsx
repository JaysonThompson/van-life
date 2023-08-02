import { useState, useEffect } from "react";
import { useParams, Outlet, Link } from "react-router-dom";

import HostDetailsLayout from "./HostDetailsLayout";

export default function HostVanDetails() {
  const [van, setVan] = useState([]);
  const { id } = useParams();
  const { imageUrl, name, type, price } = van;

  useEffect(() => {
    async function fetchSingelVanData() {
      try {
        const response = await fetch(`/api/host/vans/${id}`);
        if (!response.ok) {
          throw new Error(response.status);
        } else {
          const data = await response.json();
          setVan(data.vans);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchSingelVanData();
  }, [id]);

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; Back to all vans
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${type}`}>{type}</i>
            <h3>{name}</h3>
            <h4>${price}/day</h4>
          </div>
        </div>
        <HostDetailsLayout />
        <Outlet context={[van]} />
      </div>
    </section>
  );
}
