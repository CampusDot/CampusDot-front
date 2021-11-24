import { GOOGLE_MAPS_KEY } from 'constants/app';

const urlConverter = (reference) => {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${reference}&key=${GOOGLE_MAPS_KEY}`;
};

export default urlConverter;
