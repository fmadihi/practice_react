<<<<<<< HEAD
import {Classes} from "./components/Classes";
import "./App.css";
=======
import { Classes } from "./components/Classes";
import "./App.css";
import { useState } from "react";
>>>>>>> master

function App() {
  const Job = (props) => {
    return (
      <div>
<<<<<<< HEAD
        {props.salary} ,
        {props.position} ,
        {props.company}
      </div> 
=======
        {props.salary} ,{props.position} ,{props.company}
      </div>
>>>>>>> master
    );
  };

  const classes = [
<<<<<<< HEAD
    {name: "html", finished: true},
    {name: "Javascript", finished: false},
    {name: "css", finished: true},
    {name: "bootstrap", finished: true},
    {name: "react", finished: false},
  ];

  return (
    <div className="App">
      <Job salary={1111} position="MOdir" company="IT" />
      {classes.map((classe,index)=>{
        return <Classes key={index} name={classe.name} finished={classe.finished} />
      })} 
      <h1>gyi</h1>
=======
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
>>>>>>> master
    </div>
  );
}

<<<<<<< HEAD
export default App; 
=======
export default App;
>>>>>>> master
