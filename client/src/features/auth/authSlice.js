import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";

// Helpers để persist token trong localStorage
const loadAuthFromStorage = () => {
  try {
    const token = localStorage.getItem("wd_token");
    const user = JSON.parse(localStorage.getItem("wd_user") || "null");
    return { token, user };
  } catch {
    return { token: null, user: null };
  }
};

const { token: savedToken, user: savedUser } = loadAuthFromStorage();

const initialState = {
  user: savedUser,
  token: savedToken,
  isAuthenticated: !!savedToken,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("wd_token");
      localStorage.removeItem("wd_user");
    },
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      localStorage.setItem("wd_token", token);
      localStorage.setItem("wd_user", JSON.stringify(user));
    },
  },
  extraReducers: (builder) => {
    // Khi login thành công → lưu token & user vào state
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { token, user } = payload.data;
        state.token = token;
        state.user = user;
        state.isAuthenticated = true;
        localStorage.setItem("wd_token", token);
        localStorage.setItem("wd_user", JSON.stringify(user));
      },
    );

    // Khi register thành công → lưu token & user vào state (nếu backend trả về)
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        if (payload?.data?.token) {
          const { token, user } = payload.data;
          state.token = token;
          state.user = user;
          state.isAuthenticated = true;
          localStorage.setItem("wd_token", token);
          localStorage.setItem("wd_user", JSON.stringify(user));
        }
      },
    );
  },
});

export const { logout, setCredentials } = authSlice.actions;

// Selectors
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
