import React from "react";
import InputCar from "./components/cars/layouts/InputCar";
import SearchCar from "./components/cars/layouts/SearchCar";
import TotalPrice from "./components/cars/layouts/TotalPrice";
import ViewCar from "./components/cars/layouts/ViewCar";

function Cars() {
  return (
    <div>
      <InputCar />
      <SearchCar />
      <ViewCar />
      <TotalPrice />
    </div>
  );
}

export default Cars;
