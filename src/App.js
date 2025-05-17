import { Classes } from "./components/Classes";
import "./App.css";
import { useState } from "react";

function App() {
  const Job = (props) => {
    return (
      <div>
        {props.salary} ,{props.position} ,{props.company}
      </div>
    );
  };

  const classes = [
    { name: "html", finished: true },
    { name: "Javascript", finished: false },
    { name: "css", finished: true },
    { name: "bootstrap", finished: true },
    { name: "react", finished: false },
  ];
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Job salary={1111} position="MOdir" company="IT" />
      {classes.map((classe, index) => {
        return (
          <Classes key={index} name={classe.name} finished={classe.finished} />
        );
      })}

      <div>
        <button onClick={() => setCount(count + 1)}>increase</button>
        <button onClick={() => setCount(count - 1)}>decrease</button>
        <button onClick={() => setCount(0)}>set to 0</button>
        <h3>{count}</h3>
      </div>
    </div>
  );
}

export default App;
