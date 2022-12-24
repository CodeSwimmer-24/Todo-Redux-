import React from "react";
import { useSelector } from "react-redux";

function TotalPrice() {
  const totalPrice = useSelector((state) => {
    const data = state.inputCars.cars;
    const searchTerm = state.inputCars.searchCar;
    const filterCar = data.filter((car) => {
      return data.filter((car) => car.name.includes(searchTerm));
    });
    let cost = 0;
    filterCar.forEach((ele) => {
      cost += ele.cost;
    });
    return cost;
  });
  return <div>TotalPrice - ${totalPrice}</div>;
}

export default TotalPrice;
