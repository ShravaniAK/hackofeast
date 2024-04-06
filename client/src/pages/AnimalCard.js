import React from 'react';

const AnimalCard = ({ animal, onAssignmentChange }) => {
  const { id, name, image, location, description, dateTime, assigned } = animal;

  const handleAssignmentChange = (event) => {
    onAssignmentChange(id, event.target.value);
  };

  return (
    <div className="rounded-lg shadow-md overflow-hidden flex my-2">
      <div style={{width:"250px", height:'250px'}}>
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
     
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{name}</h2>
        <p className="text-gray-700 mb-2">Location: {location}</p>
        <p className="text-gray-700 mb-2">Description: {description}</p>
        <p className="text-gray-700 mb-4">Date and Time: {dateTime}</p>
        <select
          value={assigned}
          onChange={handleAssignmentChange}
          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="assigned">Assigned</option>
          <option value="unassigned">Unassigned</option>
        </select>
      </div>
    </div>
  );
};

export default AnimalCard;
