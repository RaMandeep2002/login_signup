import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slice/redux/registration';
import loginuser from '../slice/redux/login';

const store = configureStore({
  reducer: {
    userSlice: userSlice,
    loginSlice: loginuser,
  },
});

export default store;
