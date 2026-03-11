import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='menu menu-vertical lg:menu-horizontal h-full bg-cyan-100  rounded-box text-emerald-500 font-bold'>
        <ul>
            <li>
                <NavLink to= "/">Registrar</NavLink>
            </li>

            <li>
                <NavLink to= "/relatorios" >Relatorios</NavLink>
            </li>

            <li>
                <NavLink to= "/comparaoces">Comparações</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default NavBar