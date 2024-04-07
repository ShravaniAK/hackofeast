import React from "react";

const Home = () => {
  return (
    <div>
      <div className="relative h-screen flex items-center justify-center">
        <div
          className="w-full  h-full  bg-cover bg-center transition-all duration-300"
          style={{
            backgroundImage: `url("/maindog.jpg")`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-lg font-bold mb-4">
              Rescue Injured Pets, Adopt a Friend, Protect with Vaccination
            </h1>
            <p className="mt-4 text-lg">
              Find your new furry friend, help injured pets get the care they
              need, and ensure your pets stay healthy with vaccinations.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16 mt-8">
        <h1
          className="text-3xl font-bold text-center text-teal-500 my-28 py-20"
          style={{ margin: "2rem", fontSize: "50px" }}
        >
          Our Services
        </h1>

        <div className="container mx-auto flex justify-center items-center">
          <div className="w-full md:w-auto flex flex-col md:flex-row mx-auto justify-center items-center">
            {/* Service 1: Rescue Injured Pet */}
            <div
              className="bg-turquoise-500 text-white rounded-lg overflow-hidden shadow-lg"
              style={{ width: "300px", marginRight: "20px" }} // Added inline CSS for right margin
            >
              <div className="flex justify-center items-center h-48">
                <div className="w-1/2 h-1/2 flex justify-center items-center">
                  <img
                    src="/injurd.png"
                    alt="Rescue Injured Pet"
                    className="w-24 h-24"
                  />
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-teal-500 text-center">
                  Rescue Injured Pet
                </h2>
                <p className="text-teal-500 text-center">
                  Help injured pets get the care and love they deserve.
                </p>
              </div>
            </div>
            {/* Service 2: Adopt a Pet */}
            <div
              className="bg-turquoise-500 text-white rounded-lg overflow-hidden shadow-lg"
              style={{ width: "250px", marginRight: "20px" }} // Added inline CSS for right margin
            >
              <div className="flex justify-center items-center h-48">
                <div className="w-1/2 h-1/2 flex justify-center items-center">
                  <img
                    src="/kitten.png"
                    alt="Adopt a Pet"
                    className="w-24 h-24"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-teal-500 text-center">
                  Find Pet Needs
                </h3>
                <p className="text-teal-500 text-center">
                  Find something for your new furry friend and give them a
                  treat.
                </p>
              </div>
            </div>
            {/* Service 3: Pet Vaccination Center */}
            <div
              className="bg-turquoise-500 text-white rounded-lg overflow-hidden shadow-lg"
              style={{ width: "250px" }} // No right margin for the last card
            >
              <div className="flex justify-center items-center h-48">
                <div className="w-1/2 h-1/2 flex justify-center items-center">
                  <img
                    src="/vaccine.png"
                    alt="Pet Vaccination Center"
                    className="w-24 h-24"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-teal-500 text-center">
                  Pet Vaccination Center
                </h3>
                <p className="text-teal-500 text-center">
                  Ensure your pets are healthy and protected with vaccinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1
        className="text-3xl font-bold text-center text-teal-500 my-28 py-20"
        style={{ margin: "2rem", fontSize: "50px" }}
      >
        Featured Pets
      </h1>

      <div className="flex items-center justify-center sm:flex-col">
       
            <div className="flex sm:flex-col flex-wrap justify-center" style={{ gap: "2rem" }}>
              {/* Featured Pet 1 */}
              <div className="flex-shrink-0">
                <img
                  src="/pet1.jpg"
                  alt="Pet 1"
                  className="w-64 h-64 object-cover rounded-lg"
                />
                <p className="text-center mt-2 text-teal-500">Pet Name 1</p>
              </div>
              {/* Featured Pet 2 */}
              <div className="flex-shrink-0">
                <img
                  src="/pet2.jpg"
                  alt="Pet 2"
                  className="w-64 h-64 object-cover rounded-lg"
                />
                <p className="text-center mt-2 text-teal-500">Pet Name 1</p>
              </div>
              {/* Featured Pet 3 */}
              <div className="flex-shrink-0">
                <img
                  src="/pet3.jpg"
                  alt="Pet 3"
                  className="w-64 h-64 object-cover rounded-lg"
                />
                <p className="text-center mt-2 text-teal-500">Pet Name 1</p>
              </div>
              {/* Featured Pet 4 */}
              <div className="flex-shrink-0">
                <img
                  src="/pet4.jpg"
                  alt="Pet 4"
                  className="w-64 h-64 object-cover rounded-lg"
                />
                <p className="text-center mt-2 text-teal-500">Pet Name 1</p>
              </div>
            </div>
         
      </div>
      <div className="footer p-2 text-center" style={{marginTop:'7rem', background:'#9ee5df'}}>
       <div>made with love </div>
      </div>
    </div>
       
  );
};

export default Home;
