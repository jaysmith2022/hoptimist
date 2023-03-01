import React from "react";
import "./App.css";
import { getBreweries } from "../../apicall";
import { Header } from "../Header/Header";
import Form from "../Form/Form";
import { Footer } from "../Footer/Footer";
import { Brewery } from "../Brewery/Brewery";
import { Route, Switch, Link } from "react-router-dom";
import logo from "../../assets/logo-black.png";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breweries: [],
      errors: "",
      filteredBreweries: JSON.parse(localStorage.getItem('filteredBreweries')) || [], // check if filteredBreweries exists in storage and set as initial state
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
    localStorage.setItem('filteredBreweries', JSON.stringify(filteredBreweries)); // store filteredBreweries in storage
  };

  render() {
    console.log(this.state.breweries)
    return (
      <div className="App">
        <Link style={{textDecoration: "none"}} to="/">
          <div className="header-wrapper">
            <img src={logo} width="15%" alt="beerlogo" />
            <h1>The Hoptimist</h1>
          </div>
        </Link>
        <Switch>
          <Route exact path="/">
            <Header/>
            <Form
              cities={this.state.breweries}
              filterBrewery={this.getFilteredBreweries}
            />

          </Route>
          <Route exact path="/breweries">
            <Brewery breweries={this.state.filteredBreweries} />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}


export default App;
