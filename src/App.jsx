import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hackathons from './components/Hackathons';
import Teammates from './components/Teammates';
import Profile from './components/Profile';
import Chatbot from './components/Chatbot';
import HackathonDetails from './components/HackathonDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex space-x-8">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold text-gray-800">HackathonHub</h1>
                </div>
                <div className="hidden md:flex space-x-8">
                  <Link
                    to="/"
                    className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-700"
                  >
                    Nearby Hackathons
                  </Link>
                  <Link
                    to="/teammates"
                    className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-700"
                  >
                    Available Teammates
                  </Link>
                  <Link
                    to="/profile"
                    className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-700"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/chatbot"
                    className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-700"
                  >
                    Chatbot
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Hackathons />} />
            <Route path="/teammates" element={<Teammates />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/hackathon/:id" element={<HackathonDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;