import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IcarProps {
  value: [];
}

const initialState: IcarProps = {
  value: [],
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
});

export default carsSlice.reducer;
