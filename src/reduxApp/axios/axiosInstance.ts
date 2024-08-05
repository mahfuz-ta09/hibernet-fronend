import { responseError, responseSuccess } from '@/types/common'
import axios from 'axios'


const instance = axios.create()
instance.defaults.headers.post["Content-Type"] = "application/json"
instance.defaults.headers["Accept"] = "application/json"
instance.defaults.timeout = 60000


instance.interceptors.request.use(function (config) {
    const accessToken = 'access-token here'
    if(accessToken){
      config.headers.Authorization = accessToken
    }
    return config
  }, function (error) {


    return Promise.reject(error)
})

//@ts-ignore
instance.interceptors.response.use(function (response) {

    const responseObject:responseSuccess = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    }

    return responseObject
  }, function (error) {

    const responseObject:responseError = {
      errorMessage: error?.response.data?.errorMessage,
      statusCode: error?.response?.data?.statusCode,
      message: error?.response.data?.message,
    }

    return { error: responseObject }
})

export { instance }