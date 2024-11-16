'use server'

export const logInUser = async (formData:FormData) =>{
    const res = await fetch('https://hibernet-server.onrender.com/app/v1/auth/login',{
        method: 'POST',
        credentials: 'include',
        body: formData,
        cache: 'no-store'
    })

    const uesrInfo = await res.json()
    return uesrInfo
}

export const signUpUser = async (formData:FormData) =>{
    const res = await fetch('https://hibernet-server.onrender.com/app/v1/auth/signup',{
        method: 'POST',
        credentials: 'include',
        body: formData,
        cache: 'no-store'
    })

    const uesrInfo = await res.json()
    return uesrInfo
}