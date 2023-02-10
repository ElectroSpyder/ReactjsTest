import { useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName:'PedroReneG',
    name:'Pedro',
    isFollowing : true
  },
  {
    userName:'AbelCristian',
    name:'Abel',
    isFollowing : false
  },
  {
    userName:'NelsonB',
    name:'Nelson',
    isFollowing : true
  },
  {
    userName:'SergioM',
    name:'Sergh',
    isFollowing : true
  },
  {
    userName:'G',
    name:'Griselda',
    isFollowing : false
  }
]

export function App(){
  return(
    <section className="App">
      {
        users.map(user =>{
          const {userName, name, isFollowing} = user
          return(
            <TwitterFollowCard
             key={userName}
              userName={userName}
              initialIsFollowing = {isFollowing}>
                {name}
              </TwitterFollowCard>
          )

        })
      }
    </section>
  )
}
