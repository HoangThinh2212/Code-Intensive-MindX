import React, { useState } from "react";

const AppContainer2 = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const changeFirstNameHandler = (event) => {
    console.log(event.target.value);
    setPerson({ ...person, firstName: event.target.value });
  };

  const changeLastNameHandler = (event) => {
    console.log(event.target.value);
    setPerson({ ...person, lastName: event.target.value });
  };

  const changeEmailHandler = (event) => {
    console.log(event.target.value);
    setPerson({ ...person, email: event.target.value });
  };

  return (
    <div>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          value={person.firstName}
          id="firstName"
          onChange={(event) => changeFirstNameHandler(event)}
        ></input>
      </div>

      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          value={person.lastName}
          id="lastName"
          onChange={(event) => changeLastNameHandler(event)}
        ></input>
      </div>

      <div>
        <label htmlFor="emailUser">Email: </label>
        <input
          type="text"
          value={person.email}
          id="emailUser"
          onChange={(event) => changeEmailHandler(event)}
        ></input>
      </div>

      <div>
        {person.firstName} {person.lastName} {person.email}
      </div>
    </div>
  );
};

export default AppContainer2;
