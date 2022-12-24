import { configureStore } from "@reduxjs/toolkit";
import {
  changeName,
  changePrice,
  searchCar,
  addCars,
  removeCar,
  addCarReducer,
} from "./carSlices/carFormSlice";

const store = configureStore({
  reducer: {
    inputCars: addCarReducer,
  },
});

export { store };
export { changeName, changePrice, searchCar, addCars, removeCar };
