// AnimalCard.js
import React from 'react';

const AnimalCard = ({ animal, onAssignmentChange }) => {
  const { _id, imageUrl, animalName, description, latitude, longitude, status } = animal;
  const dateTime = new Date().toLocaleString();

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    onAssignmentChange(_id, newStatus);
  };

  return (
    <div className="rounded-lg shadow-md overflow-hidden flex my-2">
      <div style={{ width: '250px', height: '250px' }}>
        <img src={imageUrl} alt={animalName} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{animalName}</h2>
        <p className="text-gray-700 mb-2">Location: {latitude}, {longitude}</p>
        <p className="text-gray-700 mb-2">Description: {description}</p>
        <p className="text-gray-700 mb-4">Date and Time: {dateTime}</p>
        <select
          value={status || 'help-wanted'} // Set the default value to 'help-wanted' if status is falsy
          onChange={handleStatusChange}
          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="help-wanted">Help Wanted</option>
          <option value="done">Done</option>
        </select>
      </div>
    </div>
  );
};

export default AnimalCard;