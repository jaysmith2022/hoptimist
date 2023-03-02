import "./BreweryCard.css";
import { Link } from "react-router-dom";

export const BreweryCard = ({ id, name, city, state, address }) => {
  return (
    <Link to={`/breweries/${id}`} style={{ textDecoration: "none", width: "300px", height: "400px" }}>
      <div className="brew-card">
        <h3>{name}</h3>
        <p>{address}</p>
        <p>
          {city}, {state}
        </p>
      </div>
    </Link>
  );
};
