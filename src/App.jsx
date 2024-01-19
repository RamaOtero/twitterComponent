import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'

// IMPORTANTE en React para devolver mas de un elemnto sin necesidad de envolverlo en un div
// o utilizar <React.Fragment> usamos la etiqueta vacía (Limpio y facil)

//Si no escribimos una prop el valor que retorna es undefined
//Si dejamos la prop sin darle un valor, se le asigna true

//Podemos pasar una funcion como prop a los nodos/hijos siguientes (formatUserName)

//IMPORTANTE, diferencia entre COMPONENTE y ELEMENTO
//Componente, fabrica de elementos, funcion que devuelve elemento
//Elemento, lo que nos devuelve el componente (LO QUE RENDERIZA REACT)

/* Lo que creamos dentro de un componente ej: 

  <TwitterFollowCard> 
        <h1>Hola</h1>  ESTE ES EL CHILDREN
  </TwitterFollowCard>

  Nosotros dentro del componente podemos traerlo como una prop llamada CHILDREN
*/
export function App() {

    //Esta es la funcion que pasamos como prop
    const formatUserName = (userName) => `@${userName}`

    return (
        <div className='App'>
             
            <TwitterFollowCard formatUserName={formatUserName}  userName="midudev" name="Miguel Angel Duran"/>
            <TwitterFollowCard formatUserName={formatUserName}  userName="ramaotero" name="Ramiro Otero"/>
            <TwitterFollowCard formatUserName={formatUserName}  name="Twitter Elon"/>
            <TwitterFollowCard formatUserName={formatUserName}  userName="tesla" name="Tesla Musk"/>
        </div>
    )
}

//virtualDOM ante los combios lo unico que renderiza es aquello que cambio.


// ESTADOS. STATES, SUPER IMPORTANTE PARA REACT

/* 







*/