import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const signeuser = createAsyncThunk('signuser', async (payload) => {
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(
      'http://localhost:5000/user/signup',
      payload,
      config,
      {
        withCredentials: true,
      }
    );
    console.log('response ===> ', response.data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    data: null,
  },

  reducers: {
    clearSignUpData: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signeuser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signeuser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(signeuser.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearSignUpData } = userSlice.actions;

export default userSlice.reducer;
