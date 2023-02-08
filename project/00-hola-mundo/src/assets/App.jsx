import { TwitterFollowCard } from "./TwitterFollowCard";

export function App(){
  const userNameFormat = (userName) => `@${userName}`
  
  return (
    <section className="App">
        <TwitterFollowCard
        userNameFormat={userNameFormat}
        isFollowing
        userName="Pedro" 
        name="René" />

        <TwitterFollowCard
        userNameFormat={userNameFormat} 
        isFollowing={false} 
        userName="Patricia" 
        name="Julieta" />
    </section>
  )
}