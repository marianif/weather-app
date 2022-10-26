import { createSlice } from '@reduxjs/toolkit';
import { gradients } from '../theme';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    detailsBg: null,
  },
  reducers: {
    setDetailsTheme: (state, { payload }) => {
      state.detailsBg = gradients?.[payload] || gradients.default;
    },
  },
});

export const { setDetailsTheme, setScreenRatio } = uiSlice.actions;

export default uiSlice.reducer;
