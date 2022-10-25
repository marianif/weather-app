import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './uiSlice';
import userSlice from './userSlice';
import forecastSlice from './forecastSlice';

export const store = configureStore({
  reducer: {
    ui: uiSlice,
    user: userSlice,
    forecasts: forecastSlice,
  },
});
