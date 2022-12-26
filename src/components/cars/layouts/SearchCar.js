import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCar } from "../../../store";

function SearchCar() {
  const dispatch = useDispatch();
  const search = useSelector((state) => {
    return state.inputCars.searchCar;
  });

  const handleChange = (e) => {
    const action = searchCar(e.target.value);
    dispatch(action);
  };

  return (
    <div>
      <input type="text" name={search} onChange={handleChange} />
    </div>
  );
}

export default SearchCar;
