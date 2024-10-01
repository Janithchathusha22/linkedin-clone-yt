import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/UserSlice'; // Adjust the path as needed

export const store = configureStore({
  reducer: {
    user: userReducer, // Use the user slice reducer
  },
});
