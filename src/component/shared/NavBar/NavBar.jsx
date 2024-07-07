import dynamic from 'next/dynamic'
import '../../../css/NavBar/NavBar.css'


const NavBar = () => {
  const ServerComponent = dynamic(() => import('./LinkContent'), { ssr: false })

  return (
    <div className='nav-holder'>
        <div className="nav-content">
            <h1 className='nav-tag'>Hiber-net</h1>
            <ServerComponent />
        </div>
    </div>
  )
}


export default NavBar
