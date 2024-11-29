"use client"
import { decodeToken } from '@/utils/jwt/decodeToken'
import '../../../css/NavBar/NavBar.css'
import Link from 'next/link'
import { useState } from 'react'
import { HiMiniBars3BottomRight } from "react-icons/hi2"
import { MdCancel } from 'react-icons/md'
import { logOut } from '@/utils/logOut'
import { useRouter } from 'next/navigation'
import { BiSolidHome } from 'react-icons/bi'



const LinkContent = () => {
    const [isOpen,setIsOpen] = useState(false)
    const users =  decodeToken()
    const router = useRouter()

    const handleLogout = () =>{
        logOut()
        router.refresh()
    }

    const closeNav = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            {
                isOpen === true ? 
                <MdCancel onClick={()=>setIsOpen(!isOpen)} className='nav-btn-icon' />: 
                <HiMiniBars3BottomRight onClick={()=>setIsOpen(!isOpen)} className='nav-btn-icon' />
            }
            <ul className={isOpen === true ? 'nav-item show' : 'nav-item hide'}>
                <Link onClick={()=>closeNav()} className='link home-btn' href="/" ><BiSolidHome /></Link>
                <Link onClick={()=>closeNav()} className='link' href="/courses" >Courses</Link>
                <Link onClick={()=>closeNav()} className='link' href="/blogs" >Blogs</Link>
                <Link onClick={()=>closeNav()} className='link' href="/feed" >Feed</Link>
                <Link onClick={()=>closeNav()} className='link' href="/about" >About</Link>
                <Link onClick={()=>closeNav()} className='link' href="/dashboard" >Dashboard</Link>
                {users?.email ? <button className='logout-btn' onClick={handleLogout}>Logout</button> : <button className='link' onClick={()=>{router.push('/login');closeNav()}}>Login</button>}
            </ul>
        </>
    )
}

export default LinkContent