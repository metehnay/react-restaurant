import { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import "./Maps.css";

class Maps extends Component {
  render() {
    return (
      <>
        <div className="delivery">
          <h1>DELIVERY</h1>
        </div>
        <div className="phone">
          <h2>Call us: +971 50 137 3503</h2>
        </div>

        <div className="map-container">
          <Map
            google={this.props.google}
            style={{
              width: "100%",
              height: "60%",
            }}
            zoom={10}
            initialCenter={{ lat: 68.70406, lng: 17.102493 }}
          />
        </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD2FuR-eCG-KrP1TKc0sg6mP3vjw3UE-KQ",
})(Maps);
