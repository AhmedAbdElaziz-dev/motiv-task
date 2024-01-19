import { createSlice } from '@reduxjs/toolkit';

export interface IcarsProps {
  cars: [];
}
const initialState: IcarsProps = {
  cars: [],
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setCars(state, action) {
      state.cars = action.payload;
    },
  },
});

export const { setCars } = carsSlice.actions;

export default carsSlice.reducer;

export const selectCars = (state: { cars: IcarsProps }) => state.cars.cars;
