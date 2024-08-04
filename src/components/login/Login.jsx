import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearSignUpData } from '../../slice/redux/registration';
import { loginuser } from '../../slice/redux/login';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const loginState = useSelector((state) => state.loginSlice.data);
  // console.log('loginState ======> ', loginState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Regular expression for basic email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(newEmail);
    setIsValid(isValidEmail);
  };

  const token = localStorage.getItem('token');

  useEffect(() => {
    dispatch(clearSignUpData());
    // console.log('success');
    if (token?.length > 0) {
      navigate('/HomePage');
    }
  }, [dispatch, token, navigate]);

  const onLoginClick = () => {
    // e.preventDefault();
    if (email.length === 0) {
      alert('Please enter email!');
    } else if (password.length === 0) {
      alert('Please enter password');
    } else {
      const payload = {
        email: email,
        password: password,
      };
      dispatch(loginuser(payload));
    }
  };

  useEffect(() => {
    if (loginState != null) {
      localStorage.clear();
      localStorage.setItem('token', loginState.token);
      localStorage.setItem('userId', loginState.exstinguser._id);
      navigate('/index');
    }
  }, [loginState, navigate]);

  const handlePasswordVisibilityToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 hidden lg:flex items-center justify-center bg-cover bg-center bg-gray-500 bg-opacity-50 bgimage">
        {/* Add any additional background elements or styling here */}
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-6">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Login
          </h2>
          <div className="space-y-6">
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
                required
                value={email}
                onChange={handleEmailChange}
                className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
              />
              {email.length !== 0 && !isValid ? (
                <p style={{ color: '#274c77' }}>Invalid email address</p>
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
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={isPasswordVisible ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-gray-700 focus:border-gray-700 border-gray-300"
                />
                <button
                  type="button"
                  onClick={handlePasswordVisibilityToggle}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                >
                  {isPasswordVisible ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember Me
                </label>
              </div>
              <div className="text-sm">
                <button
                  onClick={() => navigate('/forgot-password')}
                  className="font-medium text-[#274c77] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={onLoginClick}
                className="w-full px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
            <div className="text-sm text-center">
              <p className="text-gray-600">
                Don&apos;t have an account?
                <button
                  onClick={() => navigate('/register')}
                  className="ml-1 text-[#274c77]-800 hover:underline"
                >
                  Register here
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
