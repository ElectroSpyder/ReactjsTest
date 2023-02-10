import { useState } from "react"

export function TwitterFollowCardTemp({ children, userName, userNameFormat, initialIsFollowing }) {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  // const idFollowing = state[0] son idem a la anterior
  // const setIsFollowing = state[1]

  const imageSrc = `httpssssss://unavatar.io/${userName}`
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  return (
    <article className='tw-followCard' >
      <header className="tw-followCard-header">
        <img
          className="tw-followCar-avatar" alt="esto" src={imageSrc} />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">
            {userNameFormat(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
        </button>
        <button onClick={() => setIsFollowing(!isFollowing)}>Cambiar estado de App</button>
      </aside>
    </article>
  )
}