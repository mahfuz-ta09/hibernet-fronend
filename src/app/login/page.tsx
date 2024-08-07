'use client'
import Link from 'next/link'
import '../../css/Login/Login.css'
import bgImg from '../../../public/assets/log.webp'
import Image from 'next/image'
import { useForm, SubmitHandler } from "react-hook-form"
import convertFormData from '@/utils/convertFormData'
import { logInUser } from '@/action/registerUser'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

type Inputs = {
    email: string
    password: string
}



const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const router = useRouter()

    const onSubmit: SubmitHandler<Inputs> = async(data) => {
      let formData = convertFormData(data)
        try{
            const res = await logInUser(formData)

            if(res?.statusCode === 200){
                localStorage.setItem('accessToken',res?.meta)
                toast.success(res?.message)
                router.push('/')
            }else{
                toast.error(res?.message)
            }
        }catch(err:any){
            console.log(err)
        }
    }

    return (
            <div className="login-container">
            <div className="login-content">
                <div className="login-content-item">
                    <h1 className="">Log in</h1>
                    <p className="">Log in to your account to access your content</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="input-container">
                        <input type='email' {...register("email", { required: true })} placeholder="enter your email" className=""/>
                        <input type='password' {...register("password", { required: true })}   placeholder="enter your password" className=""/>
                        <div className="form-link">
                            <Link className='forgot-link' href="">forgot password?</Link>
                            <button type="submit" className="">login</button>
                        </div>
                    </form>
                    <h2 className="link-header">or login with</h2>
                    <div className="social-login">
                            <button className="">facebook</button>
                            <button className="">google</button>
                    </div>
                    <Link className='forgot-link underline' href="/signup">Do not have account? sign up</Link>
                </div>
                <div className='image-conteiner'>
                    <Image src={bgImg} priority className="" alt=''/>
                </div>
            </div>
            </div>
    )
}

export default LoginPage