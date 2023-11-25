import React from "react";
const AppContainer = () => {
  const arrExpense = [];
  function addExpense() {
    let nameExp = document.getElementById("nameExp").value;
    let amountExp = document.getElementById("amountExp").value;
    let dateExp = document.getElementById("dateExp").value;
    arrExpense.push({ name: nameExp, amount: amountExp, date: dateExp });
    listExp();
  }
  function listExp() {
    const print = document.getElementById("listExpense");
    print.innerHTML = "";
    arrExpense.forEach((item) => {
      print.innerHTML +=
        item.name + " ---- " + item.amount + " --- " + item.date + "<br>";
    });
    var nameExp = document.getElementById("nameExp");
    nameExp.value = "";
    var amountExp = document.getElementById("amountExp");
    amountExp.value = "";
    var dateExp = document.getElementById("dateExp");
    dateExp.value = "";
  }

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
          <div className="firstFormGroup">
            <label htmlFor="nameExp">Name</label>

            <label htmlFor="amountExp">Amount</label>
            <label htmlFor="dateExp">Date</label>
          </div>
          <div className="secondFormGroup">
            <input
              type="text"
              className="form-control"
              name
              id="nameExp"
              placeholder="Enter name here ..."
            />
            <input
              type="text"
              className="form-control"
              name
              id="amountExp"
              placeholder="Enter amount here ..."
            />
            <input
              type="text"
              className="form-control"
              name
              id="dateExp"
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div className="optionButton">
            <button className="addExp" onClick={() => addExpense()}>
              ADD
            </button>
            <button className="cancelAdd" onClick={closeForm}>
              CANCEL
            </button>
          </div>
        </div>
      </div>
      <div className="listExpense" id="listExpense">
        {/* sometext */}
      </div>
    </div>
  );
};

export default AppContainer;
