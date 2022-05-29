import React from 'react'
import { Link ,NavLink } from 'react-router-dom'
import {MdOutlineOtherHouses} from 'react-icons/md'
const Navbar = () => {
    const activeStyle= ' border-b-2 border-green-500'
    const isNotActive = 'hover:text-green-500  transition duration-300'
  return (
    <nav className='flex justify-between  h-14  bg-white items-center shadow-2xl px-10  mx-auto text-gray-500 text-lg font-semibold'>
        <Link to='/'>
        <div className='flex items-center gap-3'>
            <span  className='text-4xl'><MdOutlineOtherHouses/></span>
            <p className=''>Prime Properties</p>
        </div>
        </Link>
        <div className=' md:flex hidden gap-5 '>
            <NavLink to='/' className={({isActive})=> isActive ? activeStyle : isNotActive } style={{height:'3.5rem',display:'flex',alignItems:'center'}}> Home</NavLink>
            <NavLink to='/services' className={({isActive})=> isActive ? activeStyle : isNotActive }  style={{height:'3.5rem',display:'flex',alignItems:'center'}} >Services</NavLink>
            <NavLink to='/about' className={({isActive})=> isActive ? activeStyle : isNotActive }  style={{height:'3.5rem',display:'flex',alignItems:'center'}}>About</NavLink>
            <NavLink to='/contact' className={({isActive})=> isActive ? activeStyle : isNotActive }  style={{height:'3.5rem',display:'flex',alignItems:'center'}}>    Contact us</NavLink>
        </div>
    </nav>
  )
}

export default Navbar