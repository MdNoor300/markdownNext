import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-pink-500 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-black mb-4">About Us</h1>
      <p className="text-lg text-black max-w-2xl text-center mb-6">
        We are a team of passionate developers dedicated to creating amazing web applications. Our mission is to provide high-quality software solutions that meet the needs of our clients.
      </p>
      <h2 className="text-2xl font-semibold text-black mb-2">Our Values</h2>
      <ul className="list-disc list-inside text-black mb-6">
        <li>Integrity</li>
        <li>Innovation</li>
        <li>Collaboration</li>
        <li>Excellence</li>
      </ul>
      <h2 className="text-2xl font-semibold text-black mb-2">Get in Touch</h2>
      <p className="text-lg text-black text-center">
        If you have any questions or would like to work with us, feel free to reach out!
      </p>
      <a href="mailto:info@example.com" className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
        Contact Us
      </a>
    </div>
  );
};

export default AboutPage;
