import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    laoduser: (state, action) => {},
  },
});
export const { laoduser } = userSlice.actions;
export default userSlice.reducer;
