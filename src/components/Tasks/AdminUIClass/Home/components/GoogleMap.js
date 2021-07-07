import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class GoogleMaps extends React.Component{

  constructor(props){
    super(props)
    this.data = {
      address: "",
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},    
      mapCenter: {
        lat: 49.2827291,
        lng: -123.1207375,
      },

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
export default GoogleApiWrapper({
  apiKey: "AIzaSyA9Yz0XkeaFsLXLjsBdTwmGVXcmbAy1fk0",
})(GoogleMaps);
