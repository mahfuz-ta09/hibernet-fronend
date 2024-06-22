import { USER_ROLE } from "@/const/role";
import { NavContent, Role } from "@/types/common"


const sideNavItem = (role : Role) => {
    const navItem:NavContent[] = []
  

    switch(role){
        case USER_ROLE.SUPER_ADMIN:
            navItem.push(
                {
                    title   : "Dashboard",
                    path    : `${role}`,
                    icon    : "Dashboard",
                    nested  : []
                },
                {
                    title   : "Manage Users",
                    path    : `${role}/manage-users`,
                    icon    : "Dashboard",
                    nested  : []
                },
                {
                    title   : "Statistics",
                    path    : `${role}/web-stat`,
                    icon    : "Dashboard",
                    nested  : []
                }
            );
            break;
        case USER_ROLE.ADMIN:
            navItem.push(
                {
                    title       : "Dasboard",
                    path        : `${role}`,
                    icon        : "",
                    nested      : []
                },
                {
                    title       : "Specialties",
                    path        : `${role}/specialties`,
                    icon        : "",
                    nested      : []
                },
                {
                    title       : "Courses",
                    path        : `${role}/courses`,
                    icon        : "",
                    nested      : [`${role}/courses/add`]
                },
                {
                    title       : "Schedules",
                    path        : `${role}/schedules`,
                    icon        : "",
                    nested      : []
                },
                // {
                //     title       : "Appointments",
                //     path        : `${role}/appointments`,
                //     icon       : "",
                // },
                {
                    title       : "Reviews",
                    path        : `${role}/reviews`,
                    icon        : "",
                    nested      : []
                },
            );
            break;
        case USER_ROLE.STUDENT:
            navItem.push(
                {
                    title       : "Dasboard",
                    path        : `${role}`,
                    icon        : "",
                    nested      : []
                },
                {
                    title       : "Schedules",
                    path        : `${role}/schedules`,
                    icon        : "",
                    nested      : []
                },
                {
                    title       : "My classes",
                    path        : `${role}/my-classes`,
                    icon        : "",
                    nested      : []
                },
            );
            break;
    }

    return [...navItem]
}

export default sideNavItem