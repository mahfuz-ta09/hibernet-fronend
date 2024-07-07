'use client'
import Link from 'next/link'
import '../../css/dashBoard/layout.css'
import { useEffect, useRef, useState } from 'react'
import {  MdOutlineDoubleArrow } from 'react-icons/md'
import dynamic from 'next/dynamic'



const LayoutPage = () => {
    const btnRef = useRef<HTMLButtonElement>(null)
    const navRef = useRef<HTMLDivElement>(null)
    const [isOpen,setIsOpen] = useState(false)


    const NavLink = dynamic(() => import('./DashNavLink'), { ssr: false })

    useEffect(()=>{
      const handleNavBar = (e:any) => {
        if(navRef.current && btnRef.current && !navRef.current.contains(e.target) &&  !btnRef.current.contains(e.target)){
          setIsOpen(false)
        }
      }
      document.addEventListener("click",handleNavBar)
      return ()=> {
        document.removeEventListener("click",handleNavBar)
      }
    },[])

    const handler = () =>{
      setIsOpen(true)
    }


    return (
        <div ref={navRef} className={isOpen? "dash-nav active":"dash-nav hide"}>
            <div className="dash-nav-element">
                <div className='dash-nav-header'>
                    <h1>Hiber-net edu</h1>
                    <NavLink />
                </div>
                <button  className='nav-icon-btn' onClick={() => handler()} ref={btnRef} ><MdOutlineDoubleArrow  className='nav-icon'/></button>
                <div className='dash-nav-footer'>
                    <Link className='footer-nav' href="/">back to home</Link>
                </div>
            </div>
        </div>
    )
}

export default LayoutPage