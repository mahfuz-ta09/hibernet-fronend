"use client"
import Link from 'next/link'
import '../../../css/NavBar/NavBar.css'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useState } from 'react';
import { MdCancel } from 'react-icons/md';


const NavBar = () => {
  const [isOpen,setIsOpen] = useState(true)

  return (
    <div className='nav-holder'>
        <div className="nav-content">
            <h1 className='nav-tag'>Hiber-net</h1>
            {isOpen === true ? <MdCancel onClick={()=>setIsOpen(!isOpen)} className='nav-btn-icon' />: <HiMiniBars3BottomRight onClick={()=>setIsOpen(!isOpen)} className='nav-btn-icon' />}
                <ul className={isOpen === true ? 'nav-item show' : 'nav-item hide'}>
                    <Link className='link' href="/" >Home</Link>
                    <Link className='link' href="/" >Courses</Link>
                    <Link className='link' href="/" >Blog</Link>
                    <Link className='link' href="/" >About</Link>
                    <Link className='link' href="/" >DashBoard</Link>
                    <Link className='link' href="/login">Log In</Link>
                </ul>
        </div>
    </div>
  )
}


export default NavBar