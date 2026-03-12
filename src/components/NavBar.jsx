import {GiArchiveRegister} from "react-icons/gi"
import { MdStackedBarChart } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import { GiPayMoney } from "react-icons/gi";

const NavBar = () => {
  return (
    <div className='menu flex flex-col lg:menu-horizontal h-full bg-cyan-100  rounded-box text-emerald-500 font-bold'>
        
            <div className="flex justify-center border-b m-0 p-0">

                <GiPayMoney className="w-20 h-20 flex"/>
            </div>
        
        
        <ul>
            <li>
                <NavLink to= "/" className= "m-0 textarea-lg">
                <GiArchiveRegister className="w-5 m-0 h-10 text-emerald-500"/>
                Registrar
                </NavLink>
            </li>

            <li>
                <NavLink to= "/relatorios" className= "textarea-lg" >
                    <FaChartBar  className="w-5 m-0 h-10"/>
                    Relatorios
                </NavLink>
            </li>

            <li>
                <NavLink to= "/comparaoces" className="textarea-lg">
                    <MdStackedBarChart className="W-5 m-0 h-10"/>
                    Comparações
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default NavBar