import Link from "next/link"
import '../../css/Login/Login.css'
import bgImg from '../../../public/assets/log.webp'
import Image from "next/image"


const SignUpPage = () => {
    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-content-item">
                    <h1 className="">Sign up</h1>
                    <p className="">Signup to open the horizon</p>
                    <div className="input-container">
                        <input placeholder="enter your name" className=""/>
                        <input placeholder="enter your email" className=""/>
                        <input placeholder="enter your password" className=""/>
                        <div className="form-link">
                            <button className="">next</button>
                        </div>
                    </div>
                    <Link className='forgot-link underline' href="/login">Already have an account? login</Link>
                </div>
                <div className='image-conteiner'>
                    <Image src={bgImg} className="" alt=""/>
                </div>
            </div>
            </div>
    )
}

export default SignUpPage