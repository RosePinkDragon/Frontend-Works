import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

<<<<<<< Updated upstream
class GoogleMaps extends React.Component{

  constructor(props){
    super(props)
=======
export class GoogleMaps extends React.Component {
  constructor(props) {
    super(props);
>>>>>>> Stashed changes
    this.data = {
      address: "",
      showingInfoWindow: false,
      activeMarker: {},
<<<<<<< Updated upstream
      selectedPlace: {},    
=======
      selectedPlace: {},
>>>>>>> Stashed changes
      mapCenter: {
        lat: 49.2827291,
        lng: -123.1207375,
      },
<<<<<<< Updated upstream

    }
  }
  render() {

    return (
      <div className="chartWrap">
      <Map
        google={this.props.google}
        initialCenter={{
          lat: this.data.mapCenter.lat,
          lng: this.data.mapCenter.lng,
        }}
        center={{
          lat: this.data.mapCenter.lat,
          lng: this.data.mapCenter.lng,
        }}
        ></Map>
    </div>
  );
}
};
=======
    };
  }
  render() {
    return (
      <div className="chartWrap">
        <Map
          google={this.props.google}
          initialCenter={{
            lat: this.data.mapCenter.lat,
            lng: this.data.mapCenter.lng,
          }}
          center={{
            lat: this.data.mapCenter.lat,
            lng: this.data.mapCenter.lng,
          }}
        ></Map>
      </div>
    );
  }
}
>>>>>>> Stashed changes
export default GoogleApiWrapper({
  apiKey: "AIzaSyA9Yz0XkeaFsLXLjsBdTwmGVXcmbAy1fk0",
})(GoogleMaps);
