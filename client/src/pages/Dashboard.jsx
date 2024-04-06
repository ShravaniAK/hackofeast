
import React, { useState } from 'react';
import AnimalCard from './AnimalCard';

const Dashboard = () => {
  const [animals, setAnimals] = useState([
    {
      id: 1,
      name: 'Tiger',
      image: 'https://wildlifesos.org/wp-content/uploads/2022/06/Hyena_Treatment_injured_manchar_akash-2.jpg',
      location: 'India',
      description: 'The tiger is the largest living cat species and a member of the Panthera genus.',
      dateTime: '2023-04-05 10:30 AM',
      assigned: 'assigned',
    },
    {
      id: 2,
      name: 'Giraffe',
      image: 'https://www.peta.org/wp-content/uploads/2014/11/IMG_0638__1415384579_144.223.39.42.jpg',
      location: 'Africa',
      description: 'The giraffe is a tall African hoofed mammal belonging to the genus Giraffa.',
      dateTime: '2023-04-04 02:15 PM',
      assigned: 'unassigned',
    },
    
  ]);

  const handleAssignmentChange = (id, value) => {
    setAnimals((prevAnimals) =>
      prevAnimals.map((animal) =>
        animal.id === id ? { ...animal, assigned: value } : animal
      )
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Animal Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {animals.map((animal) => (
            <AnimalCard
              key={animal.id}
              animal={animal}
              onAssignmentChange={handleAssignmentChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;