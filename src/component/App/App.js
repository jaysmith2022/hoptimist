import React from 'react';
import './App.css';
import { getBreweries } from '../../apicall';
import { Header } from '../Header/Header';
import Form from '../Form/Form';
import { Footer } from '../Footer/Footer';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      breweries: [],
      errors: ""
    }
  }

  componentDidMount() {
    getBreweries()
    .then(data => {
      this.setState({breweries: data})
    })
    .catch(error => {
      this.setState({errors: error.message})
    })
  }

  getfilteredBreweries = (city, state) => {
    const { breweries } = this.state;
    let filteredBreweries = breweries;
    if (city) {
      filteredBreweries = filteredBreweries.filter(brewery => brewery.city === city);
    }
    if (state) {
      filteredBreweries = filteredBreweries.filter(brewery => brewery.state === state);
    }
    return filteredBreweries;
  }
  

  render() {
    return (
      <div className="App">
        <Header />
        <Form cities={this.state.breweries} filterBrewery={this.getfilteredBreweries}/>
        <Footer />
      </div>
    )
  }
}

export default App;
