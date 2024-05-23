const Card = ({usuario}) => { 
    const {nombre,equipoFavorito} = usuario
  return (
    <div>
        <h4> Hola, {nombre}!</h4>
        <h5> Sabemos que tu equipo favorito es: {equipoFavorito} </h5>
    </div>
  )
};

export default Card