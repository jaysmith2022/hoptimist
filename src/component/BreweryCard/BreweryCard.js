import "./BreweryCard.css";
import { Link } from "react-router-dom";

export const BreweryCard = ({name, city, state, address}) => {
  return (
    <Link style={{textDecoration: "none"}} to="/breweries">
      <div className="brew-card">
        <h3>{name}</h3>
        <p>
          {city}, {state}
        </p>
        <figcaption>{address}</figcaption>
      </div>
    </Link>
  );
};
