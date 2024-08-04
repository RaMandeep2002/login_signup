// import React from 'react';
import { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import './otpcss.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearOtpdata, optAuth } from '../../slice/redux/otpslice';
import { resendOtpApi } from '../../slice/redux/resendotpslice';
// import { clearResendData, resendOtpApi } from "../../../redux/resendOtpSlice";

function OtpPage() {
  const [otp, setOtp] = useState('');
  const signupSuccess = useSelector((state) => state.userSlice.data);
  console.log('signupSuccess ====> ', signupSuccess);
  console.log('signupSuccess user ====> ', signupSuccess.user.email);
  // const resendOtpResponse = useSelector((state) => state.resendOtpReducer.data);
  // const loginState = useSelector((state) => state.loginSlice.data);
  const otpSuccess = useSelector((state) => state.otpslice.data);
  console.log('otpSuccess ===> ', otpSuccess);
  console.log('otpSuccess ====> ', otpSuccess);

  const userId = localStorage.getItem('userId');
  console.log('userid ====> ', userId);

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const onOtpClick = () => {
    if (otp.length < 6) {
      alert('Please Enter Vaild otp!!');
    } else {
      const email = signupSuccess && signupSuccess.user.email;
      // const email = signupSuccess && signupSuccess.data;
      console.log('email ===> ', email);
      const payload = {
        otp: otp,
        email: email,
      };
      dispatch(optAuth(payload));
    }
  };

  // const onResendClick = () => {

  // };

  // useEffect(() => {
  //   return () => {
  //     dispatch(clearOtpData());
  //     dispatch(clearResendData());
  //     dispatch(clearSponsorData());
  //   };
  // }, []);

  useEffect(() => {
    if (otpSuccess != null && otpSuccess.status == 1) {
      localStorage.clear();
      dispatch(clearOtpdata());
      navigation('/login');
    } else if (otpSuccess != null) {
      alert(otpSuccess.message);
    }
  }, [otpSuccess]);

  const onResendOtpClick = () =>{
    const payload = {
      email: signupSuccess && signupSuccess.user.email,
    };
    console.log('Payload ====> ', payload);
    dispatch(resendOtpApi(payload));
  }
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 hidden lg:flex items-center justify-center bg-cover bg-center bg-gray-500 bg-opacity-50 bgimage">
        {/* <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center space-y-4">
          <h2 className="text-4xl font-bold text-white">Welcome Back!</h2>
          <p className="text-white">
            Join us and stay connected. Register with your personal information.
          </p>
        </div> */}
      </div>
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 space-y-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 font-otpFont">
            OTP Verification
          </h2>
          <p className="text-center text-gray-600">
            Enter the 6-digit code we sent to your email.
          </p>
          <div className="space-y-6">
            <div>
              <OtpInput
                containerStyle="flex justify-center space-x-3 mt-5"
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderInput={(props) => (
                  <input
                    type="number"
                    {...props}
                    className="w-12 h-12 text-center bg-gray-200 text-gray-900 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 otp-input"
                  />
                )}
              />
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  onOtpClick();
                }}
                className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              Didn’t receive the code?{' '}
              <button
                onClick={() => {
                  onResendOtpClick();
                }}
              className="text-indigo-600 hover:underline">
                Resend
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpPage;
