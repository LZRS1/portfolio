import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './../App.css'

export default function Header () {
    const [show, setShow] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const toggleSwitch = () => {
        setShow(!show)
        setShowMenu(!showMenu)
    }

    const closeMenu = () => {
        setShow(false)
        setShowMenu(false)
    }

    return(
        <>
        <header className="w-full flex items-center absolute top-0 z-20 bg-[#393939]">
            <div className="container w-5/6 mx-auto flex items-center justify-between relative">
                <div className="py-4">
                    <img src="https://i.ibb.co/wszCx2v/logo.png" width="50" height="50" alt="" />
                </div>
                <div className="flex items-center">
                    <button onClick={toggleSwitch} id="hamburger" name="hamburger" type="button" className={`${show ? "hamburger-active" : ""} block absolute right-0 lg:hidden`}>
                        <span className="w-[30px] h-[2px] my-2 block bg-red-600 transition duration-300 ease-in-out origin-top-left"></span>
                        <span className="w-[30px] h-[2px] my-2 block bg-red-600 transition duration-300 ease-in-out"></span>
                        <span className="w-[30px] h-[2px] my-2 block bg-red-600 transition duration-300 ease-in-out origin-bottom-left"></span>
                    </button>
                    
                    <nav id="nav-menu" className={`${showMenu ? "" : "hidden"} lg:block lg:static lg:max-w-full lg:shadow-none lg:rounded-none absolute bg-[#393939] py-2 efek-shadow rounded-lg max-w-[200px] w-full right-0 top-full z-10`}>
                        <ul className="block lg:flex">
                            <li className="group py-2 px-4">
                                <NavLink to="/" className="nav-active text-base text-red-600 group-hover:border-b-4 pb-1 border-red-600 transition-all" onClick={closeMenu}>Home</NavLink>
                            </li>
                            <li className="group py-2 px-4">
                                <NavLink to="/Portfolio" className="text-base text-red-600 group-hover:border-b-4 pb-1 border-red-600 transition-all" onClick={closeMenu}>Portfolio</NavLink>
                            </li>
                            <li className="group py-2 px-4">
                                <NavLink to="/Services" className="text-base text-red-600 group-hover:border-b-4 pb-1 border-red-600 transition-all" onClick={closeMenu}>Services</NavLink>
                            </li>
                            <li className="group py-2 px-4">
                                <NavLink to="/Contact" className="text-base text-red-600 group-hover:border-b-4 pb-1 border-red-600 transition-all" onClick={closeMenu}>Contact</NavLink>
                            </li>
                            <li className="group py-2 px-4">
                                <a href="https://l4zarus.online" target="_blank" rel="noopener noreferrer" className="text-base text-red-600 group-hover:border-b-4 pb-1 border-red-600 transition-all" onClick={closeMenu}>Donacion</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        </>
    )
}
