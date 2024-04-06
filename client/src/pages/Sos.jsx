import React, { useState } from 'react';

const Sos = () => {
  const [animalName, setAnimalName] = useState('');
  const [image, setImage] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [description, setDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnimalNameChange = (event) => {
    setAnimalName(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log('Geolocation not supported');
    }
  };

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLatitude(latitude);
    setLongitude(longitude);
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  };

  const error = () => {
    console.log('Unable to retrieve your location');
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('animalName', animalName);
    formData.append('image', image);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    formData.append('description', description);

    const formDataObj = Object.fromEntries(formData.entries());

    console.log('Form Data:', formDataObj);

    try {
      const response = await fetch('/api/endpoint', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        console.log('Data sent successfully');
      } else {
        console.error('Failed to send data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <label htmlFor="animalName" className="block font-semibold">Name of the animal:</label>
      <input
        type="text"
        id="animalName"
        value={animalName}
        onChange={handleAnimalNameChange}
        className="block border border-gray-300 rounded px-4 py-2 my-2"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="block border border-gray-300 rounded px-4 py-2 my-2"
      />
      <button onClick={getLocation} className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2">
        Get Location
      </button>
      {image && <img src={URL.createObjectURL(image)} alt="Uploaded" className="block my-4 mx-auto max-w-full h-auto" />}
      {latitude && longitude && (
        <div className="my-4">
          <p className="font-semibold">Latitude: {latitude}</p>
          <p className="font-semibold">Longitude: {longitude}</p>
        </div>
      )}
      <label htmlFor="description" className="block font-semibold">Description (optional):</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block border border-gray-300 rounded px-4 py-2 my-2"
      />
      <button onClick={handleSubmit} className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2">
        Submit
      </button>
      {isSubmitted && <p className="font-semibold text-green-600">Data sent successfully</p>}
    </div>
  );
};

export default Sos;
