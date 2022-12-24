import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../../../store";

function ViewCar() {
  const dispatch = useDispatch();

  const cars = useSelector((state) => {
    // return state.inputCars.cars;
    const data = state.inputCars.cars;
    const searchTerm = state.inputCars.searchCar;
    return data.filter((car) => car.name.includes(searchTerm));
  });

  const handleRemove = (car) => {
    const action = removeCar(car.id);
    dispatch(action);
  };

  const renderCars = cars.map((car) => {
    return (
      <div key={car.id}>
        {car.name} - {car.cost}
        <button onClick={() => handleRemove(car)}>X</button>
      </div>
    );
  });

  return <div>{renderCars}</div>;
}

export default ViewCar;
