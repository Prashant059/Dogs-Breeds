import React from 'react';
import { Link } from 'react-router-dom';

const BreedItem = ({ breed }) => (
  <Link
    to={`/breed/${breed.id}`}
    className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl hover:pointer transition-shadow duration-300 w-64 group"
  >
    <div className="h-48 w-full overflow-hidden rounded mb-4">
      <img
        src={`https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`}
        alt={breed.name}
        className="h-auto w-auto object-cover"
      />
    </div>
    <h2 className="font-semibold text-lg text-center mb-2 group-hover:text-blue-500">{breed.name}</h2>
  </Link>
);

export default BreedItem;
