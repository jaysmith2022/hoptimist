import "./Brewery.css";
import { BreweryCard } from "../BreweryCard/BreweryCard";
import { Link } from "react-router-dom";

export const Brewery = ({ breweries }) => {
  const brewCard = breweries.map((location) => {
    return (
      <BreweryCard
        id={location.id}
        name={location.name}
        city={location.city}
        state={location.state}
        address={location.street}
        key={location.id}
      />
    );
  });

  return (
    <div>
      <div className="back-button-1">
        <Link to="/">
          <button className="go-home">Back to Home</button>
        </Link>
      </div>
      <div className="brewcard-container">{brewCard}</div>
    </div>
  );
};
