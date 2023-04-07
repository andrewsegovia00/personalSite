import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import {styles} from"../styles.js"
import { logo, menu, close } from "../assets"
import { navLinks } from '../constants'


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false)
  
  const handleMenuClick = (id) => {
    setActive(id)
    setToggle(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
  return (
   <nav className={`${styles.paddingX} fixed w-full flex items-center py-3.5 top-0 z-20 bg-primary`}>
   <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
    <Link 
    to="/"
    className="flex items-center gap-2"
    onClick={() => {
      setActive("");
      window.scrollTo(0, 0);
      }}
    >
      <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
      <p className='text-white text-[18px] font-bold cursor-pointera pr-5'><span className="sm:block hidden">Andrew Segovia</span></p>
    </Link>
    <ul className='list-none hidden sm:flex flex-row gap-10'>
      {navLinks.map(link => (
        <li
          key={link.id}
          className={`${active === link.title ?"text-white": "text-secondary"} hoover: text-white text-[18px] font-medium cursor-pointer`} onClick={() => handleMenuClick(link.id)}>
          
            <a href={`#${link.id}`}>{link.title}</a>

        </li>
      ))}

    </ul>
    <div className='sm:hidden flex flex-1 justify-end items-center  '>
      <img src={toggle ? close : menu} 
      alt="hamburger-menu" 
      className='w-[28px] h-[28px] object-contain cursor-pointer'
      onClick={() => setToggle(!toggle)}
      />
      
      <div
        className={`${!toggle ? 'hidden' : 'flex'} p-5 black-gradient absolute top-12 right-0 mx-1 my-3.5 min-w-[140px] z-10 rounded-md`}
      >
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinks.map(link => (
            <li
              key={link.id}
              className={`${
                active === link.id 
                ? "text-white" 
                : "text-white"
              } hoover: text-white text-[18px] font-medium cursor-pointer`} 
              onClick={() => {
                handleMenuClick(link.id)
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          </ul>
      </div>
    </div>
   </div>
  </nav>
  )
}

export default Navbar