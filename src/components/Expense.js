import React, { useState } from "react";
import { useGlobalContext } from "./Context";

const Expense = () => {
  const {
    inc,
    setInc,
    exp,
    setExp,
    inputNumber,
    setInputNumber,
    inputText,
    setinputText,
    onInputTextChange,
    onInputNumberChange,
    onIncomeExpenseSubmitHandler,
  } = useGlobalContext();

  return (
    <form onSubmit={onIncomeExpenseSubmitHandler}>
      <div className="inputs">
        <input
          type="text"
          placeholder="Add income/expense for item"
          value={inputText}
          onChange={onInputTextChange}
        />
        <input
          type="number"
          placeholder="+income/-expense"
          value={inputNumber}
          onChange={onInputNumberChange}
        />
      </div>

      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default Expense;
