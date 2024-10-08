import '../../css/dashBoard/layout.css'
import LayoutPage from "./LayoutPage"


const layout = ({ children } : {children : React.ReactNode}) => {

    return (
      <div  className='dashboard-layout'>
          <div className="dash-content">
            <LayoutPage />
            <div className="dash-item">
              <div className="dash-item-header">
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