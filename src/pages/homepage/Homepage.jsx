import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'

function Homepage() {
  return (
    <div className='main-container'>
      <h1>Bonjour !</h1>
      <button className='button'><Link to='/new-game'>Nouveau jeu</Link></button>
    </div>
  )
}

export default Homepage
