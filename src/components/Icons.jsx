import L from "leaflet";

import amarilla from '../assets/amarilla.png';
import verde from '../assets/verde.png';
import roja from '../assets/roja.png';

export const amarilloIcon = new L.Icon({
  iconUrl: amarilla,
  iconSize: [40, 40],
  iconAnchor: [13, 13],
  popupAnchor: [0, -40]
});

export const verdeIcon = new L.Icon({
  iconUrl: verde,
  iconSize: [40, 40], 
  iconAnchor: [13, 13], 
  popupAnchor: [0, -40]
});

export const rojaIcon = new L.Icon({
  iconUrl: roja,
  iconSize: [40, 40], 
  iconAnchor: [13, 13], 
  popupAnchor: [0, -40]
});
