import React from 'react';

const teamRequests = [
  {
    id: 1,
    teamName: 'TechInnovators',
    domain: 'Frontend Development',
    requiredSkills: ['React', 'TypeScript', 'UI/UX'],
    projectDescription: 'Building a modern web application for healthcare',
    contactEmail: 'team@techinnovators.com'
  },
  {
    id: 2,
    teamName: 'DataPioneers',
    domain: 'Data Science',
    requiredSkills: ['Python', 'Machine Learning', 'Data Visualization'],
    projectDescription: 'Creating predictive analytics platform',
    contactEmail: 'join@datapioneers.com'
  }
];

function Teammates() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Available Teammates</h2>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Post Team Request
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamRequests.map((request) => (
          <div key={request.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900">{request.teamName}</h3>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-500">🎯 Domain: {request.domain}</p>
              <p className="text-sm text-gray-600">{request.projectDescription}</p>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Required Skills:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {request.requiredSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-500">✉️ Contact: {request.contactEmail}</p>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
              Apply to Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teammates;