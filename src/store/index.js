import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increase(state) {
      state.counter += 2;
    },
    set(state, action) {
      const { value } = action.payload;
      state.counter = value;
    },
  },
});

export const store = configureStore({
  reducer: counterSlice.reducer,
});

export const actions = counterSlice.actions;
