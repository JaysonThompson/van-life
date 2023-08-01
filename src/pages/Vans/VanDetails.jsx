import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function VanDetails() {
  const [van, setVan] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchVanData = async () => {
      try {
        const res = await fetch(`/api/vans/${params.id}`);
        if (!res.ok) {
          throw new Error(res.status);
        } else {
          const data = await res.json();
          setVan(data.vans);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchVanData();
  }, [params.id]);

  return (
    <div className="van-detail-container">
      <Link to="/vans">Back to all vans</Link>
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