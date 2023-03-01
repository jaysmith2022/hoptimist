import "./BreweryCard.css";

export const BreweryCard = (name, city, state) => {
  return (
    <div className="brew-card">
      <h3>{name}</h3>
      <p>
        {city}, {state}
      </p>
    </div>
  );
};
