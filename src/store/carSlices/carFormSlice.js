import { createSlice } from "@reduxjs/toolkit";

const addCarSlice = createSlice({
  name: "addCar",
  initialState: {
    name: "",
    cost: 0,
    cars: [],
    searchCar: "",
    totalCost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changePrice(state, action) {
      state.cost = action.payload;
    },
    searchCar(state, action) {
      state.searchCar = action.payload;
    },
    addCars(state, action) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: Math.random(),
      });
      state.name = "";
      state.cost = 0;
    },
    removeCar(state, action) {
      const update = state.cars.filter((car) => {
        return car.id !== action.payload;
      });
      state.cars = update;
    },
    // addTotalAmount(state, action) {},
  },
  //   extraReducers(builder) {
  //     builder.addCase("addCar/addCars", (state, action) => {
  //       state.name = "";
  //       state.cost = 0;
  //     });
  //   },
});

export const addCarReducer = addCarSlice.reducer;
export const { changeName, changePrice, searchCar, addCars, removeCar } =
  addCarSlice.actions;
