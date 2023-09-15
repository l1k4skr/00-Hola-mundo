import React, { useState } from 'react'
import './App.css'



export function FollowCard({_isFollow, formatUsername, name, username}) {
    const [isFollow, setFollow] = useState(_isFollow)
    const handleFollow = () => {
  
      setFollow(!isFollow)
    }
    const following = isFollow 
    ? 'Siguiendo' 
    : 'Seguir'

    const followClass = isFollow 
    ? 'cfs-followCard-aside-button-activate' 
    : 'cfs-followCard-aside-button'
  
    return (
      <article className="cfs-followCard">
        <header className="cfs-followCard-header">
          <img className="cfs-followCard-header-image" src="https://unavatar.io/law" alt="La foto del derecho" />
          <div className="cfs-followCard-header-div">
            <strong className="cfs-followCard-header-div-strong">{ name }</strong>
            <span className="cfs-followCard-header-div-span">{ formatUsername(username) }</span>
          </div>
        </header>
  
        <aside className="cfs-followCard-aside">
          <button className={followClass} onClick={handleFollow}>
          <span className='cfs-followCard-aside-button-text'>{ following }</span>
          <span className='cfs-followCard-aside-button-span'>Dejar de seguir</span>
          </button>
        </aside>
      </article>
    )
  }