import "./App.css";
import { Fragment } from "react";
import Input from "./TaskManagement/Input";
import Task from "./TaskManagement/Task";
import CountTask from "./TaskManagement/CountTask";
function App() {
  return (
    <Fragment>
      <Input />
      <Task />
      <CountTask />
    </Fragment>
  );
}

export default App;
