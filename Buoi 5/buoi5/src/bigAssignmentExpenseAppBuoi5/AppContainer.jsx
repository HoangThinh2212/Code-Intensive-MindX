import React from "react";
const AppContainer = () => {
  const addNewExp = () => {
    console.log("hello");
  };
  return (
    <div className="container">
      <div className="inputArea">
        <button className="addExp" onClick={addNewExp}>
          ADD NEW EXPENSE
        </button>
      </div>
      <div className="listExpense">{/* sometext */}</div>
    </div>
  );
};

export default AppContainer;
