import React, { useEffect, useState } from 'react';
import { fetchDogBreeds } from '../../utils/apiServices';
import SearchBar from './utilsComponents/SearchBar';
import Pagination from './utilsComponents/Pagination';
import Filters from './utilsComponents/Filters';
import BreedItem from './utilsComponents/BreedItem';
import Loader from './utilsComponents/Loaders'; 

const ItemList = () => {
  const [breeds, setBreeds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGroups, setFilterGroups] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const getBreeds = async () => {
      const data = await fetchDogBreeds();
      setBreeds(data);
      setLoading(false); 
    };
    getBreeds();
  }, []);

  const filteredBreeds = breeds.filter(
    (breed) =>
      breed &&
      typeof breed.name === 'string' &&
      breed.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterGroups.length > 0 ? filterGroups.includes(breed.breed_group) : true)
  );

  const sortedBreeds = filteredBreeds.sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'weight':
        return parseFloat(a.weight.imperial.split('-')[0]) - parseFloat(b.weight.imperial.split('-')[0]);
      case 'height':
        return parseFloat(a.height.imperial.split('-')[0]) - parseFloat(b.height.imperial.split('-')[0]);
      case 'life_span':
        return parseInt(a.life_span.split(' ')[0]) - parseInt(b.life_span.split(' ')[0]);
      default:
        return 0;
    }
  });

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = sortedBreeds.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(sortedBreeds.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFilterGroups((prev) => [...prev, value]);
    } else {
      setFilterGroups((prev) => prev.filter((group) => group !== value));
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl text-blue-500 font-bold text-center mb-6">Dog Breeds</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6">
        <Filters
          handleFilterChange={handleFilterChange}
          handleToggle={handleToggle}
          isOpen={isOpen}
          setSortBy={setSortBy}
          sortBy={sortBy}
          filterGroups={filterGroups}
        />

        <div>
          <SearchBar setSearchTerm={setSearchTerm} />

          {loading ? (
            <Loader />
          ) : currentItems.length > 0 ? (
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center w-full">
                {currentItems.map((breed) => (
                  <BreedItem key={breed.id} breed={breed} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">No breeds found.</div>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemList;
