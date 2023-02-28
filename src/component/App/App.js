import React from 'react';
import './App.css';
import { getBreweries } from '../../apicall';

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

  render() {
    return (
      <div className="App">
        <h1>The Hoptimist</h1>
      </div>
    )
  }
}

export default App;
