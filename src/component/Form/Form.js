import React from "react";
import PropTypes from 'prop-types';
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
    let getStates = null;
    if (Array.isArray(this.props.states)) {
      const states = this.props.states.map((place) => place.state);
      const removeEmpty = states.filter(
        (state) => state && state.trim().length > 0
      );
      const uniqueStates = [...new Set(removeEmpty)];
      getStates = uniqueStates.map((state) => {
        return (
          <option value={state} key={state}>
            {state}
          </option>
        );
      });
    }

    return (
      <div className="city-selector">
        <label htmlFor="cities">Choose a location:</label>
        <select
          className="drop-down"
          onChange={(event) => this.setState({ state: event.target.value })}
          name="state"
          id="state"
          value={this.state.state}
          required>
          <option value="" disabled >
          </option>
          {getStates}
        </select>
        <button
          onClick={(event) => this.handleClick(event)}
          className="submit-state"
        >
          Submit
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  filterBrewery: PropTypes.func.isRequired,
  states: PropTypes.arrayOf(
    PropTypes.shape({
      state: PropTypes.string,
    })
  ),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Form);
