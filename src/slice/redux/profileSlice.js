import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const profileapi = createAsyncThunk('profileApi', async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/user/profile/${userId}`
    );
    return response.data;
  } catch (error) {
    console.log('Error ===> ', error.message);
    throw error.message.data;
  }
});

const profileSlice = createSlice({
  name: 'profileReducer',

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearProfileData: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(profileapi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(profileapi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(profileapi.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearProfileData } = profileSlice.actions;

export default profileSlice.reducer;
