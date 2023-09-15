import { useState } from 'react'
import { FollowCard } from './components/followCard'

const users = [
  {
    name: "Andres",
    username: "l1k4skr",
    isFollow: false
  },
  {
    name: "Law",
    username: "law",
    isFollow: false
  },
  {
    name: "Rabbit",
    username: "B-rabbit",
    isFollow: false
  }, {
    name: "Big Boss",
    username: "big_boss",
    isFollow: false
  },
]



const addAt = (username) => {
  return `@${username}`
}


export function App() {
  const [count, setcount] = useState(0)
  return (
    <section className="cfs-app">
    {
    users.map((user, index) => {
        const {name, username, isFollow} = user
        return (
        <FollowCard
          key={index}
          name={name}
          username={username}
          _isFollow={isFollow} 
          formatUsername={addAt}
        />
      ) 
    })
    }
    <button onClick={() => setcount(count + 1)}>{count}</button>
    </section>
    



  )
}
