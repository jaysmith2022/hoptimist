import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
        city: "",
        state: ""
    };
  }

  handleClick = (event) => {
    event.preventDefault()
    console.log(this.state)
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
        <select onChange={(event) => this.setState({ city: event.target.value })} name="cities" id="cities" defaultValue="" required>
          <option value={this.state.city} disabled hidden></option>
          {getCities}
        </select>
        <span>or</span>
        <select onChange={(event) => this.setState({ state: event.target.value })} name="state" id="state" defaultValue="" required>
          <option value={this.state.state} disabled hidden></option>
          {getStates}
        </select>
        <button onClick={(event) => this.handleClick(event)} className="submit-city">Submit</button>
      </div>
    );
  }
}

export default Form;
