import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/vans");
        if (!response.ok) {
          throw new Error(response.status);
        } else {
          const data = await response.json();
          setVans(data.vans);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const vanElements = displayedVans.map(
    ({ name, imageUrl, type, price, id }) => (
      <div key={id} className="van-tile">
        <Link to={`/vans/${id}`}>
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
        <button
          className="van-type clear-filters"
          onClick={() => setSearchParams("")}
        >
          Clear
        </button>
      </div>
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
