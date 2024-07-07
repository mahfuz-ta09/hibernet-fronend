'use client'
import Link from "next/link"
import { useForm, SubmitHandler } from "react-hook-form"
import '../../css/Login/Login.css'
import bgImg from '../../../public/assets/log.webp'
import Image from "next/image"
import convertFormData from "@/utils/convertFormData"
import { signUpUser } from "@/action/registerUser"
import { useRouter } from "next/navigation"

type Inputs = {
    name: string
    email: string
    password: string
}


const SignUpPage = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> =  async(data) => {
        var formData = convertFormData(data)
        try{
            const res = await signUpUser(formData)
            console.log(res)
            if(res?.accessToken){
                localStorage.setItem('accessToken',res?.accessToken)
                router.push('/')
            }
        }catch(err:any){
            console.log(err)
        }
        console.log(formData)
    }

    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-content-item">
                    <h1 className="">Sign up</h1>
                    <p className="">Signup to open the horizon</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="input-container">
                        <input type='text' {...register("name", { required: true })}  placeholder="enter your name" className=""/>
                        <input type='email' {...register("email", { required: true })}  placeholder="enter your email" className=""/>
                        <input type='password' {...register("password", { required: true })}  placeholder="enter your password" className=""/>
                        <div className="form-link">
                            <button type="submit">signup</button>
                        </div>
                    </form>
                    <Link className='forgot-link underline' href="/login">Already have an account? login</Link>
                </div>
                <div className='image-conteiner'>
                    <Image src={bgImg} priority alt=""/>
                </div>
            </div>
            </div>
    )
}

export default SignUpPage