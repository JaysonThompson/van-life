import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { getVans } from "../../../api";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      const data = await getVans();
      setVans(data);
      setLoading(false);
    }
    loadVans();
  }, []);

  const vanElements = displayedVans.map(
    ({ name, imageUrl, type, price, id }) => (
      <div key={id} className="van-tile">
        <Link to={id} state={{ search: `?${searchParams.toString()}` }}>
          <img src={imageUrl} alt={name} />
          <div className="van-info">
            <h3>{name}</h3>
            <p>${price}/day</p>
          </div>
          <i className={`van-type ${type} selected`}>{type}</i>
        </Link>
      </div>
    )
  );
  if (loading) {
    return <h1>Loading... </h1>;
  }
  return (
    <div className="van-list-container">
      <div className="van-list-filter-button">
        <button
          className="van-type simple"
          onClick={() => setSearchParams({ type: "simple" })}
        >
          Simple
        </button>
        <button
          className="van-type luxury"
          onClick={() => setSearchParams({ type: "luxury" })}
        >
          Luxury
        </button>
        <button
          className="van-type rugged"
          onClick={() => setSearchParams({ type: "rugged" })}
        >
          Rugged
        </button>
        {typeFilter ? (
          <button
            className="van-type clear-filters"
            onClick={() => setSearchParams("")}
          >
            Clear Filters
          </button>
        ) : null}
      </div>
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
