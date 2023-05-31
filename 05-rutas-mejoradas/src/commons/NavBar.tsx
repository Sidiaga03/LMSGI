import React from 'react'
import { routes } from './routes'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
  return (
    <>
      <h1 id='sesion'>
      <NavLink to={'/Sesion'}>
        Iniciar sesión en PokeWiki
      </NavLink>
      </h1> 
      <nav className='navbar'>
        {
          routes.map(({ path, name }) => (
            <NavLink
              className="opcion"
              to={path}>
              {name}
            </NavLink>
          ))
        }
      </nav>
    </>
  )
}
