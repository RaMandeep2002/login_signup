import { useEffect, useState } from 'react';
import './regsiter.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signeuser } from '../../slice/redux/registration';

function RegisterUser() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isValid, setIsValid] = useState(false);
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Regular expression for basic email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/;
    const isValidEmail = emailRegex.test(newEmail);
    setIsValid(isValidEmail);
  };

  const signupSuccess = useSelector((state) => state.userSlice.data);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const onSignUpClick = () => {
    const payload = {
      username: username,
      email: email,
      password: password,
    };
    dispatch(signeuser(payload));
  };

  useEffect(() => {
    if (signupSuccess !== null) {
      console.log('signupSuccess');
      localStorage.clear();
      localStorage.setItem('token', signupSuccess.token);
      localStorage.setItem('userId', signupSuccess.user._id);
      navigation('/otp');
    } else if (signupSuccess != null) {
      console.log(signupSuccess);
    }
  }, [signupSuccess, navigation]);

  // useEffect(() => {

  // }, [signupSuccess]);

  return (
    // bgimage
    <div className="min-h-screen flex">
      <div className="flex-1 hidden lg:flex items-center justify-center bg-cover bg-center bg-gray-500 bg-opacity-50 bgimage">
        <div className="bg-black bg-opacity-50 p-10 rounded-lg">
          <h2 className="text-4xl font-bold text-white text-center">
            Register Now!
          </h2>
          <p className="text-white text-center mt-4">
            Join us and stay connected. Register with your personal information.
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Register
          </h2>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-700 border-gray-300"
                autoComplete="off"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="off"
                required
                value={email}
                onChange={(e) => handleEmailChange(e)}
                className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
              />
              {email.length !== 0 && !isValid ? (
                <p style={{ color: 'red' }}>Invalid email address</p>
              ) : (
                ''
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="off"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-gray-700 focus:border-gray-700 border-gray-300"
              />
            </div>
            <div>
              <button
                type="submit"
                onClick={() => {
                  onSignUpClick();
                }}
                className="w-full px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
            <div className="text-sm text-center">
              <p className="text-gray-600">
                I You have an account?{' '}
                <button
                  onClick={() => {
                    navigation('/login');
                  }}
                  className="text-indigo-600 hover:underline"
                >
                  Login here
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterUser;
