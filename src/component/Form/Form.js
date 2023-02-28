import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const cities = this.props.cities.map((place) => place.city);
    const uniqueCities = [...new Set(cities)];

    const getCities = uniqueCities.map((city) => {
      return (
        <option value={city} key={city}>
          {city}
        </option>
      );
    });

    const states = this.props.cities.map(place => place.state)
    const removeEmpty = states.filter(state => state && state.trim().length > 0)
    const uniqueStates = [...new Set(removeEmpty)]
    const getStates = uniqueStates.map((state) => {
        return (
            <option value={state} key={state}>
                {state}
            </option>
        )
    })

    return (
        <div className="city-selector">
        <label htmlFor="cities">Choose a location:</label>
        <select name="cities" id="cities" defaultValue="" required>
          <option value="" disabled hidden></option>
          {getCities}
        </select>
        <span>or</span>
        <select name="state" id="state" defaultValue="" required>
          <option value="" disabled hidden></option>
          {getStates}
        </select>
        <button className="submit-city">Submit</button>
      </div>
    );
  }
}

export default Form;
