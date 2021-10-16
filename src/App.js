
import './App.css';
import React,{useState} from 'react';

function App() {

  let myStorage =  window.localStorage;
  const [nombre,setNombre] = useState(obtenerNombre());



  function guardarNombre(event){
    event.preventDefault();
    const nom = event.target.inpNombre.value;
    setNombre(nom);
    myStorage.setItem('nombre',nom);
  }


  function obtenerNombre(){
    return myStorage.getItem('nombre');
  } 


  return(
    <fieldset className="App">
      <form onSubmit={guardarNombre}>
        <label>Nombre: </label>

        <input type="text" id="inpNombre" />
      
        <button type="submit">Submit</button>
        <p>Hello: {nombre ? nombre : ""}</p>
      </form>
    </fieldset>
  );
}

export default App;
