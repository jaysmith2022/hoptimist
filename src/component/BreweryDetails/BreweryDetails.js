import React from "react";
import Map, { Marker } from "react-map-gl";
import "./BreweryDetails.css";
import { getSingleBrewery } from "../../apicall";
import "mapbox-gl/dist/mapbox-gl.css";
import { Link } from "react-router-dom";

class BreweryDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      singleBrewery: [],
      error: "",
      viewport: {
        latitude: 0,
        longitude: 0,
        width: "50vw",
        height: "50vh",
        zoom: 10,
      },
    };
  }

  componentDidMount() {
    const id = this.props.match.params.brewID;
    getSingleBrewery(id)
      .then((data) => {
        this.setState({
          singleBrewery: data,
          viewport: {
            ...this.state.viewport,
            latitude: data.latitude,
            longitude: data.longitude,
          },
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });
  }

  render() {
    const MAPBOX_TOKEN =
      "pk.eyJ1IjoiamF5c21pdGg2MDM1IiwiYSI6ImNsZXEzNHh3cjBpN2YzcG52NGExNWgxZ2EifQ.hl74HXe1p7RQMumuu7RaSg";
    return (
      <div className="single-brewery-details">
        <div className="back-button">
          <Link to="/">
            <button className="go-home">Back to Home</button>
          </Link>
          <Link to="/breweries">
            <button className="go-to-breweries">Back to Breweries</button>
          </Link>
        </div>
        <h2 className="single-brewery-name">{this.state.singleBrewery.name}</h2>
        <p className="single-brewery-address">
          {this.state.singleBrewery.street} {this.state.singleBrewery.city},{" "}
          {this.state.singleBrewery.state}
        </p>
        <p className="single-brewery-phone">
          Phone Number: {this.state.singleBrewery.phone}
        </p>
        {this.state.singleBrewery.website_url !== null &&
        <p className="single-brewery-website">
          <a
            href={this.state.singleBrewery.website_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit The Website
          </a>
        </p>
        }
        {this.state.viewport.latitude === 0 ? (
          <h3>Loading...</h3>
        ) : (
          <Map
            initialViewState={{
              latitude: this.state.viewport.latitude,
              longitude: this.state.viewport.longitude,
              zoom: 18,
            }}
            style={{
              width: this.state.viewport.width,
              height: this.state.viewport.height,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={MAPBOX_TOKEN}
          >
            <Marker
              longitude={this.state.viewport.longitude}
              latitude={this.state.viewport.latitude}
              color="red"
            />
          </Map>
        )}
      </div>
    );
  }
}

export default BreweryDetails;
