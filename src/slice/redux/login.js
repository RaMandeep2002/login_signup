import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginuser = createAsyncThunk('loginuser', async (payload) => {
  try {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(
      'http://localhost:5000/user/signin',
      payload,
      config
    );
    console.log('response ===> ', response.data);
    return response.data;
  } catch (error) {
    console.log('Error ===> ', error.massage);
    throw error.response.data;
  }
});

const loginSlice = createSlice({
  name: 'login',

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearData: (state) => {
      // Reset the data property to an empty array
      state.data = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginuser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginuser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(loginuser.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearData } = loginSlice.reducer;
export default loginSlice.reducer;
