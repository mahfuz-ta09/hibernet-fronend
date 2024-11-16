import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from './axios/axiosBaseQuery'


export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery({ 
        // baseUrl: 'http://localhost:7373/app/v1' ,
        baseUrl: 'https://hibernet-server.onrender.com/app/v1' 
    }),
    tagTypes: ["specialty","course","adminControll"],
    endpoints: () => ({}),
})