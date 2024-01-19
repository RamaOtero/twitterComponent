import React from 'react'
import ReactDOM from 'react-dom/client'

//React esta pensado para crear interfaces de usuario, tambien tenemos Ract Native donde esta mas guiado a la creacion de aplicaciones


// Muy importante recordar que el codigo que escribimos es JS, por ende son funciones los componentes
// a los cuales les pedimos que rendericen cosas. Nunca voy a poder remnderizar HTML directamente.
// Buena practica para creacion de componentes
// Importante los componentes escritos en Pascal Case
const Button = ({text}) => {

    // Espacio para mas codigo dentro del codigo del boton.

return (
  <button>
    {text}
  </button>
)
}


const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Button text="Hola"/>
  </React.Fragment>
)
