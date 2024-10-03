import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDogBreeds } from '../../utils/apiServices';
import { Link } from 'react-router-dom';
import Loader from './utilsComponents/Loaders'
const ItemDetail = () => {
  const { id } = useParams();
  const [breed, setBreed] = useState(null);

  useEffect(() => {
    const getBreed = async () => {
      const data = await fetchDogBreeds();
      const selectedBreed = data.find(b => b.id === parseInt(id));
      setBreed(selectedBreed);
    };
    getBreed();
  }, [id]);

  return breed ? (
    <div className="p-6 h-screen text-[#1D3557]">
      <div className="mb-4">
        <Link
          to="/"
          className="w-full block text-start text-black-900 hover:underline"
        >
          ← Back to all breeds
        </Link>
      </div>

      <div className="flex flex-col items-center md:flex-row gap-4 md:gap-12 border p-8">
        <div className="md:w-1/2">
          <img
            src={`https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`}
            alt="dog images"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className=" ml-12 md:w-1/2">
          <h2 className="text-5xl font-bold text-black-800 mb-4">
            {breed.name}
          </h2>

          <h3 className="text-2xl font-medium text-gray-800 mb-4">Main Info</h3>
          <ul className="list-none text-gray-600">
            <li className="mb-2">
              Origin <strong>{breed.origin || "Unknown"}</strong>
            </li>
            <li className="mb-2">
              Life Expectancy: <strong>{breed.life_span}</strong>
            </li>
            <li className="mb-2">
              Average Height: <strong>{breed.height.metric} centimeters</strong>{" "}
            </li>
            <li className="mb-2">
              Average Weight: <strong>{breed.weight.metric} kg</strong>{" "}
            </li>
            <li className="mb-2">
              Temperament: <strong>{breed.temperament}</strong>
            </li>
            <li className="mb-2">
              Breed For: <strong>{breed.bred_for || "Unknown"}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default ItemDetail;
