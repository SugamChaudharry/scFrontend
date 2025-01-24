import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiClient, apiMultipartClient } from "../api/axiosInstance";
import { BASE_URL } from "@/constants/BASE_URL";

export const createProfile = createAsyncThunk("createProfile", async (data) => {
  try {
    await apiClient.post(`${BASE_URL}/profile/register`, data);
  } catch (err) {
    console.log(err);
  }
});
export const getProfile = createAsyncThunk("getProfile", async (userId) => {
  try {
    const response = await apiClient.get(`${BASE_URL}/profile/${userId}`);
    return response.data.data;
  } catch (err) { 
    console.log(err);
  }
});

const initialState = {
  profileData: {},
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearProfileState: (state) => {
      state.profileData = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profileData = action.payload;
    })
  },
});

export default profileSlice.reducer;
export const { clearProfileState } = profileSlice.actions;
export const selectProfile = (state) => state.profile.profileData;
