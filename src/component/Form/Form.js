import React from "react";
import "./Form.css";
import { withRouter } from "react-router-dom";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      state: "",
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    if ((this.state.city && this.state.state) || (!this.state.city && !this.state.state)) {
      return;
    }

    this.props.filterBrewery(this.state.city, this.state.state);
    this.clearInputs();
    this.props.history.push("/breweries")
  };

  clearInputs = () => {
    this.setState({
      city: "",
      state: "",
    });
  };

  render() {
    const states = this.props.cities.map((place) => place.state);
    const removeEmpty = states.filter(
      (state) => state && state.trim().length > 0
    );
    const uniqueStates = [...new Set(removeEmpty)];
    const getStates = uniqueStates.map((state) => {
      return (
        <option value={state} key={state}>
          {state}
        </option>
      );
    });

    return (
      <div className="city-selector">
        <label htmlFor="cities">Choose a location:</label>
        <select
          onChange={(event) => this.setState({ state: event.target.value })}
          name="state"
          id="state"
          value={this.state.state}
          required>
          <option value="" disabled hidden></option>
          {getStates}
        </select>
        <button
          onClick={(event) => this.handleClick(event)}
          className="submit-city"
        >
          Submit
        </button>
      </div>
    );
  }
}

export default withRouter(Form);
