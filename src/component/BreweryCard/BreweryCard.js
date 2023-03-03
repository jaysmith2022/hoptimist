import PropTypes from "prop-types";
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

BreweryCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
};
