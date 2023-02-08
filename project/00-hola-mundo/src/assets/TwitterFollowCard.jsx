import { useState } from "react"
export function TwitterFollowCard({userName, userNameFormat}){
  
  const [isFollowing, setIsFollowing] = useState(false)
  // const idFollowing = state[0] son idem a la anterior
  // const setIsFollowing = state[1]

  const imageSrc = `https://unavatar.io/${userName}`  
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing 
  ? 'tw-followCard-button is-following'
  : 'tw-followCard-button'
  
  const handleClick = ()=>{
    setIsFollowing(!isFollowing)
  }
  return(
    <article className='tw-followCard' >
      <header className="tw-followCard-header">
      <img 
        className="tw-followCar-avatar" alt="esto" src={imageSrc}  />
      <div className="tw-followCard-info">
        <strong></strong>
        <span className="tw-followCard-infoUserName">{userNameFormat(userName)}</span>
      </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>{text}</button>
      </aside>
    </article>
  )
}