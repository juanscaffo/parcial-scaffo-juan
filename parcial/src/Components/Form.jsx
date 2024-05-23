import { useState } from "react";
import Card from "./Card";
import Error from "./Error";


const Form = () => {
    const [usuario, setUsuario] = useState ({
        nombre: "",
        equipoFavorito: ""
    });

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(usuario.nombre.length > 2 && usuario.nombre.indexOf(' ') === -1 && usuario.equipoFavorito.length > 5){
          setShow(true) 
          setError(false) 
        }else{
          setError(true)
          setShow(false) 
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" value = {usuario.nombre} onChange={(event) => setUsuario({...usuario,nombre: event.target.value})} /> 
        <label>Equipo Favorito</label>
        <input type="text" value={usuario.equipoFavorito} onChange={(event) => setUsuario({...usuario,equipoFavorito: event.target.value})} />
        <button>Enviar</button>
      </form>
      {show ? <Card usuario={usuario}/> : null } 
      {error ? <Error/>: null} 
    </div>
  )
}

export default Form