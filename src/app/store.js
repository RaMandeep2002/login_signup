import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slice/redux/registration';
import loginuser from '../slice/redux/login';
import otpslice from '../slice/redux/otpslice';
import resendOtpReducer from '../slice/redux/resendotpslice';
import profileReducer from '../slice/redux/profileSlice';

const store = configureStore({
  reducer: {
    userSlice: userSlice,
    loginSlice: loginuser,
    otpslice: otpslice,
    resendOtpReducer: resendOtpReducer,
    profileReducer: profileReducer,
  },
});

export default store;
