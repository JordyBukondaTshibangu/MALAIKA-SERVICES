"use client";

import L from "leaflet";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

// Type-safe workaround for Leaflet's icon loading in Next.js
delete (L.Icon.Default.prototype as { _getIconUrl?: () => void })._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/images/marker-icon-2x.png",
  iconUrl: "/leaflet/images/marker-icon.png",
  shadowUrl: "/leaflet/images/marker-shadow.png",
});

const MapComponent: React.FC = () => {
  useEffect(() => {
    import("leaflet/dist/leaflet.css");
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto pt-10 xl:py-20">
      <MapContainer
        center={[-4.3224, 15.307]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-4.3224, 15.307]}>
          <Popup>Malaika Services HQ</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default MapComponent;
