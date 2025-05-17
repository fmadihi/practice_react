<<<<<<< HEAD
export const Classes = (props) =>{
    return props.finished==true ? <h2>{props.name}</h2> : ""
=======
export const Classes = (props) =>{
    return props.finished==true && <h2>{props.name}</h2>
>>>>>>> master
   }