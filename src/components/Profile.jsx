import React from 'react';

function Profile() {
  const profile = {
    name: 'John Doe',
    email: 'john@example.com',
    skills: ['JavaScript', 'React', 'Node.js', 'Python'],
    bio: 'Full-stack developer passionate about building innovative solutions',
    experience: '3 years',
    hackathonsParticipated: 5,
    currentTeam: 'CodeCrafters'
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-2xl text-gray-600">{profile.name.charAt(0)}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
              <p className="text-gray-600">{profile.email}</p>
            </div>
          </div>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Bio</h3>
              <p className="mt-2 text-gray-600">{profile.bio}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500">Experience</h4>
                <p className="mt-1 text-lg font-semibold text-gray-900">{profile.experience}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500">Hackathons Participated</h4>
                <p className="mt-1 text-lg font-semibold text-gray-900">{profile.hackathonsParticipated}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Current Team</h3>
              <p className="mt-2 text-gray-600">{profile.currentTeam}</p>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;