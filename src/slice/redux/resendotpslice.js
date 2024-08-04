import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const resendOtpApi = createAsyncThunk('resendOtpApi', async (payload) => {
  try {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(
      'http://localhost:5000/auth/resendOtp',
      payload,
      config
    );
    return response.data;
  } catch (error) {
    console.log('Error ===> ', error.massage);
    throw error.response.data;
  }
});

const resendOtpSlice = createSlice({
  name: 'resendOtpReducer',

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearResendData: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(resendOtpApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resendOtpApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(resendOtpApi.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearOtpdata } = resendOtpSlice.actions;

export default resendOtpSlice.reducer;
