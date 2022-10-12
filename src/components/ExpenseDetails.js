import React from "react";
import { useGlobalContext } from "./Context";

const ExpenseDetails = () => {
  const { inc, exp, total } = useGlobalContext();
  let totalAmount;
  if (total.length > 0) {
    totalAmount = total.reduce((acc, curr) => {
      console.log(parseInt(acc), parseInt(curr.inputNumber));
      return acc + parseInt(curr.inputNumber);
    }, 0);
  }
  return (
    <div className="expense-details">
      <div className="inc-exp-list">
        {inc.length > 0 &&
          inc.map((inco, index) => {
            return (
              <div className="list-items" key={index}>
                <span className="green">{inco.inputText}</span>
                <span className="green">{inco.inputNumber}</span>
              </div>
            );
          })}
        {exp.length > 0 &&
          exp.map((expe, index) => {
            return (
              <div className="list-items" key={index}>
                <span className="orange">{expe.inputText}</span>
                <span className="orange">{expe.inputNumber}</span>
              </div>
            );
          })}
      </div>
      <h4>Balance:{totalAmount}</h4>
    </div>
  );
};

export default ExpenseDetails;
