import { USER_ROLE } from "@/const/role";
import { NavContent, Role } from "@/types/common"


const sideNavItem = (role : Role) => {
    const navItem:NavContent[] = []
  

    switch(role){
        case USER_ROLE.SUPER_ADMIN:
            navItem.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    icon: "Dashboard",
                },{
                    title: "Manage Users",
                    path: `${role}/manage-users`,
                    icon: "Dashboard",
                }
            );
            break;
        case USER_ROLE.ADMIN:
            navItem.push(
                {
                    title       : "Dasboard",
                    path        : `${role}`,
                    icon       : "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },
                {
                    title       : "Specialties",
                    path        : `${role}/specialties`,
                    icon       : "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },
                {
                    title       : "Courses",
                    path        : `${role}/courses`,
                    icon       : "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },
                {
                    title       : "Schedules",
                    path        : `${role}/schedules`,
                    icon       : "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },
                // {
                //     title       : "Appointments",
                //     path        : `${role}/appointments`,
                //     icon       : "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                // },
                {
                    title       : "Reviews",
                    path        : `${role}/reviews`,
                    icon       : "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },
            );
            break;
        case USER_ROLE.STUDENT:
            navItem.push(
                {
                    title       : "Dasboard",
                    path        : `${role}`,
                    icon       : "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },
                {
                    title       : "Schedules",
                    path        : `${role}/schedules`,
                    icon       : "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },
                {
                    title       : "My classes",
                    path        : `${role}/my-classes`,
                    icon       : "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },
            );
            break;
    }

    return [...navItem]
}

export default sideNavItem