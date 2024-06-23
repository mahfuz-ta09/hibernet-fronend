import { USER_ROLE } from "@/const/role";
import { NavContent, Role } from "@/types/common"
import { FaVectorSquare } from "react-icons/fa6";

const sideNavItem = (role : Role) => {
    const navItem:NavContent[] = []
  

    switch(role){
        case USER_ROLE.SUPER_ADMIN:
            navItem.push(
                {
                    title   : "Dashboard",
                    path    : `${role}`,
                    icon    : FaVectorSquare,
                },
                {
                    title   : "Manage Users",
                    path    : `${role}/manage-users`,
                    icon    : FaVectorSquare,
                },
                {
                    title   : "Statistics",
                    path    : `${role}/web-stat`,
                    icon    : FaVectorSquare,
                }
            );
            break;
        case USER_ROLE.ADMIN:
            navItem.push(
                {
                    title       : "Dasboard",
                    path        : `${role}`,
                    icon        : FaVectorSquare,
                },
                {
                    title       : "Specialties",
                    path        : `${role}/specialties`,
                    icon        : FaVectorSquare,
                },
                {
                    title       : "Courses",
                    path        : `${role}/courses`,
                    icon        : FaVectorSquare,
                },
                {
                    title       : "Schedules",
                    path        : `${role}/schedules`,
                    icon        : FaVectorSquare,
                },
                {
                    title       : "Banner",
                    path        : `${role}/banner`,
                    icon        : FaVectorSquare,
                },
                {
                    title       : "Reviews",
                    path        : `${role}/reviews`,
                    icon        : FaVectorSquare,
                },
            );
            break;
        case USER_ROLE.STUDENT:
            navItem.push(
                {
                    title       : "Dasboard",
                    path        : `${role}`,
                    icon        : FaVectorSquare,
                },
                {
                    title       : "Schedules",
                    path        : `${role}/schedules`,
                    icon        : FaVectorSquare,
                },
                {
                    title       : "My classes",
                    path        : `${role}/my-classes`,
                    icon        : FaVectorSquare,
                },
            );
            break;
    }

    return [...navItem]
}

export default sideNavItem