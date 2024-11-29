import dynamic from 'next/dynamic'
import '../../../css/NavBar/NavBar.css'
import Image from 'next/image'


const NavBar = () => {
  const ServerComponent = dynamic(() => import('./LinkContent'), { ssr: false })

  return (
    <div className='nav-holder'>
        <div className="nav-content">
            {/* <h1 className='nav-tag'>Aim way</h1> */}
            <Image src="/assets/logo-2.png" width={150} height={0} className='nav-logo' priority alt=''/>
            <ServerComponent />
        </div>
    </div>
  )
}


export default NavBar
