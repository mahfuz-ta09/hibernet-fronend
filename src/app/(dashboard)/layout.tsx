import Link from 'next/link'
import '../../css/dashBoard/layout.css'




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
              <div className="app-header-navigation">
                <div className="tabs">
                  <a href="#">
                    Overview
                  </a>
                  <a href="#" className="active">
                    Payments
                  </a>
                  <a href="#">
                    Cards
                  </a>
                  <a href="#">
                    Account
                  </a>
                  <a href="#">
                    System
                  </a>
                  <a href="#">
                    Business
                  </a>
                  
                  <Link className='text-white bold' href='/'>back to home</Link>
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
              <div className="app-header-mobile">
                <button className="icon-button large">
                  <i className="ph-list"></i>
                </button>
              </div>

            </header>
            
            <div className="app-body">
              <div className="app-body-navigation">
                <nav className="navigation">
                  <a href="#">
                    <i className="ph-browsers"></i>
                    <span>Dashboard</span>
                  </a>
                  <a href="#">
                    <i className="ph-check-square"></i>
                    <span>Scheduled</span>
                  </a>
                  <a href="#">
                    <i className="ph-swap"></i>
                    <span>Transfers</span>
                  </a>
                  <a href="#">
                    <i className="ph-file-text"></i>
                    <span>Templates</span>
                  </a>
                  <a href="#">
                    <i className="ph-globe"></i>
                    <span>SWIFT</span>
                  </a>
                  <a href="#">
                    <i className="ph-clipboard-text"></i>
                    <span>Exchange</span>
                  </a>
                </nav>
                <footer className="footer">
                  <div>
                    Hiber-net edu<br />
                    All Rights Reserved 2024
                  </div>
                </footer>
              </div>
              <div className="app-body-main-content">
                <section className="service-section">
                  <h2>Service</h2>
                </section>

                {children}
              
              </div>
              
            </div>
          </div>
      </div>
    )
  }
  
  export default layout

  // {children}