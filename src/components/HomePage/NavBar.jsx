import React from 'react'
import logo from '../../assets/logo.png'
import admissionForm from '../AdmissionPage/admissionForm'

const NavBar = () => {
  return (
    <div>
        <div className="flex justify-between items-center py-2 px-5 flex-row">
            <img src={logo} alt="" width="20%" className="float-left drop-shadow-[0_0_3px_white]"/>
            <ul className="flex justify-between items-center flex-row gap-5 text-base text-beige">
                <li className="px-2 py-1 hover:bg-hover hover:text-white rounded-sm"><a href="">Home</a></li>
                <li className="px-2 py-1 hover:bg-hover hover:text-white rounded-sm"><a onClick={admissionForm} href="">Admission</a></li>
                <li className="px-2 py-1 hover:bg-hover hover:text-white rounded-sm"><a href="">Career</a></li>
                <li className="px-2 py-1 hover:bg-hover hover:text-white rounded-sm"><a href="">About</a></li>
            </ul>
            <a href="#" className="text-base px-4 py-1 text-maroon bg-beige shadow-[5px_5px_0_maroon] rounded-lg hover:shadow-[8px_8px_0_maroon] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:text-light-white transition-transform transition-shadow duration-2000 ease-in-out">Log In</a>
        </div>
    </div>
  )
}

export default NavBar;