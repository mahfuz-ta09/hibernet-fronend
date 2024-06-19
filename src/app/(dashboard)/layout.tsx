'use client'
import Link from 'next/link'
import '../../css/dashBoard/layout.css'
import sideNavItem from '@/utils/dashBoard/sideNavItem'
import { Role } from '@/types/common'



const layout = ({ children } : {children : React.ReactNode} ) => {
  
    return (
      <div className='dashboard-layout'>
          <div className="app">
            <header className="app-header">
              
              <div className="app-header-logo">
                <div className="logo">
                  <span className="logo-icon">
                    <img src="https://assets.codepen.io/285131/almeria-logo.svg" />
                  </span>
                  <h1 className="logo-title">
                    <span>hiber-net edu</span>
                    <span>Syleht,Bangladesh</span>
                  </h1>
                </div>
              </div>
              
              <div className="app-header-actions">
                <button className="user-profile">
                  <span>Matheo Peterson</span>
                  <span>
                    <img src="https://assets.codepen.io/285131/almeria-avatar.jpeg" />
                  </span>
                </button>
                <div className="app-header-actions-buttons">
                  <button className="icon-button large">
                    <i className="ph-magnifying-glass"></i>
                  </button>
                  <button className="icon-button large">
                    <i className="ph-bell"></i>
                  </button>
                </div>
              </div>
              
            </header>
            
            <div className="app-body">
              <div className="app-body-navigation">
                <nav className="navigation">
                  {
                  sideNavItem("student" as Role).map((item,index) =>(
                      <Link key={index} href={`/dashboard/${item?.path}`}>
                        <i className="ph-browsers"></i>
                        <span>{item?.title}</span>
                      </Link>
                    ))
                  }
                  <Link href="/">
                    <i className="ph-browsers"></i>
                    <span>back to home?</span>
                  </Link>

                </nav>
                <footer className="footer">
                  <div>
                    Hiber-net edu<br />
                    All Rights Reserved 2024
                  </div>
                </footer>
              </div>
              <div className="app-body-main-content">
                {/* <section className="service-section">
                  <h2>Service</h2>
                </section> */}

                {children}
              
              </div>
              
            </div>
          </div>
      </div>
    )
  }
  
  export default layout

  // {children}