import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

import { getVans } from "../../api";

export default function VanDetails() {
  const [van, setVan] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function loadVan() {
      setLoading(true);
      const data = await getVans();
      for (let i = 0; i < data.length; i++) {
        if (id === data[i].id) {
          setVan(data[i]);
          setLoading(false);
        }
      }
    }
    loadVan();
  }, [id]);

  const search = location.state?.search || "";

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path">
        &larr; Back to
        {location.state.search === `?type=${van.type}`
          ? ` ${van.type} `
          : " all "}
        vans
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
