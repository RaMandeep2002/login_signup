import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearSignUpData } from '../../slice/redux/registration';
import { loginuser } from '../../slice/redux/login';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const loginState = useSelector((state) => state.loginSlice.data);
  console.log('loginState ======> ', loginState);
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
  console.log(token);

  // useEffect(() => {
  //   dispatch(clearSignUpData());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(clearSignUpData());
    console.log('success');
    if (token?.length > 0) {
      navigate('/index');
    }
  }, [dispatch, token, navigate]);

  const onLoginClick = () => {
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

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          {email.length !== 0 && !isValid && (
            <p style={{ color: 'red', fontSize: '14px' }}>
              Invalid email address
            </p>
          )}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            onClick={onLoginClick}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
