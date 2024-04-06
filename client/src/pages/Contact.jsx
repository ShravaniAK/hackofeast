
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Contact Us</h1>
        <p className="text-gray-600 leading-loose mb-8 text-center">Have any questions or need help? Feel free to reach out to us using the form below.</p>
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
            <div stylte={{width:"20px", height:"250px"}}className="flex items-center justify-center h-full">
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/453/432/original/vector-contact-us-background.jpg"
                alt="Contact Us Image"
                className="w-full h-full md:max-w-sm rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 py-8 md:py-0">
            <form>
              <div className="flex flex-col space-y-4">
                <label htmlFor="name" className="text-gray-800 font-bold">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Name"
                />
                <label htmlFor="email" className="text-gray-800 font-bold">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Email"
                />
              </div>
              <button
                type="submit"
                className="mt-8 px-4 py-2 text-white rounded-md bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>

           
            <div className="mt-4 text-gray-600">
              <p>You can also reach us at:</p>
              <p>Phone: (555) 555-5555</p>
              <p>Email: info@yourcompany.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
