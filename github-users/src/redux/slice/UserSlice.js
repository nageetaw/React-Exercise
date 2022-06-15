import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiCallHandler from "../../components/apiCalls/apiCallHandler";


export const loadAllUsers = createAsyncThunk(`user/getAllUsers`, async () => {
  const response = await apiCallHandler(
    "https://api.github.com/users",
    null,
    "GET",
    "JSON"
  );
  console.log(response);
  return response;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    allUsers: [],
    isUsersLoading: false,
    hasUsersLoadingError: false,
  },
  reducers: {},
  extraReducers: {
    [loadAllUsers.pending]: (state, action) => {
      state.isUsersLoading = true;
      state.hasUsersLoadingError = false;
    },
    [loadAllUsers.fulfilled]: (state, action) => {
      state.allUsers = action.payload;
      state.isUsersLoading = false;
      state.hasUsersLoadingError = false;
    },
    [loadAllUsers.rejected]: (state, action) => {
      state.isUsersLoading = false;
      state.hasUsersLoadingError = true;
    },
  },
});

//--------------selectors
export const selectAllUsers = (state) => state.user.allUsers;

//--------------reducer
export default userSlice.reducer;
