import { useState } from 'react' //HOOKS mas funcionalidad a componentes


//Lo mas importante de un componente reutilizable es utilizar las props

// !!!! Cuando en una prop le queremos poner un valor por defecto se le da ='ej'

export function TwitterFollowCard({formatUserName, userName = 'unknown', name }) {
    

    //Usamos el hook useState, 
    const [isFollowing, setIsFollowing] = useState(false);

    //utilizamos tamplate strings `` alt + 96, para que evalúe dichp string y podamos inyectarle la prop
    // const imageSrc = `https://unavatar.io/${userName}/`

    //Ternaria, lo mismo que un if (sugarSyntax?)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    //Funcion para darle el valor al hook, nos devuelve lo contrario
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }


    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' 
                src={`https://unavatar.io/${userName}/`} 
                alt="avatar" />

                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
