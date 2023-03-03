import React from "react";
import "./App.css";
import { getBreweries } from "../../apicall";
import { Header } from "../Header/Header";
import Form from "../Form/Form";
import { Footer } from "../Footer/Footer";
import { Brewery } from "../Brewery/Brewery";
import { Route, Switch, Link } from "react-router-dom";
import logo from "../../assets/logo-black.png";
import BreweryDetails from "../BreweryDetails/BreweryDetails";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breweries: [],
      errors: "",
      filteredBreweries:
        JSON.parse(localStorage.getItem("filteredBreweries")) || [],
    };
  }

  componentDidMount() {
    getBreweries()
      .then((data) => {
        this.setState({ breweries: data });
      })
      .catch((error) => {
        this.setState({ errors: error.message });
      });
  }

  getFilteredBreweries = (city, state) => {
    const breweries = this.state.breweries;
    let filteredBreweries = breweries;
    if (city) {
      filteredBreweries = filteredBreweries.filter(function (brewery) {
        return brewery.city === city;
      });
    }
    if (state) {
      filteredBreweries = filteredBreweries.filter(function (brewery) {
        return brewery.state === state;
      });
    }
    this.setState({ filteredBreweries: filteredBreweries });
    localStorage.setItem(
      "filteredBreweries",
      JSON.stringify(filteredBreweries)
    );
  };

  render() {
    return (
      <div className="App">
        <Link style={{ textDecoration: "none" }} to="/">
          <div className="header-wrapper">
            <img src={logo} width="15%" alt="beerlogo" />
            <h1>The Hoptimist</h1>
          </div>
        </Link>
        <Switch>
          {this.state.errors ? (
            <h2 className="error-message">{this.state.errors}</h2>
          ) : (
            <Route exact path="/">
              <Header />
              <Form
                states={this.state.breweries}
                filterBrewery={this.getFilteredBreweries}
              />
            </Route>
          )}
          {this.state.filteredBreweries.length === 0 ? (
            <h2 className="no-breweries">No Breweries</h2>
          ) : (
            <Route exact path="/breweries">
              <Brewery breweries={this.state.filteredBreweries} />
            </Route>
          )}
          <Route
            exact
            path="/breweries/:brewID"
            render={(props) => (
              <BreweryDetails {...props} brewID={props.match.params.brewID} />
            )}
          ></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  states: PropTypes.arrayOf(PropTypes.object),
  filterBrewery: PropTypes.func,
  breweries: PropTypes.arrayOf(PropTypes.object),
  brewID: PropTypes.string,
};

export default App;
