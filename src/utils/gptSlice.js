import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptToggleView: false,
  },
  reducers: {
    addToggleGptView: (state) => {
      state.showGptToggleView = !state.showGptToggleView;
    },
  },
});

export const { addToggleGptView } = gptSlice.actions;
export default gptSlice.reducer;
