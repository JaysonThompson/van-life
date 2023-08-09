import { useState, useEffect } from "react";
import { useParams, Outlet, Link } from "react-router-dom";

import HostDetailsLayout from "./HostDetailsLayout";
import { getVan } from "../../../api";

export default function HostVanDetails() {
  const [van, setVan] = useState([]);
  const { id } = useParams();
  const { imageUrl, name, type, price } = van;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVan() {
      setLoading(true);
      const data = await getVan(id);
      try {
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVan();
  }, [id]);

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; Back to all vans
      </Link>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
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
      )}
    </section>
  );
}
