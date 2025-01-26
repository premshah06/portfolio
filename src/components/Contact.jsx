import React from 'react';
import cert1 from '../assests/cert1.jpg';
import cert2 from '../assests/cert2.jpg';
import cert3 from '../assests/cert.jpg';

const certificatesData = [
  {
    title: "Certificate of Merit, CHARUSAT",
    description:
      "Certificate for achieving 2nd Rank in 1st Semester in the Computer Engineering department of DEPSTAR",
    rank: "2nd",
    image: cert1, // Add image path here
  },
  {
    title: "Certificate of Merit, CHARUSAT",
    description:
      "Certificate for achieving 2nd Rank in 3rd Semester in the Computer Engineering department of DEPSTAR",
    rank: "2nd",
    image: cert2, // Add image path here
  },
  {
    title: "Certificate of Merit, CHARUSAT",
    description:
      "Certificate for achieving 3rd Rank in 5th Semester in the Computer Engineering department of DEPSTAR",
    rank: "3rd",
    image: cert3, // Add image path here
  },
  // Add more certificates as needed
];

const Certificates = () => {
  return (
    <div
      id="certificates"
      className="w-full min-h-screen bg-gradient-to-b from-[#f4f1ea] to-[#e1ded6] text-[#2e2d2b] p-4 flex flex-col items-center md:pt-20"
    >
      {/* Header */}
      <h2 className="text-4xl font-bold text-gray-800 border-b-4 border-pink-600 pb-4 mb-8">
        Certificates
      </h2>

      {/* Certificates Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 w-full">
        {certificatesData.map((certificate, index) => (
          <div
            key={index}
            className="relative bg-[#1a1e2e] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            {/* Certificate Image */}
            <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: `url(${certificate.image})` }}>
              {/* Overlay for Rank Badge */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold">
                {certificate.rank}
              </div>
            </div>

            {/* Certificate Title and Description */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-300 mb-2">{certificate.title}</h3>
              <p className="text-gray-400">{certificate.description}</p>
            </div>

            {/* Hover Effect: Shadow and Scale */}
            <div className="absolute inset-0 bg-[#00000030] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
