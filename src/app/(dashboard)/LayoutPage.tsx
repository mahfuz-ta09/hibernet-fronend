'use client'
import Link from 'next/link'
import '../../css/dashBoard/layout.css'
import sideNavItem from '@/utils/dashBoard/sideNavItem'
import { Role } from '@/types/common'
import { useEffect, useRef, useState } from 'react'
import {  MdOutlineDoubleArrow } from 'react-icons/md'
import { usePathname } from 'next/navigation'



const LayoutPage = () => {
    const pathname = usePathname() 
    const btnRef = useRef<HTMLButtonElement>(null)
    const navRef = useRef<HTMLDivElement>(null)
    const [role,setRole] = useState("admin")
    const [isOpen,setIsOpen] = useState(false)
    let dashTitle:string = "/dashboard/" 




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
                    <div className='dash-nav-body'>
                        {
                        sideNavItem(role as Role).map((item,index) =>(
                            <Link className={pathname === `${dashTitle}`+item?.path ? 'nav-link active' :'nav-link'} key={index} href={`/dashboard/${item?.path}`}>
                                <item.icon />
                                <span>{item?.title}</span>
                            </Link>
                            ))
                        }
                    </div>
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