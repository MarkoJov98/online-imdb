import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const middlewareActions = {
  performUserLogin: (_state: any, action: PayloadAction<Partial<User>>) => {},
  performRegisterUser: (_state: any, action: PayloadAction<User>) => {},
  performGetUserProfile: (_state: any, action: PayloadAction<any>) => {},
};


export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {}, // for user object
    userToken, // for storing the JWT
    error: null,
    success: false,
  },
  reducers: {
    logout: (state) => {},
    login: () => {},
    register: () => {},
    setUser: (state, action) => {
      state.user = action.payload;
    },
    getUserProfile: () => {},
    ...middlewareActions,
  },
});

export const {
  logout,
  login,
  register,
  setUser,
  getUserProfile,
  performUserLogin,
  performRegisterUser,
  performGetUserProfile,
} = authSlice.actions;

export default authSlice.reducer;
