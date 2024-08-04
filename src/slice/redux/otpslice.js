import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const optAuth = createAsyncThunk('otp', async (payload) => {
  try {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(
      'http://localhost:5000/auth/verify-otp',
      payload,
      config
    );
    return response.data;
  } catch (error) {
    console.log('Error ===> ', error.massage);
    throw error.response.data;
  }
});

const otpSlice = createSlice({
  name: 'otp',

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearOtpdata: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(optAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(optAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(optAuth.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearOtpdata } = otpSlice.actions;

export default otpSlice.reducer;
