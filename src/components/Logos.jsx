import React from 'react'
import mmg from '../img/mmgLogo.png'
import pyxis from '../img/pyxis.png'

export const Logos = () => {
  return (
    <div className='container-flex'>
        <div className='logo-container'>
          <img className='logo' src={pyxis} alt="Montag Marketing Logo" />
        </div>
        <div className='logo-container'>
          <img className='logo'  src={mmg} alt="Montag Marketing Logo" />
        </div>
    </div>
  )
}
