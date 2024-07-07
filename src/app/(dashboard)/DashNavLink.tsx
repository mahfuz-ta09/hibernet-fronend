import '../../css/dashBoard/layout.css'
import sideNavItem from '@/utils/dashBoard/sideNavItem'
import { Role } from '@/types/common'
import Link from 'next/link'
import { decodeToken } from '@/utils/jwt/decodeToken'
import { usePathname } from 'next/navigation'

const DashNavLink = () => {
    const users =  decodeToken()
    const pathname = usePathname() 
    let dashTitle:string = "/dashboard/" 


    return (
        <div className='dash-nav-body'>
            {
                sideNavItem(users?.role as Role).map((item,index) =>(
                    <Link className={pathname === `${dashTitle}`+item?.path ? 'nav-link active' :'nav-link'} key={index} href={`/dashboard/${item?.path}`}>
                        <item.icon />
                        <span>{item?.title}</span>
                    </Link>
                ))
            }
        </div>
    )
}

export default DashNavLink