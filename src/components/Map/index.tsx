import { useRouter } from 'next/dist/client/router';

import { MapContainer, TileLayer, Marker, MapConsumer } from 'react-leaflet';
import L from 'leaflet';

import * as s from './styles';

export type PlaceProps = {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

export type MapProps = {
  places?: PlaceProps[];
};

const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
const MAPBOX_USER_ID = process.env.NEXT_PUBLIC_MAPBOX_USER_ID;
const MAPBOX_STYLE_URL = process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL;

const CustomTileLayer = () => {
  return MAPBOX_ACCESS_TOKEN ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USER_ID}/${MAPBOX_STYLE_URL}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_ACCESS_TOKEN}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  );
};

const markerIcon = new L.Icon({
  iconUrl: 'img/marker.svg',
  iconSize: [20, 28],
  iconAnchor: [10, 28],
  popupAnchor: [0, -40]
});

const Map = ({ places }: MapProps) => {
  const router = useRouter();
  return (
    <s.Wrapper>
      <MapContainer
        center={[0, 0]}
        zoom={3}
        style={{ height: '100%', width: '100%' }}
        minZoom={3}
        maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
      >
        <MapConsumer>
          {map => {
            const width =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth;

            if (width < 768) {
              map.setMinZoom(2);
            }
            return null;
          }}
        </MapConsumer>
        <CustomTileLayer />
        {places &&
          places.map(({ id, name, slug, location }) => {
            const { latitude, longitude } = location;

            return (
              <Marker
                key={`place-${id}`}
                position={[latitude, longitude]}
                title={name}
                icon={markerIcon}
                eventHandlers={{
                  click: () => {
                    router.push(`/place/${slug}`);
                  }
                }}
              />
            );
          })}
      </MapContainer>
    </s.Wrapper>
  );
};

export default Map;
