import React, { useContext, useEffect, useState } from "react";

const ExpenseContext = React.createContext();

export const ExpenseContextProvider = ({ children }) => {
  const [inc, setInc] = useState([]);
  const [exp, setExp] = useState([]);
  const [inputNumber, setInputNumber] = useState("");
  const [inputText, setinputText] = useState("");
  const [total, setTotal] = useState("");

  const onInputTextChange = (e) => {
    setinputText(e.target.value);
  };
  const onInputNumberChange = (e) => {
    setInputNumber(e.target.value);
  };

  useEffect(() => {
    let totalAmount = [...inc, ...exp];
    console.log("total", totalAmount);
    setTotal(totalAmount);
  }, [inc, exp]);

  const onIncomeExpenseSubmitHandler = (e) => {
    e.preventDefault();
    if (inputNumber === "" || inputText === "") return;
    console.log(inputNumber, inputText);
    if (inputNumber > 0) {
      setInc((prev) => [
        ...prev,
        { id: new Date().getTime(), inputText, inputNumber },
      ]);
    } else {
      setExp((prev) => [
        ...prev,
        { id: new Date().getTime(), inputText, inputNumber },
      ]);
    }
    setInputNumber("");
    setinputText("");
  };

  return (
    <ExpenseContext.Provider
      value={{
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
        total,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ExpenseContext);
};
