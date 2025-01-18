import React from 'react';

const teams = [
  {
    id: 1,
    name: 'CodeCrafters',
    project: 'AI-Powered Health Assistant',
    members: 3,
    maxMembers: 5,
    price: 50,
    skills: ['React', 'Python', 'Machine Learning'],
    description: 'Looking for developers to build an innovative health monitoring system'
  },
  {
    id: 2,
    name: 'DataMinds',
    project: 'Smart City Dashboard',
    members: 2,
    maxMembers: 4,
    price: 30,
    skills: ['Data Science', 'Vue.js', 'Node.js'],
    description: 'Building a real-time dashboard for smart city metrics'
  }
];

function Teams() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Available Teams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div key={team.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900">{team.name}</h3>
            <p className="mt-2 text-gray-600">{team.description}</p>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-500">🎯 Project: {team.project}</p>
              <p className="text-sm text-gray-500">👥 Members: {team.members}/{team.maxMembers}</p>
              <p className="text-sm text-gray-500">💰 Join Price: ${team.price}</p>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Required Skills:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {team.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">
              Join Team (${team.price})
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;