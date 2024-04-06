import React, { useState } from 'react';

const ImageAndGeolocationComponent = () => {
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
    <div>
      <label htmlFor="animalName">Name of the animal:</label>
      <input
        type="text"
        id="animalName"
        value={animalName}
        onChange={handleAnimalNameChange}
      />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={getLocation}>Get Location</button>
      {image && <img src={URL.createObjectURL(image)} alt="Uploaded" />}
      {latitude && longitude && (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}
      <label htmlFor="description">Description (optional):</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {isSubmitted && <p>Data sent successfully</p>}
    </div>
  );
};

export default ImageAndGeolocationComponent;