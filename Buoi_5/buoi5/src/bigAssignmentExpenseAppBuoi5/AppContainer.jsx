import React from "react";
const AppContainer = () => {
  const openForm = () => {
    var inputForm = document.getElementById("inputForm");
    var buttonAddNew = document.getElementById("addNewExp");
    inputForm.style.display = "flex";
    buttonAddNew.style.display = "none";
  };
  const closeForm = () => {
    var inputForm = document.getElementById("inputForm");
    var buttonAddNew = document.getElementById("addNewExp");
    inputForm.style.display = "none";
    buttonAddNew.style.display = "block";
  };
  return (
    <div className="container">
      <div className="inputArea">
        <button className="addNewExp" id="addNewExp" onClick={openForm}>
          ADD NEW EXPENSE
        </button>
        <div className="inputForm" id="inputForm">
          <div className="form-group">
            <label htmlFor="nameExp">Name</label>
            <input
              type="text"
              className="form-control"
              name
              id="nameExp"
              placeholder
            />
          </div>
          <div className="form-group">
            <label htmlFor="amountExp">Amount</label>
            <input
              type="text"
              className="form-control"
              name
              id="amountExp"
              placeholder
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateExp">Date</label>
            <input
              type="text"
              className="form-control"
              name
              id="dateExp"
              placeholder
            />
          </div>
          <div className="optionButton">
            <button className="addExp">ADD </button>
            <button className="cancelAdd" onClick={closeForm}>
              CANCEL
            </button>
          </div>
        </div>
      </div>
      <div className="listExpense">{/* sometext */}</div>
    </div>
  );
};

export default AppContainer;
