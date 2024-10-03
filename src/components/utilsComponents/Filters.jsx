import React from "react";
import Sort from "../../assets/sort.png";
import { FaFilter } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

const Filters = ({
  handleFilterChange,
  handleToggle,
  isOpen,
  setSortBy,
  sortBy,
  filterGroups,
}) => (
  <div className="flex flex-col items-start w-full p-4 bg-white shadow-md rounded-lg">
    <button
      onClick={handleToggle}
      className="ml-auto mb-2 bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none md:hidden"
    >
      {isOpen ? <IoFilter /> : <FaFilter />}
    </button>

    <div
      className={`transition-all duration-300 ${
        isOpen ? "block" : "hidden"
      } md:block`}
    >
      <div className="flex items-center mb-2">
        <h3 className="font-semibold">Breed Group</h3>
        <img
          src={Sort}
          alt="Filters"
          className="w-6 h-6 object-cover ml-2 rounded-md"
        />
      </div>
      {[
        "Toy",
        "Hound",
        "Terrier",
        "Working",
        "Mixed",
        "Non-Sporting",
        "Sporting",
        "Herding",
      ].map((group) => (
        <div key={group} className="flex items-center mb-2">
          <input
            type="checkbox"
            value={group}
            checked={filterGroups.includes(group)}
            onChange={handleFilterChange}
            className="mr-2"
          />
          <label className="text-gray-700">{group}</label>
        </div>
      ))}

      <div className="flex items-center mb-2 mt-4">
        <h3 className="font-semibold">Sort by </h3>
        <img
          src={Sort}
          alt="Filters"
          className="w-6 h-6 object-cover ml-2 rounded-md"
        />
      </div>
      {["name", "weight", "height", "life_span"].map((option) => (
        <div key={option} className="flex items-center mb-2">
          <input
            type="radio"
            name="sort"
            value={option}
            checked={sortBy === option}
            onChange={(e) => setSortBy(e.target.value)}
            className="mr-2"
          />
          <label className="text-gray-700">
            {option.charAt(0).toUpperCase() + option.slice(1).replace("_", " ")}
          </label>
        </div>
      ))}
    </div>
  </div>
);

export default Filters;
