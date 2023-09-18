import Select, { SingleValue } from 'react-select';

import { FormEvent, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import {
  ageOptions,
  emergencyOptions,
  genderOptions,
  locationOptions,
  serviceOptions,
} from '../../utils/options';

import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';
import GMap from './GMap';

const libraries: Libraries = ['places'];

export type EstablishmentProps = {
  id: string;
  name: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
};

const RapidResponseForm = () => {
  const [serviceType, setServiceType] = useState<
    SingleValue<{ value: string; label: string }>
  >({
    value: '',
    label: '',
  });

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries,
  });

  const [error, setError] = useState('');
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const handleChange = (
    selectedOption: SingleValue<{ value: string; label: string }>
  ) => {
    console.log(selectedOption);
    setError('');
    setServiceType(selectedOption);
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (position) {
          const { latitude, longitude } = position.coords;

          setUserLocation({
            lat: latitude,
            lng: longitude,
          });
        }
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    if (!serviceType?.value) {
      setError('Please pick emergency type');
      return;
    }
    getLocation();
  };

  return (
    <>
      <form className="w-full space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-4 md:flex md:gap-x-7 md:space-y-0">
          <div className="md:w-1/2">
            <label
              htmlFor="service"
              className="mb-[6px] text-sm/[1.125rem] text-resq-brand-main"
            >
              Service Type
            </label>
            <Select
              options={serviceOptions}
              onChange={handleChange}
              id="service"
            />
            {error ? (
              <p className="mt-1 text-xs text-red-500">{error}</p>
            ) : null}
          </div>
          <div className="md:w-1/2">
            <label
              htmlFor="service"
              className="mb-[6px] text-sm/[1.125rem] text-resq-brand-main"
            >
              Location
            </label>
            <Select options={locationOptions} id="location" />
          </div>
        </div>
        <div className="space-y-4 md:flex md:items-center md:justify-between md:space-y-0">
          <div className="md:w-1/4">
            <label
              htmlFor="service"
              className="mb-[6px] text-sm/[1.125rem] text-resq-brand-main"
            >
              Age
            </label>
            <Select options={ageOptions} id="age" />
          </div>
          <div className="md:w-1/4">
            <label
              htmlFor="service"
              className="mb-[6px] text-sm/[1.125rem] text-resq-brand-main"
            >
              Gender
            </label>
            <Select options={genderOptions} id="gender" />
          </div>
          <div className="md:w-1/4">
            <label
              htmlFor="service"
              className="mb-[6px] text-sm/[1.125rem] text-resq-brand-main"
            >
              Emergency
            </label>
            <Select options={emergencyOptions} id="emergency" />
          </div>
          <div className="flex justify-end md:block">
            <button className="rounded-full bg-resq-brand-main px-9 py-3 text-center text-sm text-white hover:bg-resq-brand-dark md:mt-5">
              Request Access
            </button>
          </div>
        </div>
      </form>
      {userLocation ? (
        <div className="mt-9">
          <button onClick={() => setUserLocation(null)}>
            <AiOutlineClose className="fill-black text-2xl font-bold" />
          </button>
          <GMap
            userLocation={userLocation}
            isLoaded={isLoaded}
            loadError={loadError}
            serviceValue={serviceType?.value}
          />
        </div>
      ) : null}
    </>
  );
};

export default React.memo(RapidResponseForm);
