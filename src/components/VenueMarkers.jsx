import React,{map} from "react";
import { Marker } from "react-leaflet";
import { amarillaIcon,verdeIcon,rojaIcon } from "./Icons";
import MarkerPopup from "./MarkerPopup";

const VenueMarkers = (props) => {
  const { venues } = props;
  const markers = venues.map((venue, i) => (
    <Marker key={venue.id} position={[venue.lat,venue.lng]} icon={amarillaIcon}>
      <MarkerPopup data={venue.direccion} />
    </Marker>
  ));
  return <>{markers}</>;
};

export default VenueMarkers;
