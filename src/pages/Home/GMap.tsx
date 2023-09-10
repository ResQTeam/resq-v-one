import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { useCallback, useMemo, useState } from 'react';

type MapProps = {
  userLocation: {
    lat: number;
    lng: number;
  };
  isLoaded: boolean;
  loadError: Error | undefined;
  serviceValue: string | undefined;
};

const GMap = ({
  userLocation,
  isLoaded,
  loadError,
  serviceValue,
}: MapProps) => {
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  // });

  const [hospitals, setHospitals] = useState<any>([]);

  const onLoad = useCallback((map: google.maps.Map) => {
    const { lat, lng } = userLocation;
    console.log(typeof google.maps.places);
    if (typeof google !== undefined) {
      console.log('we are live');
    } else {
      console.log('nothing dey here');
    }
    let googleMenu = google.maps;
    // setTimeout(() => {

    // }, 5000);
    const request = {
      location: new googleMenu.LatLng(lat, lng),
      radius: 10000,
      type: serviceValue === 'medical' ? 'hospital' : 'police',
    };

    const service = new googleMenu.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
      console.log(results, status);
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        setHospitals(results);
        console.log(results);
      }
    });
  }, []);

  const initalCenter = {
    lat: userLocation.lat, // Initial latitude
    lng: userLocation.lng, // Initial longitude
  };

  const center = useMemo(() => initalCenter, []);

  if (loadError) return <p>Error Loading Map...</p>;

  if (!isLoaded) return <p>Loading....</p>;

  return (
    <div className="h-[450px] w-full">
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerStyle={{ width: '100%', height: '450px' }}
        onLoad={onLoad}
      >
        {hospitals.map((item: any, idx: number) => {
          return <MarkerF key={idx} position={item.geometry.location} />;
        })}
        {/* <MarkerF position={center} /> */}
      </GoogleMap>
    </div>
  );
};

export default GMap;
