import React from 'react';
import { useNavigate } from 'react-router-dom';

const hackathons = [
  {
    id: 1,
    title: 'TechCrunch Hackathon 2024',
    date: 'March 15-17, 2024',
    location: 'San Francisco, CA',
    description: 'Join us for 48 hours of coding, innovation, and fun!',
    prize: '$10,000',
    image: 'https://placehold.co/600x400'
  },
  {
    id: 2,
    title: 'AI Innovation Challenge',
    date: 'April 1-3, 2024',
    location: 'Virtual',
    description: 'Build the next generation of AI-powered applications',
    prize: '$5,000',
    image: 'https://placehold.co/600x400'
  }
];

function Hackathons() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Nearby Hackathons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hackathons.map((hackathon) => (
          <div key={hackathon.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={hackathon.image} alt={hackathon.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{hackathon.title}</h3>
              <p className="mt-2 text-gray-600">{hackathon.description}</p>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-500">📅 {hackathon.date}</p>
                <p className="text-sm text-gray-500">📍 {hackathon.location}</p>
                <p className="text-sm text-gray-500">🏆 Prize: {hackathon.prize}</p>
              </div>
              <button
                onClick={() => navigate(`/hackathon/${hackathon.id}`)}
                className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hackathons;