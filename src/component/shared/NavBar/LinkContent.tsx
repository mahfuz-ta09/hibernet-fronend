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

    return (
        <>
            {
                isOpen === true ? 
                <MdCancel onClick={()=>setIsOpen(!isOpen)} className='nav-btn-icon ' />: 
                <HiMiniBars3BottomRight onClick={()=>setIsOpen(!isOpen)} className='nav-btn-icon' />
            }
            <ul className={isOpen === true ? 'nav-item show' : 'nav-item hide'}>
                <Link className='link home-btn' href="/" ><BiSolidHome /></Link>
                <Link className='link' href="/courses" >Courses</Link>
                <Link className='link' href="/blogs" >Blogs</Link>
                <Link className='link' href="/feed" >Feed</Link>
                <Link className='link' href="/about" >About</Link>
                <Link className='link' href="/dashboard" >Dashboard</Link>
                {users?.email ? <button className='logout-btn' onClick={handleLogout}>Logout</button> : <button className='link' onClick={()=>router.push('/login')}>Login</button>}
            </ul>
        </>
    )
}

export default LinkContent