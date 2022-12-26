import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changePrice, addCars } from "../../../store";

function InputCar() {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return {
      name: state.inputCars.name,
      cost: state.inputCars.cost,
    };
  });
  const handleChangeName = (event) => {
    const action = changeName(event.target.value);
    dispatch(action);
  };

  const handleChangeCost = (event) => {
    const action = changePrice(parseInt(event.target.value));
    dispatch(action);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const action = addCars({
      name,
      cost,
    });
    dispatch(action);
  };
  return (
    <div>
      <input type="text" value={name} onChange={handleChangeName} />
      <input type="number" value={cost} onChange={handleChangeCost} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default InputCar;
