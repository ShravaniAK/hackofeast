// Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnimalCard from './AnimalCard';

const Dashboard = () => {
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch animal data from the API
    const fetchAnimals = async () => {
      try {
        const response = await axios.get('https://hackofeast.onrender.com/SOS/getAll');
        setAnimals(response.data.data);
      } catch (error) {
        console.error('Error fetching animals:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnimals();
  }, []);

  const handleAssignmentChange = async (animalId, status) => {
    try {
      const url = `https://hackofeast.onrender.com/SOS/update/${animalId}`;
      const response = await axios.put(url, { status });

      // Update the local state and the database
      setAnimals((prevAnimals) =>
        prevAnimals.map((animal) =>
          animal._id === animalId ? { ...animal, status } : animal
        )
      );

      // Update the database with the new status
      const updatedAnimal = { ...response.data, status };
      await axios.put(`https://hackofeast.onrender.com/SOS/update/${animalId}`, updatedAnimal);

      console.log(response.data);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div>
      <h1>Animal Dashboard</h1>
      {isLoading ? (
        <p>Loading animals...</p>
      ) : animals.length > 0 ? (
        <div>
          {animals.map((animal) => (
            <AnimalCard key={animal._id} animal={animal} onAssignmentChange={handleAssignmentChange} />
          ))}
        </div>
      ) : (
        <p>No animals found.</p>
      )}
    </div>
  );
};

export default Dashboard;