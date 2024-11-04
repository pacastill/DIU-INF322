import React from "react";
import { Marker } from "react-leaflet";
import { amarillaIcon,verdeIcon,rojaIcon } from "./Icons";
import MarkerPopup from "./MarkerPopup";

const VenueMarkers = (props) => {
  const { venues } = props;
  const markers = venues.map((venue, i) => (
    <Marker key={i} position={venue.geometry} icon={amarillaIcon}>
      <MarkerPopup data={venue.description} />
    </Marker>
  ));
  return <>{markers}</>;
};

export default VenueMarkers;
