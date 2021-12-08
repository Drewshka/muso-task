import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { formatRelative } from "date-fns";

import "@reach/combobox/styles.css";
import mapStyles from "../../mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 43.6532,
  lng: -79.3832,
};

const apiURL = "http://localhost:8080";
const gigsURL = `${apiURL}/gigs`;

//TODO: sometimes the markers don't load right away on the map, try refreshing the page or navigating to another page, then back to maps and the markers should appear

export default function Map(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(gigsURL)
      .then(async function (response) {
        response.data.map(async (gig) => {
          try {
            console.log(gig.address);
            const gigAddress = gig.address;
            const results = await getGeocode({ address: gigAddress });
            const { lat, lng } = await getLatLng(results[0]);
            console.log(lat, lng);

            setMarkers((current) => [
              ...current,
              {
                lat,
                lng,
                time: new Date(),
                name: gig.gigName,
                creator: gig.name,
                venue: gig.venue,
                date: gig.date,
              },
            ]);
          } catch (error) {
            console.log("Error", error);
          }
        });
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <h1>
        Events{" "}
        <span role="img" aria-label="tent">
          🚊
        </span>
      </h1>

      <Locate panTo={panTo} />
      <Search panTo={panTo} />

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker, i) => (
          <Marker
            // key={`${marker.lat}-${marker.lng}`}
            key={i}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
            icon={{
              url: `/guitar.svg`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}

        {/* MARKERS */}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div className="marker">
              <p
                className="marker-name"
                style={{ color: "blue", fontWeight: "bold" }}
              >
                <span style={{ color: "black", fontWeight: "normal" }}>
                  Gig:{" "}
                </span>
                {selected.name}
              </p>
              <p
                className="marker-creator"
                style={{ color: "blue", fontWeight: "bold" }}
              >
                <span style={{ color: "black", fontWeight: "normal" }}>
                  Posted by:{" "}
                </span>
                {selected.creator}
              </p>
              <p
                className="marker-venue"
                style={{ color: "blue", fontWeight: "bold" }}
              >
                <span style={{ color: "black", fontWeight: "normal" }}>
                  Venue:{" "}
                </span>{" "}
                {selected.venue}
              </p>
              <p
                className="marker-date"
                style={{ color: "blue", fontWeight: "bold" }}
              >
                <span style={{ color: "black", fontWeight: "normal" }}>
                  Date:{" "}
                </span>
                {selected.date}
              </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src="/compass.svg" alt="compass" style={{ height: "3rem" }} />
    </button>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
