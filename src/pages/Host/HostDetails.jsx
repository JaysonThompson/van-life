import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function HostDetails() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const { name, type, description } = details;
  useEffect(() => {
    async function fetchVanDetails() {
      try {
        const response = await fetch(`/api/host/vans/${id}`);
        if (!response.ok) {
          throw new Error(response.status);
        } else {
          const data = await response.json();
          setDetails(data.vans);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchVanDetails();
  }, [id]);

  return (
    <div>
      <p>
        <span>Name:</span> {name}
      </p>
      <p>
        <span>Category:</span> {type}
      </p>
      <p>
        <span>Description:</span> {description}
      </p>
    </div>
  );
}
