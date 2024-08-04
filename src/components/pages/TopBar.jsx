import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearSignUpData } from '../../slice/redux/registration';
// import { Menu } from '@headlessui/react';
import { useState } from 'react';

function TopBar() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const token = localStorage.getItem('token');

  const logout = () => {
    localStorage.clear();
    dispatch(clearSignUpData());

    setTimeout(() => {
      navigation('/login');
    }, 500);
  };

  return (
    <div className="bg-white shadow-md">
      <div className="py-6 px-10 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold text-gray-700">Figo</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-blue-600 font-semibold">
            Home
          </a>
          <a href="#" className="text-gray-700">
            Classes
          </a>
          <a href="#" className="text-gray-700">
            Plans
          </a>
          <a href="#" className="text-gray-700">
            About Us
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          {token ? (
            <button
              className="bg-red-500 w-[116px] h-[42px] text-white px-4 py-2 rounded"
              onClick={() => logout()}
            >
              Logout
            </button>
          ) : (
            <button
              className="w-[116px] h-[42px] text-[#489CDA] px-4 py-2 rounded-full border-2 border-[#489CDA]"
              onClick={() => navigation('/login')}
            >
              Login
            </button>
          )}

          <button
            className="bg-[#489CDA] w-[116px] h-[42px] text-white px-4 py-2 rounded-full border-2 border-[#489CDA]"
            onClick={() => navigation('/profile')}
          >
            Profile
          </button>
        </div>
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 px-4 pb-4">
            <a href="#" className="text-blue-600 font-semibold">
              Home
            </a>
            <a href="#" className="text-gray-700">
              Classes
            </a>
            <a href="#" className="text-gray-700">
              Plans
            </a>
            <a href="#" className="text-gray-700">
              About Us
            </a>
            {token ? (
              <button
                className="bg-red-500 w-full text-white px-4 py-2 rounded"
                onClick={() => logout()}
              >
                Logout
              </button>
            ) : (
              <button
                className="w-full text-[#489CDA] px-4 py-2 rounded-full border-2 border-[#489CDA]"
                onClick={() => navigation('/login')}
              >
                Login
              </button>
            )}
            <button
              className="bg-[#489CDA] w-full text-white px-4 py-2 rounded-full border-2 border-[#489CDA]"
              onClick={() => navigation('/profile')}
            >
              Profile
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}

export default TopBar;
