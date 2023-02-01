export function TwitterFollowCard({userName, name, isFollowing}){
  const imageSrc = `https://unavatar.io/${userName}`
  return(
    <article className='tw-followCard' >
      <header className="tw-followCard-header">
      <img className="tw-followCar-avatar" alt="esto" src={imageSrc}  />
      <div className="tw-followCard-info">
        <strong>Señor de Amarillo</strong>
        <span>{name}</span>
      </div>
      </header>
      <aside>
        <button>Seguir</button>
      </aside>
    </article>
  )
}