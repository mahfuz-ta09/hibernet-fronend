'use client'
import Link from 'next/link'
import '../../css/dashBoard/layout.css'
import sideNavItem from '@/utils/dashBoard/sideNavItem'
import { Role } from '@/types/common'
import { useEffect, useRef, useState } from 'react'
import {  MdOutlineDoubleArrow } from 'react-icons/md'



const layout = ({ children } : {children : React.ReactNode} ) => {
    const btnRef = useRef<HTMLButtonElement>(null)
    const navRef = useRef<HTMLDivElement>(null)
    const [role,setRole] = useState("admin")
    const [isOpen,setIsOpen] = useState(true)


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
      <div  className='dashboard-layout'>
        <div className="dash-content">
          
          <div ref={navRef} className={isOpen? "dash-nav active":"dash-nav hide"}>
            <div className="dash-nav-element">
              <div className='dash-nav-header'>
              <h1>Hiber-net edu</h1>
                <h1>Sylhet,Bangladesh</h1>
              </div>
              <div className='dash-nav-body'>
                {
                  sideNavItem(role as Role).map((item,index) =>(
                      <Link className='nav-link' key={index} href={`/dashboard/${item?.path}`}>
                        <span>{item?.title}</span>
                      </Link>
                    ))
                }
              </div>
              <div className='dash-nav-footer'>
                <Link className='footer-nav' href="/">back to home</Link>
              </div>
            </div>
          </div>

          <div className="dash-item">
            <div className="dash-item-header">
              <button  className='nav-icon-btn' onClick={() => handler()} ref={btnRef} ><MdOutlineDoubleArrow  className='nav-icon'/></button>
              <div className='header-title'>
                <h1>hello mr shit</h1>
                <h1>wellcome to dashboard</h1>
              </div>
            </div>
            <div className='dash-item-content'>
              {children}
            </div>
          </div>

        </div>
      </div>
    )
  }
  
  export default layout