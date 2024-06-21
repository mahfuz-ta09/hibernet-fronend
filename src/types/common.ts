import { USER_ROLE } from "@/const/role"

export type Role = {
    SUPER_ADMIN?: typeof USER_ROLE.SUPER_ADMIN
    ADMIN?: typeof USER_ROLE.ADMIN
    STUDENT?: typeof USER_ROLE.STUDENT
    USER?: typeof USER_ROLE.USER
}

export type NavContent = {
    title: string
    path: string
    icon: string
    nested: string[]
}