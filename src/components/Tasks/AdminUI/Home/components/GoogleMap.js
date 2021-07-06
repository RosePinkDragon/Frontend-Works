import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const GoogleMaps = (props) => {
  const data = {
    address: "",

    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

    mapCenter: {
      lat: 49.2827291,
      lng: -123.1207375,
    },
  };

  return (
    <div className="chartWrap">
      <Map
        google={props.google}
        initialCenter={{
          lat: data.mapCenter.lat,
          lng: data.mapCenter.lng,
        }}
        center={{
          lat: data.mapCenter.lat,
          lng: data.mapCenter.lng,
        }}
      ></Map>
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: "AIzaSyA9Yz0XkeaFsLXLjsBdTwmGVXcmbAy1fk0",
})(GoogleMaps);
