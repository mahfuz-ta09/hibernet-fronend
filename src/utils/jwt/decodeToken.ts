import { jwtDecode } from "jwt-decode"
import { getAccessToken } from "./getAccessToken"
import { jwtPayload } from "@/types/common"

export const decodeToken =  () => {
    const token = getAccessToken()
    let data:jwtPayload = {}

    if(token){
        data =  jwtDecode(token)
    }

    return data
}
