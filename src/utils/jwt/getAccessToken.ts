
export const getAccessToken = () =>{
    if(typeof window !== 'undefined'){
        const token = localStorage.getItem('accessToken')
        return token
    }
    return null
} 