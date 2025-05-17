import {Classes} from "./components/Classes";
import "./App.css";

function App() {
  const Job = (props) => {
    return (
      <div>
        {props.salary} ,
        {props.position} ,
        {props.company}
      </div> 
    );
  };

  const classes = [
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
    </div>
  );
}

export default App; 
