import dynamic from 'next/dynamic'
import '../../../css/NavBar/NavBar.css'
import Image from 'next/image'


const NavBar = () => {
  const ServerComponent = dynamic(() => import('./LinkContent'), { ssr: false })

  return (
    <div className='nav-holder'>
        <div className="nav-content">
            <Image src="/assets/logo-2.png" width={120} height={120} className='nav-logo nav-tag' priority alt=''/>
            <ServerComponent />
        </div>
    </div>
  )
}


export default NavBar
