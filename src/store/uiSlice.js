import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    user: 'Federica',
    detailsBg: [],
    selectedCities: ['Turin', 'London', 'Rome'],
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = uiSlice.actions;

export default uiSlice.reducer;
