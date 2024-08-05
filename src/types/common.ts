import { USER_ROLE } from "@/const/role"
import { IconType } from "react-icons"

export type Role = {
    SUPER_ADMIN?: typeof USER_ROLE.SUPER_ADMIN
    ADMIN?: typeof USER_ROLE.ADMIN
    STUDENT?: typeof USER_ROLE.STUDENT
    USER?: typeof USER_ROLE.USER
}

export type NavContent = {
    title: string
    path: string
    icon: IconType
}

export type metaT = {
    page : number
    limit: number
    total: number
}

export type responseSuccess = {
    data: any
    meta?: metaT
}

export type responseError = {
    statusCode?: number
    message?:string
    errorMessage?:responseError[]
}

export type jwtPayload =  {
    email?:string
    role?:string
}


export type spType = {
    url: string,
    _id: string,
    name:string
}
