import Link from 'next/link'
import '../../css/Login/Login.css'
import bgImg from '../../../public/assets/log.webp'
import Image from 'next/image'


const LoginPage = () => {
  
    return (
        <div className="login-container">
          <div className="login-content">
              <div className="login-content-item">
                  <h1 className="">Log in</h1>
                  <p className="">Log in to your account to access your content</p>
                  <div className="input-container">
                      <input placeholder="enter your email" className=""/>
                      <input placeholder="enter your password" className=""/>
                      <div className="form-link">
                          <Link className='forgot-link' href="">forgot password?</Link>
                          <button className="">next</button>
                      </div>
                  </div>
                  <h2 className="link-header">or login with</h2>
                  <div className="social-login">
                          <button className="">facebook</button>
                          <button className="">google</button>
                  </div>
                  <Link className='forgot-link underline' href="/signup">Don't have account? sign up</Link>
              </div>
              <div className='image-conteiner'>
                <Image src={bgImg} className="" alt=''/>
              </div>
          </div>
        </div>
    )
}

export default LoginPage