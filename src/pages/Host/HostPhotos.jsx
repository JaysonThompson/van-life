import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function HostPhotos() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
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
  return <img src={details.imageUrl} alt={details.name} />;
}
