import { useOutletContext } from "react-router-dom";
export default function HostPhotos() {
  const [van] = useOutletContext();
  const { imageUrl, name } = van;
  return <img src={imageUrl} alt={name} className="host-van-detail-image" />;
}
